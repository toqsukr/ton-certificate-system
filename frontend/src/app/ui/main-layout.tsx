import { ToggleButtonGroupProps } from '@mui/material'
import { Routes } from '@shared/model/routes'
import ToggleButtonGroup from '@shared/uikit/toggle-button'
import { useTonWallet, Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'
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

  const handleRouteChange: ToggleButtonGroupProps['onChange'] = (_, route) => {
    navigate(route[0])
  }

  return (
    <>
      <h1 className='flex flex-col gap-2 text-[3rem] text-[var(--button-bg-color)] font-bold'>
        <span>TON</span>
        <span>Certificate</span>
        <span>System</span>
      </h1>
      <section className='flex flex-col gap-6'>
        <ToggleButtonGroup onChange={handleRouteChange}>
          <ToggleButtonGroup.Button
            selected={location.pathname.includes(Routes.SEARCH)}
            value={Routes.SEARCH}>
            Search
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button
            selected={location.pathname === Routes.PROFILE || location.pathname === Routes.AUTH}
            value={getAuthRoute(wallet, location.pathname)}>
            Profile
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
        {children}
      </section>
    </>
  )
}

export default MainLayout
