import { openUserContract, UserData, useUserStore } from '@entities/user'
import tonClient from '@shared/api/ton-client'
import { Address, beginCell, Cell } from '@ton/core'
import { useEffect } from 'react'
import { useCreateUser } from '../api/use-create-user'
import { useAuthDeps } from '../deps'
import { walletKeyToHex } from '../lib/wallet-key-to-hex'

/**
 * Функция для вычисления адреса контракта пользователя
 *
 * @param walletAddress адрес кошелька
 * @param publicKey публичный ключ кошелька
 * @returns address - адрес в формате string
 */
export async function calculateUserAddress(walletAddress: string, stringifyPublicKey: string) {
  const publicKey = walletKeyToHex(stringifyPublicKey)
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

const checkResponseType = (response: unknown): response is UserData => {
  return (
    typeof response == 'object' &&
    !!response &&
    '$$type' in response &&
    response.$$type === 'UserData' &&
    'wallet' in response &&
    'publicKey' in response
  )
}

const isNonExistError = (error: unknown) => {
  if (typeof error !== 'object' || !error || !('toString' in error)) return false
  return error.toString().includes('exit_code: -13')
}

export const useAuth = () => {
  const { user, setUser } = useUserStore()
  const { wallet } = useAuthDeps()
  const { mutateAsync: createUser } = useCreateUser()

  useEffect(() => {
    const getUserData = async () => {
      if (!wallet) {
        console.log('LOG: WALLET NOT CONNECTED')
        setUser(null)
      } else {
        console.log('LOG: WALLET CONNECTED')
      }

      if (!user && wallet && wallet.account.publicKey) {
        const { publicKey } = wallet.account
        const address = await calculateUserAddress(wallet.account.address, publicKey)
        const fetchData = () => openUserContract(tonClient, address)?.getGetUserData()

        const saveData = (response: unknown) => {
          if (checkResponseType(response)) {
            const { publicKey, wallet } = response
            setUser({ address, publicKey: publicKey.toString(), wallet: wallet.toString() })
            console.log('LOG: DATA SAVED LOCAL')
          }
        }

        try {
          const response = await fetchData?.()
          console.log('LOG: FOUND EXIST CONTRACT')
          saveData(response)
        } catch (error) {
          console.error(error)
          if (isNonExistError(error)) {
            console.log('LOG: NOT FOUND EXIST CONTRACT')
            await createUser()
            console.log('LOG: CREATED CONTRACT')
          }
        }
      }
    }
    getUserData()
  }, [wallet])
}
