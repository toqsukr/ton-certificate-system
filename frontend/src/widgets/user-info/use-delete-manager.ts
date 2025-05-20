import { openOrgFromAddressContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { useMutation } from '@tanstack/react-query'
import { Address, Sender, toNano } from '@ton/core'

const deleteManagerMutationKey = 'delete-manager'

export const useDeleteManager = () => {
  return useMutation({
    mutationKey: [deleteManagerMutationKey],
    mutationFn: async ({
      collection,
      manager,
      sender,
    }: {
      collection: Address
      sender: Sender
      manager: Address
    }) => {
      const contract = await openOrgFromAddressContract(tonClient, collection)
      return contract.send(
        sender,
        {
          value: toNano('.1'),
        },
        {
          $$type: 'RemoveManagerRequest',
          manager,
        }
      )
    },
  })
}
