import { openOrgFactoryContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { createOffchainContent } from '@shared/lib/ton'
import { useMutation } from '@tanstack/react-query'
import { Address, Sender, toNano } from '@ton/core'

const createOrganizationMutationKey = 'create-organization'

export const useCreateOrganization = () => {
  return useMutation({
    mutationKey: [createOrganizationMutationKey],
    mutationFn: async (data: { sender: Sender; owner: string; content: string }) => {
      const { sender, owner, content } = data
      return openOrgFactoryContract(tonClient)?.send(
        sender,
        { value: toNano('0.1') },
        {
          $$type: 'OrgInitRequest',
          wallet: Address.parse(owner),
          content: createOffchainContent(content),
        }
      )
    },
  })
}
