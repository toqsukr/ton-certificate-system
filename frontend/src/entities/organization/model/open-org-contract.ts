import { Address, Cell, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { Organization } from './tact_Organization'

export const openOrgFromInitContract = async (client: TonClient, owner: Address, content: Cell) => {
  const contract = await Organization.fromInit(content, owner)
  return client.open(contract) as OpenedContract<Organization>
}

export const openOrgFromAddressContract = (client: TonClient, address: Address) => {
  const contract = Organization.fromAddress(address)
  return client.open(contract) as OpenedContract<Organization>
}
