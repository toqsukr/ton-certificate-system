import { useIsMyAddress } from '@features/address-label'
import { Routes } from '@shared/model/routes'
import UserInfo from '@widgets/user-info'
import { Navigate, useLocation } from 'react-router-dom'

export const UserInfoPage = () => {
  const { state } = useLocation()
  const isMyAddress = useIsMyAddress()

  if (isMyAddress(state.userAddress)) return <Navigate to={Routes.PROFILE} />

  return <UserInfo address={state.userAddress} />
}
