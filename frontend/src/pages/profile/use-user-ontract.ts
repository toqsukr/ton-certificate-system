import { User } from '@shared/contracts/tact_User'
import { useAsyncInitialize } from '@shared/lib/ton'
import { useTonClient } from '@shared/lib/useTonClient'
import { Address, beginCell, Cell, OpenedContract } from '@ton/core'
import { useTonWallet } from '@tonconnect/ui-react'

// Функция для вычисления адреса будущего контракта пользователя
async function calculateUserAddress(walletAddress: string, publicKey: bigint) {
  const userData = {
    publicKey: publicKey,
    wallet: Address.parse(walletAddress),
    orgs: null,
  }

  const dataCell = beginCell()
    .storeUint(userData.publicKey, 256)
    .storeAddress(userData.wallet)
    .storeBit(0)
    .endCell()

  // Создаем ячейку с кодом контракта User (вам нужно получить его из вашего проекта)
  // В идеале, вы должны экспортировать код контракта из вашего проекта
  // Например, если у вас есть компилированный код:
  const userCode = Cell.fromHex(import.meta.env.VITE_USER_HASH_BASE64)

  const stateInit = beginCell()
    .storeBit(0) // нет split_depth
    .storeBit(0) // нет special
    .storeBit(1) // есть code
    .storeRef(userCode)
    .storeBit(1) // есть data
    .storeRef(dataCell)
    .storeBit(0) // нет library
    .endCell()

  const address = new Address(0, stateInit.hash()) // ???

  return address.toString()
}

export const useUserContract = () => {
  const client = useTonClient()
  const wallet = useTonWallet()

  const userContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return

    const hexPublicKey = BigInt(`0x${wallet.account.publicKey}`)
    const address = await calculateUserAddress(wallet.account.address, hexPublicKey)

    const contract = new User(Address.parse(address))

    const openedContract = client.open(contract) as OpenedContract<User>

    return {
      contract: openedContract,
      address,
    }
  }, [client])

  return userContract
}
