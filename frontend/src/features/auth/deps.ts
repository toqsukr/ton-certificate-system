import { createStrictContext, useStrictContext } from '@shared/lib/react'
import { Sender } from '@ton/core'
import { TonClient } from '@ton/ton'
import { Wallet } from '@tonconnect/sdk'
import { WalletInfoWithOpenMethod } from '@tonconnect/ui-react'

type AuthDeps = {
  sender: Sender
  client: TonClient
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod)
  onUserCreated: () => void
}

export const authDepsContext = createStrictContext<AuthDeps>()

export const useAuthDeps = () => useStrictContext(authDepsContext)
