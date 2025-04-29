import { ToggleButtonGroupProps } from '@mui/material'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import ToggleButtonGroup from '@shared/uikit/toggle-button'
import { useTonWallet, Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

const getAuthRoute = (
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
  pathname: string
) => {
  if (pathname === Routes.PROFILE) return pathname

  if (!wallet) return Routes.AUTH

  return Routes.PROFILE
}

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const wallet = useTonWallet()
  const { t } = useTranslation()

  const handleRouteChange: ToggleButtonGroupProps['onChange'] = (_, route) => {
    navigate(route[0])
  }

  return (
    <>
      <h1
        style={{ letterSpacing: '.2rem' }}
        className='flex flex-col gap-4 text-[3rem] text-[var(--button-bg-color)] font-bold'>
        <span>TON</span>
        <span>Certificate</span>
        <span>System</span>
      </h1>
      <ContentField title={t('app_about_title')}>
        <p>{t('app_about_text')}</p>
      </ContentField>
      <section className='flex flex-col gap-6'>
        <ToggleButtonGroup onChange={handleRouteChange}>
          <ToggleButtonGroup.Button
            selected={location.pathname.includes(Routes.SEARCH)}
            value={Routes.SEARCH}>
            {t('search_tab_title')}
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button
            selected={location.pathname === Routes.PROFILE || location.pathname === Routes.AUTH}
            value={getAuthRoute(wallet, location.pathname)}>
            {t('profile_tab_title')}
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
        {children}
      </section>
    </>
  )
}

export default MainLayout
