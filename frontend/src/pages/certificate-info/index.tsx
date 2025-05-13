import { certificateDataQueryOptions } from '@entities/certificate/query'
import tonClient from '@shared/api/ton-client'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import CopyableText from '@shared/uikit/copyable-text'
import FieldLoader from '@shared/uikit/field-loader'
import LabelOpposite from '@shared/uikit/label-opposite'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const collectionAddress = 'kQDd6YSXro8HIDNrjRd0jPI7KemmxlVA_Bgbdbe_EEIn3zNW'

export const CertificateInfoPage = () => {
  const { state } = useLocation()
  const options = certificateDataQueryOptions(tonClient, collectionAddress, parseInt(state?.certID))
  const { data, isLoading } = useQuery(options)
  const navigate = useNavigate()
  const { t } = useTranslation()

  if (!state) return <Navigate to={Routes.PROFILE} />

  if (isLoading) return <FieldLoader />

  if (!data) return <Navigate to={Routes.PROFILE} />

  return (
    <ContentField title={t('certificate_info_unit_title')} onBack={() => navigate(Routes.PROFILE)}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('id_label')}>{data?.id}</LabelOpposite>
        <LabelOpposite title={t('owner_label')}>
          <CopyableText text={data.owner} />
        </LabelOpposite>
        <LabelOpposite title={t('collection_label')}>
          <CopyableText text={data.collection} />
        </LabelOpposite>
      </div>
    </ContentField>
  )
}
