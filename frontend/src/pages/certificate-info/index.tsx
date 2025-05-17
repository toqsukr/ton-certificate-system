import { useCertificatesByOwner } from '@entities/certificate/model/use-certificates-by-owner'
import { AddressLabel, useIsMyAddress } from '@features/address-label'
import { OrganizationLabel } from '@features/organization-label'
import { OwnerLabel } from '@features/owner-label'
import { getCollectionContent } from '@shared/lib/ton'
import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { CertIcon } from '@shared/uikit/icons'
import LabelBelow from '@shared/uikit/label-below'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useRevokeCert } from './use-revoke-cert'

export const CertificateInfoPage = () => {
  const { state } = useLocation()
  const { data: certificates, isLoading: isCertsLoading } = useCertificatesByOwner(
    state.userAddress
  )
  const certificate = certificates?.find(({ id }) => id === state.certID)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const isMyProfile = useIsMyAddress()
  const { mutate: revokeCertificate } = useRevokeCert()

  const handleRevoke = () => {
    if (!certificate || !certificate.collection) return
    const content = getCollectionContent(certificate.collection.rawMetadata)
    revokeCertificate({ owner: certificate.owner.wallet, content })
  }

  if (!state) return <Navigate to={Routes.PROFILE} />

  if (isCertsLoading) return <FieldLoader />

  if (!certificate) return <Navigate to={Routes.PROFILE} />

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={t('certificate_info_unit_title')}
          icon={<CertIcon className='h-[2rem] text-[var(--primary-color)]' />}
        />
      }
      onBack={() =>
        navigate('..', { preventScrollReset: true, state: { address: certificate.owner.wallet } })
      }>
      <div className='flex flex-col gap-6'>
        <AddressLabel address={certificate.address} />
        <OwnerLabel userAddress={certificate.owner.wallet} />
        <OrganizationLabel ownerAddress={certificate.collection?.owner.wallet} />
        {certificate?.name && <LabelBelow title={t('name_label')}>{certificate.name}</LabelBelow>}
        {certificate?.description && (
          <LabelBelow title={t('description_label')}>{certificate.description}</LabelBelow>
        )}
        {isMyProfile(certificate.collection?.owner.wallet) && (
          <Button onClick={handleRevoke}>Отозвать сертификат</Button>
        )}
      </div>
    </ContentField>
  )
}
