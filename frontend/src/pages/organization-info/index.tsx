import { useOrganization } from '@entities/organization'
import { TONVIEWER_PREFIX } from '@shared/lib/ton'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import LinkText from '@shared/uikit/copyable-text'
import FieldLoader from '@shared/uikit/field-loader'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import { Address } from '@ton/core'
import { useTonWallet } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { GoOrganization } from 'react-icons/go'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const OrganizationInfoPage = () => {
  const { state } = useLocation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const wallet = useTonWallet()
  const { pathname } = useLocation()
  const { data: organization, isLoading: isOrgLoading } = useOrganization(state?.userAddress)

  const navigateToUser = () => {
    const isMyProfile =
      Address.normalize(wallet?.account.address ?? '') === organization?.owner.wallet
    const path = isMyProfile
      ? `${Routes.PROFILE}`
      : `/${pathname.split('/')[1]}/${Routes.USER_INFO}`
    navigate(path, {
      preventScrollReset: true,
      state: { userAddress: organization?.owner.wallet },
    })
  }

  if (!state) return <Navigate to={Routes.PROFILE} />

  if (isOrgLoading) return <FieldLoader />

  if (!organization) return <Navigate to={Routes.PROFILE} />

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={t('organization_info_unit_title')}
          icon={<GoOrganization className='text-[var(--primary-color)]' />}
        />
      }
      onBack={() => navigate('..', { preventScrollReset: true })}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('address_label')}>
          <LinkText
            text={organization?.address ?? ''}
            target={`${TONVIEWER_PREFIX}${organization?.address ?? ''}`}
          />
        </LabelOpposite>
        <LabelOpposite title={t('owner_label')}>
          <p onClick={navigateToUser}>{organization?.owner.wallet ?? ''}</p>
        </LabelOpposite>
        <LabelBelow title={t('name_label')}>{organization?.name ?? ''}</LabelBelow>
        <LabelBelow title={t('description_label')}>{organization?.description ?? ''}</LabelBelow>
      </div>
    </ContentField>
  )
}
