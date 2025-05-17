import { Routes } from '@shared/model/routes'
import { Address } from '@ton/core'
import { useTonWallet } from '@tonconnect/ui-react'
import UserInfo from '@widgets/user-info'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
  const wallet = useTonWallet()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  return <UserInfo address={Address.normalize(wallet.account.address)} />
}

export default ProfilePage
