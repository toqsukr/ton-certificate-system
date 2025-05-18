import { useIsMyAddress } from '@features/address-label'
import { Routes } from '@shared/model/routes'
import LabelOpposite from '@shared/uikit/label-opposite'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

export const OwnerLabel: FC<{ userAddress: string }> = ({ userAddress }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const isMyProfile = useIsMyAddress()

  const navigateToUser = () => {
    const path = isMyProfile(userAddress)
      ? `${Routes.PROFILE}`
      : `/${pathname.split('/')[1]}/${Routes.USER_INFO}`
    navigate(path, {
      preventScrollReset: true,
      state: { userAddress },
    })
  }

  return (
    <LabelOpposite title={t('owner_label')}>
      <p
        className='cursor-pointer'
        style={{
          background: 'linear-gradient(90deg, #2D83EC, #1AC9FF 45%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
        onClick={navigateToUser}>
        {userAddress}
      </p>
    </LabelOpposite>
  )
}
