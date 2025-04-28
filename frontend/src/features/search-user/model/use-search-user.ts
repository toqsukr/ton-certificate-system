import { Routes } from '@shared/model/routes'
import { useNavigate } from 'react-router-dom'

export const useSearchUser = (address: string) => {
  const navigate = useNavigate()

  return async () => {
    navigate(Routes.USER_INFO, { state: { address } })
  }
}
