import { openOrgFromAddressContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { useMutation } from '@tanstack/react-query'
import { Address, Sender, toNano } from '@ton/core'

const deleteOrganizationMutationKey = 'delete-organization'

export const useDeleteOrg = () => {
  return useMutation({
    mutationKey: [deleteOrganizationMutationKey],
    mutationFn: async ({ collection, sender }: { sender: Sender; collection: Address }) => {
      const contract = await openOrgFromAddressContract(tonClient, collection)
      return contract.send(
        sender,
        {
          value: toNano('.1'),
        },
        {
          $$type: 'OrgDestroy',
        }
      )
    },
  })
}
