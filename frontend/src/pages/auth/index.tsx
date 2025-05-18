import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { useTonConnectModal, useTonWallet } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'

const AuthPage = () => {
  const wallet = useTonWallet()
  const { t } = useTranslation()
  const { open } = useTonConnectModal()

  if (wallet) return <Navigate to={Routes.PROFILE} />

  return (
    <ContentField title={t('auth_unit_title')}>
      <p className='flex flex-col mb-4'>{t('auth_unit_text')}</p>
      <Button onClick={open}>{t('connect_wallet_button')}</Button>
    </ContentField>
  )
}

export default AuthPage
