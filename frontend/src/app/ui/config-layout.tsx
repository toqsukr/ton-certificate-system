import { useAuth } from '@features/auth'
import { FC, PropsWithChildren } from 'react'
import { useLocale } from '../lib/i18next/useLocale'

const ConfigLayout: FC<PropsWithChildren> = ({ children }) => {
  useAuth()
  useLocale()

  return children
}

export default ConfigLayout
