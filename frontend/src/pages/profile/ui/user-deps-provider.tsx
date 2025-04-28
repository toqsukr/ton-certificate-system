import { authDepsContext } from '@features/auth'
import tonClient from '@shared/api/ton-client'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import { Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'

type UserDepsProviderProp = {
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod)
}

const UserDepsProvider: FC<PropsWithChildren<UserDepsProviderProp>> = ({ children, wallet }) => {
  const { sender } = useTonConnect()

  return (
    <authDepsContext.Provider
      value={{
        sender,
        wallet,
        client: tonClient,
        onUserCreated: () => {
          console.log('created')
        },
      }}>
      {children}
    </authDepsContext.Provider>
  )
}

export default UserDepsProvider
