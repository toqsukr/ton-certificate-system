import { openOrgFromAddressContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { createOffchainContent } from '@shared/lib/ton'
import { useMutation } from '@tanstack/react-query'
import { Address, Sender, toNano } from '@ton/core'

const mintCertMutationKey = 'mint-certificate'

export const useMintCertificate = () => {
  return useMutation({
    mutationKey: [mintCertMutationKey],
    mutationFn: async (data: {
      sender: Sender
      owner: Address
      collectionAddress: string
      content: string
    }) => {
      const { content, collectionAddress, owner, sender } = data
      const contract = await openOrgFromAddressContract(tonClient, Address.parse(collectionAddress))
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
