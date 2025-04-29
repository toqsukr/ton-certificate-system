import { authDepsContext } from '@features/auth'
import tonClient from '@shared/api/ton-client'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import { useTonWallet } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'

const AuthDeps: FC<PropsWithChildren> = ({ children }) => {
  const wallet = useTonWallet()
  const { sender } = useTonConnect()

  return (
    <authDepsContext.Provider value={{ sender, wallet, client: tonClient }}>
      {children}
    </authDepsContext.Provider>
  )
}

export default AuthDeps
