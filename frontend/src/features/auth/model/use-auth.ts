import { useUserStore } from '@entities/user'
import { CHAIN } from '@tonconnect/sdk'
import { useEffect } from 'react'
import { useAuthDeps } from '../deps'

const getChainName: Record<CHAIN, string> = {
  [CHAIN.MAINNET]: 'MAINNET',
  [CHAIN.TESTNET]: 'TESTNET',
}

export const useAuth = () => {
  const { user, setUser } = useUserStore()
  const { wallet } = useAuthDeps()

  useEffect(() => {
    if (!wallet) {
      console.log('LOG: WALLET NOT CONNECTED')
      setUser(null)
    } else {
      console.log('LOG: WALLET CONNECTED')
    }

    if (!user && wallet) {
      const { publicKey, chain } = wallet.account
      setUser({ publicKey: publicKey + '', chain: getChainName[chain] })
    }
  }, [wallet])
}
