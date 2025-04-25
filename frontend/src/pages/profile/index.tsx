import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  const wallet = useTonWallet()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  console.log(wallet)

  return (
    <ContentField title='<USER-ID>'>
      <TonConnectButton />
    </ContentField>
  )
}

export default ProfilePage
