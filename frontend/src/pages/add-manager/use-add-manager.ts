import { openOrgFromAddressContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { useMutation } from '@tanstack/react-query'
import { Address, Cell, Sender, toNano } from '@ton/core'

const addManagerMutationKey = 'add-manager'

export const useAddManager = () => {
  return useMutation({
    mutationKey: [addManagerMutationKey],
    mutationFn: async ({
      collection,
      content,
      manager,
      sender,
    }: {
      collection: Address
      sender: Sender
      content: Cell
      manager: Address
    }) => {
      const contract = await openOrgFromAddressContract(tonClient, collection)
      return contract.send(
        sender,
        {
          value: toNano('.1'),
        },
        {
          $$type: 'AddManagerRequest',
          content,
          manager,
        }
      )
    },
  })
}
