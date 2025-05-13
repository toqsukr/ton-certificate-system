import { Address, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { CertificateNFT } from './tact_CertificateNFT'

export const openCertificateContract = async (
  client: TonClient,
  collection: Address,
  index: bigint
) => {
  const contract = await CertificateNFT.fromInit(collection, index)
  return client.open(contract) as OpenedContract<CertificateNFT>
}
