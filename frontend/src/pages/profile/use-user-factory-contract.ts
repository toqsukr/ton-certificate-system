import { UserFactory } from '@shared/contracts/tact_UserFactory'
import { useAsyncInitialize } from '@shared/lib/ton'
import { useTonClient } from '@shared/lib/useTonClient'
import { useTonConnect } from '@shared/lib/useTonConnect'
import { Address, OpenedContract, toNano } from '@ton/core'
import { useTonWallet } from '@tonconnect/ui-react'

export const useUserFactoryContract = () => {
  const client = useTonClient()
  const { sender } = useTonConnect()
  const wallet = useTonWallet()

  const userContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return

    const hexPublicKey = BigInt(`0x${wallet.account.publicKey}`)

    const contract = new UserFactory(Address.parse(import.meta.env.VITE_USER_FACTORY_CONTRACT))

    const openedContract = client.open(contract) as OpenedContract<UserFactory>

    return {
      contract: openedContract,
      createUser: () => {
        openedContract.send(
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
    }
  }, [client])

  return userContract
}
