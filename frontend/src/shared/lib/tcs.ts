import { accountService } from '@shared/api/account'
import { NftItem } from '@shared/api/graphql/graphql'
import { nftService } from '@shared/api/nft'
import tonClient from '@shared/api/ton-client'
import { Address, Contract, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'
import { v1 } from 'uuid'

export const certificateTagAttribute = 'certificate'
export const managerTagAttribute = 'manager'

export const filterContractEntity = async <C extends Contract, T extends { address: string }>(
  entity: T,
  openFunction: (client: TonClient, address: Address) => OpenedContract<C>,
  interfaceName: string
) => {
  const correctInterface = await checkInterface(entity.address, interfaceName)
  let successOpen = true
  try {
    openFunction(tonClient, Address.parse(entity.address))
  } catch (e) {
    successOpen = false
    console.error(e)
  }
  return { entity, checkResult: correctInterface && successOpen }
}

export const filterNftItems = async (attributeValue: string, items: NftItem[] | undefined = []) => {
  const nftInfo = await Promise.all(items.map(item => nftService.getNFTInfo(item.address)))
  return items.filter((_, index) =>
    nftInfo[index].metadata.attributes.some(
      ({ trait_type, value }) => trait_type === 'tcs-type' && value === attributeValue
    )
  )
}

export const checkInterface = async (address: string, interfaceName: string) => {
  const accountInfo = await accountService.getAccountInfo(address)
  return !!accountInfo?.interfaces.find(value => value === interfaceName)
}

export const checkGetMethod = async (address: string, getMethodName: string) => {
  const accountInfo = await accountService.getAccountInfo(address)
  return !!accountInfo?.get_methods.find(value => value === getMethodName)
}

export const checkIsWallet = async (address: string) => {
  const accountInfo = await accountService.getAccountInfo(address)
  return accountInfo.is_wallet
}

export const generateFilename = () => {
  return `${v1()}-${new Date().toISOString().slice(0, -5)}`
}
