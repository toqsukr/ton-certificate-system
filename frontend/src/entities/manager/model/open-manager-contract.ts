import { Address, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { ManagerNFT } from './tact_ManagerNFT'

export const openManagerContract = async (
  client: TonClient,
  collection: Address,
  index: bigint
) => {
  const contract = await ManagerNFT.fromInit(collection, index)
  return client.open(contract) as OpenedContract<ManagerNFT>
}
