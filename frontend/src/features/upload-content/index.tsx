import FlipIconInput from '@shared/uikit/filp-icon-input/flip-icon-input'
import { ChangeEvent, FC, HTMLProps, ReactNode, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useIsContentSaving, useSaveOffchainContent } from './save-offchain-content'

type UploadContentProps = HTMLProps<HTMLInputElement> & {
  Icon: ReactNode
  contentURL: string | null
  onContentUpload: (content: string | null) => void
  label: string
}

const UploadContent: FC<UploadContentProps> = ({
  contentURL,
  Icon,
  onContentUpload,
  label,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { mutateAsync: saveContent, isPending } = useSaveOffchainContent()

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = async () => {
      console.log('onloadend')
      const response = await saveContent({
        file: reader.result as string,
        filename: `${file.name}-${new Date().toISOString().slice(0, 10)}`,
      })
      const content = `${import.meta.env.VITE_TON_STORAGE_URL}${response.bagID}`
      onContentUpload(content)
    }
    reader.readAsDataURL(file)
  }

  const handleClear = () => {
    if (inputRef?.current) {
      inputRef.current.value = ''
      onContentUpload(null)
    }
  }

  const handleUpload = () => {
    inputRef.current?.click()
  }

  return (
    <div className='relative'>
      {!!!inputRef.current?.value && (
        <span className='absolute text-[var(--text-third-color)] z-[1] font-bold top-1/2 left-4 -translate-y-1/2'>
          {label}
        </span>
      )}
      <FlipIconInput
        {...inputProps}
        style={{
          color: !!inputRef.current?.value ? 'white' : 'transparent',
        }}
        type='file'
        ref={inputRef}
        activeIcon={+!!contentURL}
        isLoading={isPending}
        onChange={onUpload}
        label='fas'
        Icons={[
          { action: handleUpload, element: Icon },
          { action: handleClear, element: <RxCross2 className='w-8 h-8' /> },
        ]}
      />
    </div>
  )
}

export { UploadContent, useIsContentSaving, useSaveOffchainContent }
