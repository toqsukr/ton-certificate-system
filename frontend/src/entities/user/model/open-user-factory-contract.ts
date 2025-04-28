import { Address, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { UserFactory } from './tact_UserFactory'

export const openUserFactoryContract = (client: TonClient) => {
  const contract = new UserFactory(Address.parse(import.meta.env.VITE_USER_FACTORY_CONTRACT))
  return client.open(contract) as OpenedContract<UserFactory>
}
