import { useAuth } from '@features/auth'
import { FC, PropsWithChildren } from 'react'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  useAuth()

  return children
}

export default AuthLayout
