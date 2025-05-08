import ConnectWalletButton from '@features/auth/ui/connect-wallet-button'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import { useTonWallet } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'

const AuthPage = () => {
  const wallet = useTonWallet()
  const { t } = useTranslation()

  if (wallet) return <Navigate to={Routes.PROFILE} />

  const authText = t('auth_unit_text').split(';')

  return (
    <ContentField title={t('auth_unit_title')}>
      <p className='flex flex-col gap-2 mb-6'>
        <span>{authText[0]}</span>
        <span>{authText[1]}</span>
        <strong>{authText[2]}</strong>
      </p>
      <ConnectWalletButton>{t('connect_wallet_button')}</ConnectWalletButton>
    </ContentField>
  )
}

export default AuthPage
