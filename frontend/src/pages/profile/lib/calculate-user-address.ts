import { Address, beginCell, Cell } from '@ton/core'

/**
 * Функция для вычисления адреса контракта пользователя
 *
 * @param walletAddress адрес кошелька
 * @param publicKey публичный ключ кошелька
 * @returns address - адрес в формате string
 */
export async function calculateUserAddress(walletAddress: string, publicKey: bigint) {
  const initContractData = {
    publicKey: publicKey,
    wallet: Address.parse(walletAddress),
    orgs: null,
  }

  const dataCell = beginCell()
    .storeUint(initContractData.publicKey, 256)
    .storeAddress(initContractData.wallet)
    .storeBit(0)
    .endCell()

  const userCode = Cell.fromHex(import.meta.env.VITE_USER_HASH_BASE64)

  const stateInit = beginCell()
    .storeBit(0)
    .storeBit(0)
    .storeBit(1)
    .storeRef(userCode)
    .storeBit(1)
    .storeRef(dataCell)
    .storeBit(0)
    .endCell()

  const address = new Address(0, stateInit.hash())

  return address.toString()
}
