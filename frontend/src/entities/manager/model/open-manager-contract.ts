import { Address, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { ManagerNFT } from './tact_ManagerNFT'

export const openManagerContractFromInit = async (
  client: TonClient,
  collection: Address,
  index: bigint
) => {
  const contract = await ManagerNFT.fromInit(collection, index)
  return client.open(contract) as OpenedContract<ManagerNFT>
}

export const openManagerContractFromAddress = (client: TonClient, address: Address) => {
  const contract = ManagerNFT.fromAddress(address)
  return client.open(contract) as OpenedContract<ManagerNFT>
}
