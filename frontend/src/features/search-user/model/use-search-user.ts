import { Routes } from '@shared/model/routes'
import { useNavigate } from 'react-router-dom'

export const useSearchUser = () => {
  const navigate = useNavigate()

  return async (address: string) => {
    navigate(Routes.USER_INFO, { state: { address } })
  }
}
