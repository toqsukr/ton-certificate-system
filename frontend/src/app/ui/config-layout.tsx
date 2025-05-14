import { FC, PropsWithChildren } from 'react'
import { useLocale } from '../lib/i18next/useLocale'

const ConfigLayout: FC<PropsWithChildren> = ({ children }) => {
  useLocale()

  return children
}

export default ConfigLayout
