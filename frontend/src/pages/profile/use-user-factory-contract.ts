import { UserFactory } from '@shared/contracts/tact_UserFactory'
import { useAsyncInitialize } from '@shared/lib/ton'
import { useTonClient } from '@shared/lib/useTonClient'
import { Address, OpenedContract } from '@ton/core'

export const useUserFactoryContract = () => {
  const client = useTonClient()

  const userContract = useAsyncInitialize(async () => {
    if (!client) return

    const contract = new UserFactory(Address.parse(import.meta.env.VITE_USER_FACTORY_CONTRACT))

    return client.open(contract) as OpenedContract<UserFactory>
  }, [client])

  return userContract
}
