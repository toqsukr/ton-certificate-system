import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { useTonConnectModal, useTonWallet } from '@tonconnect/ui-react'
import { Navigate } from 'react-router-dom'

const AuthPage = () => {
  const wallet = useTonWallet()
  const { open } = useTonConnectModal()

  if (wallet) return <Navigate to={Routes.PROFILE} />

  return (
    <ContentField title='Authorization'>
      <p className='flex flex-col gap-2 mb-6'>
        <span>Connect TON Wallet to access your TCS account.</span>
        <span>No account yet? It will be created automatically after the Wallet is connected!</span>
        <strong>Each TCS account may be connected with only single Wallet!</strong>
      </p>
      <Button onClick={open}>Connect Wallet</Button>
    </ContentField>
  )
}

export default AuthPage
