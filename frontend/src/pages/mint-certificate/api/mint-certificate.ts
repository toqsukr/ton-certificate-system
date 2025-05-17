import { openOrgContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { createOffchainContent } from '@shared/lib/ton'
import { useMutation } from '@tanstack/react-query'
import { Address, Cell, Sender, toNano } from '@ton/core'

const mintCertMutationKey = 'mint-certificate'

export const useMintCertificate = () => {
  return useMutation({
    mutationKey: [mintCertMutationKey],
    mutationFn: async (data: {
      sender: Sender
      owner: Address
      collectionOwner: string
      content: string
      collectionContent: Cell
    }) => {
      const { content, collectionOwner, collectionContent, owner, sender } = data
      const contract = await openOrgContract(
        tonClient,
        Address.parse(collectionOwner),
        collectionContent
      )
      return await contract.send(
        sender,
        { value: toNano('0.1') },
        {
          $$type: 'RequestNftDeploy',
          content: createOffchainContent(content),
          owner,
        }
      )
    },
  })
}
