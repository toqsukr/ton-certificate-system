import { useOrganization } from '@entities/organization'
import { useIsMyAddress } from '@features/address-label'
import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import LabelOpposite from '@shared/uikit/label-opposite'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

export const OrganizationLabel: FC<{ ownerAddress: string | undefined }> = ({
  ownerAddress = '',
}) => {
  const { t } = useTranslation()
  const { data: organization } = useOrganization(ownerAddress)

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isMyProfile = useIsMyAddress()

  const navigateToOrg = () => {
    const path = isMyProfile(ownerAddress)
      ? `${Routes.PROFILE}/${Routes.MY_ORGANIZATION}`
      : `/${pathname.split('/')[1]}/${Routes.ORGANIZATION_INFO}`

    navigate(path, {
      preventScrollReset: true,
      state: { userAddress: ownerAddress },
    })
  }

  if (isMyProfile(ownerAddress) && !organization)
    return (
      <Button onClick={() => navigate(Routes.CREATE_ORGANIZATION)}>
        {t('create_organization')}
      </Button>
    )

  if (!organization) return

  return (
    <LabelOpposite title={t('organization_label')}>
      <p
        style={{
          background: 'linear-gradient(90deg, #2D83EC, #1AC9FF 45%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
        className='cursor-pointer'
        onClick={navigateToOrg}>
        {organization?.address}
      </p>
    </LabelOpposite>
  )
}
