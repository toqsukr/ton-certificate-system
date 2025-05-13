import { Address, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { OrganizationFactory } from './tact_OrganizationFactory'

export const openOrgFactoryContract = (client: TonClient) => {
  const contract = new OrganizationFactory(Address.parse(import.meta.env.VITE_ORG_FACTORY_CONTRACT))
  return client.open(contract) as OpenedContract<OrganizationFactory>
}
