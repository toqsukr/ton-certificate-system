import { useOrganization } from '@entities/organization'
import { AddressLabel } from '@features/address-label'
import { OwnerLabel } from '@features/owner-label'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import LabelBelow from '@shared/uikit/label-below'
import { useTranslation } from 'react-i18next'
import { GoOrganization } from 'react-icons/go'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const OrganizationInfoPage = () => {
  const { state } = useLocation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: organization, isLoading: isOrgLoading } = useOrganization(state?.userAddress)

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
        <AddressLabel address={organization.address} />
        <OwnerLabel userAddress={organization.owner.wallet} />
        <LabelBelow title={t('name_label')}>{organization?.name ?? ''}</LabelBelow>
        <LabelBelow title={t('description_label')}>{organization.description}</LabelBelow>
      </div>
    </ContentField>
  )
}
