import { openUserFactoryContract } from '@entities/user'
import { useMutation } from '@tanstack/react-query'
import { Address, toNano } from '@ton/core'
import { useAuthDeps } from '../deps'
import { walletKeyToHex } from '../lib/wallet-key-to-hex'

const createUserKey = 'create-user-key'

export const useCreateUser = () => {
  const { sender, wallet, client } = useAuthDeps()

  return useMutation({
    mutationKey: [createUserKey],
    mutationFn: async () => {
      if (!wallet) return

      const hexPublicKey = walletKeyToHex(wallet.account.publicKey)

      return await openUserFactoryContract(client)?.send(
        sender,
        {
          value: toNano('0.1'),
        },
        {
          $$type: 'CreateUserRequest',
          publicKey: hexPublicKey,
          wallet: Address.parse(wallet.account.address),
        }
      )
    },
  })
}
