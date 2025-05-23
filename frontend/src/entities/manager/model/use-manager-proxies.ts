import { openCertificateContractFromInit } from '@entities/certificate'
import tonClient from '@shared/api/ton-client'
import { useQuery } from '@tanstack/react-query'
import { Address } from '@ton/core'
import { getManagerProxyByOwnerQuery } from '../query'

export const checkProxyAddresses = async (certs: { collection: string; index: number }[]) => {
  const promiseArr = await Promise.allSettled(
    certs.map(async ({ collection, index }) => {
      const collectionAddress = Address.parse(collection)
      const contract = await openCertificateContractFromInit(
        tonClient,
        collectionAddress,
        BigInt(index)
      )
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

export const useManagerProxies = (owner: string) => {
  return useQuery(getManagerProxyByOwnerQuery(owner))
}
