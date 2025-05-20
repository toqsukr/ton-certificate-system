import { getNFTByCollectionQuery } from '@entities/certificate'
import { useOrganization } from '@entities/organization'
import { CertificateList } from '@features/certificate-list'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { useQuery } from '@tanstack/react-query'
import { useTonAddress } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const OrgCertificates = () => {
  const navigate = useNavigate()
  const address = useTonAddress()

  const { data: organization, isLoading: isOrgLoading } = useOrganization(address)
  const { data: certificates, isLoading: isCertsLoading } = useQuery(
    getNFTByCollectionQuery(organization?.address ?? '')
  )

  const { t } = useTranslation()

  if (isOrgLoading || isCertsLoading) return <FieldLoader />

  return (
    <ContentField title={t('issued_certificates')} onBack={() => navigate(-1)}>
      <CertificateList certificates={certificates} />
    </ContentField>
  )
}
