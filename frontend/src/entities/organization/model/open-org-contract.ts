import { Address, Cell, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { Organization } from './tact_Organization'

export const openOrgContract = async (client: TonClient, owner: Address, content: Cell) => {
  const contract = await Organization.fromInit(content, owner)
  return client.open(contract) as OpenedContract<Organization>
}
