import tonClient from '@shared/api/ton-client'
import { Address } from '@ton/core'
import { openCertificateContract } from './open-certificate'

export const checkCertAddresses = async (collection: Address, nftIDs: number[]) => {
  const promiseArr = await Promise.allSettled(
    nftIDs.map(async index => {
      const contract = await openCertificateContract(tonClient, collection, BigInt(index))
      contract.getGetNftData()
      return contract.address.toString()
    })
  )

  const result: { [key: string]: string | undefined } = promiseArr.reduce((acc, promise) => {
    if (promise.status === 'fulfilled') {
      acc[promise.value] = 'fulfilled'
    }
    return acc
  }, {} as { [key: string]: string | undefined })

  return result
}
