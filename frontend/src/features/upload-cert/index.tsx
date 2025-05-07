import { metaDataService } from '@shared/api/meta-data'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import Button from '@shared/uikit/button'
import React from 'react'

const UploadCertificate = () => {
  const { sender } = useTonConnect()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = async () => {
        const response = await metaDataService.getTempFile(reader.result as string, file.name)
        console.log(response)
        const buffer = Buffer.from(response.data)
        metaDataService.saveData(sender, buffer.toString('base64'))
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <Button>
      <input readOnly type='file' onChange={handleFileChange} />
    </Button>
  )
}

export default UploadCertificate
