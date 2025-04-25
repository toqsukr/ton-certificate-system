import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import { TonConnectButton, useTonAddress, useTonWallet } from '@tonconnect/ui-react'
import { Navigate } from 'react-router-dom'

const AuthPage = () => {
  const rawAddress = useTonAddress()
  const wallet = useTonWallet()

  if (wallet) return <Navigate to={Routes.PROFILE} />

  console.log(rawAddress, wallet)

  return (
    <ContentField title='Authorization'>
      <p className='flex flex-col gap-2'>
        <span>Connect TON Wallet to access your TCS account.</span>
        <span>No account yet? It will be created automatically after the Wallet is connected!</span>
        <strong>Each TCS account may be connected with only single Wallet!</strong>
      </p>
      <TonConnectButton className='mx-auto mt-6' />
    </ContentField>
  )
}

export default AuthPage
