import { accountService } from '@shared/api/account'
import tonClient from '@shared/api/ton-client'
import { Address, Contract, OpenedContract } from '@ton/core'
import { TonClient } from '@ton/ton'

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
  console.log(accountInfo)
  return accountInfo.is_wallet
}
