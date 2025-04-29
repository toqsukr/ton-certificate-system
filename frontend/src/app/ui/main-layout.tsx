import { ToggleButtonGroupProps } from '@mui/material'
import { Routes } from '@shared/model/routes'
import ToggleButtonGroup from '@shared/uikit/toggle-button'
import { FC, PropsWithChildren } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

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
            value={location.pathname.includes(Routes.PROFILE) ? Routes.PROFILE : Routes.AUTH}>
            Profile
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
        {children}
      </section>
    </>
  )
}

export default MainLayout
