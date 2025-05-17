import { openOrgContract } from '@entities/organization'
import tonClient from '@shared/api/ton-client'
import { useMutation } from '@tanstack/react-query'
import { Address, Cell } from '@ton/core'

const revokeCertMutationKey = 'revoke-certificate'

export const useRevokeCert = () => {
  return useMutation({
    mutationKey: [revokeCertMutationKey],
    mutationFn: async ({ content, owner }: { owner: string; content: Cell }) => {
      openOrgContract(tonClient, Address.parse(owner), content)
    },
  })
}
