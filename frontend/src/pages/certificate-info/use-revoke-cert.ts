import { openOrgFromAddressContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { useMutation } from '@tanstack/react-query'
import { Address, Sender, toNano } from '@ton/core'

const revokeCertMutationKey = 'revoke-certificate'

export const useRevokeCert = () => {
  return useMutation({
    mutationKey: [revokeCertMutationKey],
    mutationFn: async ({
      index,
      collectionAddress,
      sender,
    }: {
      sender: Sender
      collectionAddress: string
      index: number
    }) => {
      const contract = await openOrgFromAddressContract(tonClient, Address.parse(collectionAddress))
      return await contract.send(
        sender,
        {
          value: toNano('.1'),
        },
        {
          $$type: 'RevokeCertificateRequest',
          index: BigInt(index),
        }
      )
    },
  })
}
