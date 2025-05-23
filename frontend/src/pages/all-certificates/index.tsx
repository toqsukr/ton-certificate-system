import { useCertificatesByOwner } from '@entities/certificate/model/use-certificates-by-owner'
import { CertificateList } from '@features/certificate-list'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

export const AllCertificatesPage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const { data: certificates, isLoading: isCertsLoading } = useCertificatesByOwner(state?.address)

  const { t } = useTranslation()

  if (isCertsLoading) return <FieldLoader />

  return (
    <ContentField title={t('all_certs_unit_title')} onBack={() => navigate(-1)}>
      <CertificateList certificates={certificates} />
    </ContentField>
  )
}
