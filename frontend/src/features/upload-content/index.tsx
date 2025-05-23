import { generateFilename } from '@shared/lib/tcs'
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
      const response = await saveContent({
        file: reader.result as string,
        filename: `${generateFilename()}${file.name.slice(file.name.lastIndexOf('.'))}`,
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
        <span
          style={{
            opacity: inputProps.disabled ? 0.5 : 1,
          }}
          className='absolute text-[var(--text-third-color)] z-[1] font-bold top-1/2 left-4 -translate-y-1/2'>
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
        Icons={[
          { action: handleUpload, element: Icon },
          { action: handleClear, element: <RxCross2 className='w-7 h-7' /> },
        ]}
      />
    </div>
  )
}

export { UploadContent, useIsContentSaving, useSaveOffchainContent }
