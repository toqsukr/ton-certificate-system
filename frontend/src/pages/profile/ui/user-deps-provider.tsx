import { authDepsContext } from '@features/auth'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import { TonClient } from '@ton/ton'
import { Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'

type UserDepsProviderProp = {
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod)
  client: TonClient
}

const UserDepsProvider: FC<PropsWithChildren<UserDepsProviderProp>> = ({
  children,
  client,
  wallet,
}) => {
  const { sender } = useTonConnect()

  return (
    <authDepsContext.Provider
      value={{
        sender,
        client,
        wallet,
        onUserCreated: () => {
          console.log('created')
        },
      }}>
      {children}
    </authDepsContext.Provider>
  )
}

export default UserDepsProvider
