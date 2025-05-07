import { Address, Cell, Sender } from '@ton/core'
import axios from 'axios'

export const metaDataService = {
  async getTempFile(fileBase64: Base64URLString, originalFilename: string) {
    const fileBlob = await fetch(fileBase64, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    }).then(res => res.blob())

    const file = new File([fileBlob], originalFilename, { type: fileBlob.type })

    const formData = new FormData()
    formData.append('file', file)

    return axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'arraybuffer',
    })
  },

  async saveData(sender: Sender, file: Base64URLString) {
    return sender.send({
      to: Address.parse(import.meta.env.VITE_STORAGE_PROVIDER_CONTRACT),
      value: 100000000n,
      body: Cell.fromBase64(file),
      bounce: false,
    })
  },
} as const
