import FlipIconInput from '@shared/uikit/filp-icon-input/flip-icon-input'
import { ChangeEvent, FC, ReactNode, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useSaveOffchainContent } from './save-offchain-content'

interface ExpectedFileStructure {
  name?: string
  description?: number
}

async function validateJsonFile(
  file: File,
  requiredFields: Array<keyof ExpectedFileStructure>
): Promise<{ success: true; data: ExpectedFileStructure } | { success: false; error: string }> {
  if (file.type !== 'application/json') {
    return { success: false, error: 'Файл должен быть в формате JSON.' }
  }

  try {
    const fileContent = await file.text()
    const parsedData: ExpectedFileStructure = JSON.parse(fileContent)
    const missingFields = requiredFields.filter(field => !(field in parsedData))

    if (missingFields.length > 0) {
      return {
        success: false,
        error: `В файле отсутствуют обязательные поля: ${missingFields.join(', ')}`,
      }
    }

    return { success: true, data: parsedData }
  } catch (error) {
    return { success: false, error: 'Неверный формат JSON.' }
  }
}

export const UploadContent: FC<{
  Icon: ReactNode
  content: string | null
  requiredFields?: Array<keyof ExpectedFileStructure>
  onContentUpload: (content: string | null) => void
}> = ({ content, Icon, onContentUpload, requiredFields = [] }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { mutateAsync: saveContent, isPending } = useSaveOffchainContent()

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const result = await validateJsonFile(file, requiredFields)
    if (!result.success) {
      alert(result.error)
      e.target.value = ''
    } else {
      console.log('Файл валиден:', result.data)
      const reader = new FileReader()
      reader.onloadend = async () => {
        const response = await saveContent({
          file: reader.result as string,
          filename: `${file.name}-${new Date().toISOString()}`,
        })
        const content = `${import.meta.env.VITE_TON_STORAGE_URL}${response.bagID}`
        onContentUpload(content)
      }
      reader.readAsDataURL(file)
    }
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
    <FlipIconInput
      type='file'
      ref={inputRef}
      activeIcon={+!!content}
      isLoading={isPending}
      onChange={onUpload}
      Icons={[
        { action: handleUpload, element: Icon },
        { action: handleClear, element: <RxCross2 className='w-8 h-8' /> },
      ]}
    />
  )
}
