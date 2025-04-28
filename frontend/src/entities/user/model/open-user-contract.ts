import { Address, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { User } from './tact_User'

export const openUserContract = (client: TonClient, address: string) => {
  try {
    const contract = new User(Address.parse(address))
    return client.open(contract) as OpenedContract<User>
  } catch {
    return undefined
  }
}
