import { metaDataService } from '@shared/api/meta-data'
import { useMutation } from '@tanstack/react-query'

const saveOffchainContentMutationKey = 'save-offchain-content'

export const useSaveOffchainContent = () => {
  return useMutation({
    mutationKey: [saveOffchainContentMutationKey],
    mutationFn: async (data: { file: Base64URLString; filename: string }) => {
      const { file, filename } = data
      return await metaDataService
        .saveMetaFile(file, filename)
        .then(({ bag_id }) => ({ bagID: bag_id }))
    },
  })
}
