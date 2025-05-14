import tonClient from '@shared/api/ton-client'
import { useQuery } from '@tanstack/react-query'
import { Address, Cell } from '@ton/core'
import { getNFTCollectionByOwnerQuery } from '../query'
import { openOrgContract } from './open-org-contract'

export const checkCollectionAddresses = async (owner: Address, collectionContents: Cell[]) => {
  const promiseArr = await Promise.allSettled(
    collectionContents.map(async content => {
      const contract = await openOrgContract(tonClient, owner, content)
      contract.getGetCollectionData()
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

export const useOrganization = (owner: string) => {
  return useQuery(
    getNFTCollectionByOwnerQuery(owner, (collectionContents: Cell[]) =>
      checkCollectionAddresses(Address.parse(owner), collectionContents)
    )
  )
}
