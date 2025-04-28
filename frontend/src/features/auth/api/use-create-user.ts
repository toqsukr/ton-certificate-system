import { openUserFactoryContract } from '@entities/user'
import { useMutation } from '@tanstack/react-query'
import { Address, toNano } from '@ton/core'
import { useAuthDeps } from '../deps'

const createUserKey = 'create-user-key'

const walletKeyToHex = (key: string | undefined) => {
  return BigInt(`0x${key}`)
}

export const useCreateUser = () => {
  const { sender, wallet, client, onUserCreated } = useAuthDeps()

  return useMutation({
    mutationKey: [createUserKey],
    mutationFn: async () => {
      const hexPublicKey = walletKeyToHex(wallet.account.publicKey)

      await openUserFactoryContract(client)?.send(
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
    onSuccess: onUserCreated,
  })
}
