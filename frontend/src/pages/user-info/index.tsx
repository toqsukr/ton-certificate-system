import { getNFTByCollectionQuery } from '@entities/certificate'
import { useOrganization } from '@entities/organization'
import { CertificateList } from '@features/certificate-list'
import { TONVIEWER_PREFIX } from '@shared/lib/ton'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import LinkText from '@shared/uikit/copyable-text'
import FieldLoader from '@shared/uikit/field-loader'
import LabelOpposite from '@shared/uikit/label-opposite'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { FaRegUser } from 'react-icons/fa'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const UserInfoPage = () => {
  const { state } = useLocation()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const { data: organization, isLoading: isOrgLoading } = useOrganization(state?.userAddress)
  const { data: certificates, isLoading: isCertsLoading } = useQuery(
    getNFTByCollectionQuery(organization?.address ?? '')
  )

  if (!state) return <Navigate to={Routes.SEARCH} />

  if (isOrgLoading || isCertsLoading) return <FieldLoader />

  if (!certificates) return <Navigate to={Routes.SEARCH} />

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={t('user_info_unit_title')}
          icon={<FaRegUser className='text-[var(--primary-color)]' />}
        />
      }
      onBack={() => navigate('..')}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('address_label')}>
          <LinkText text={state?.userAddress} target={`${TONVIEWER_PREFIX}${state?.userAddress}`} />
        </LabelOpposite>
        <CertificateList ownerAddress={state?.userAddress} />
      </div>
    </ContentField>
  )
}
