import { getNFTByCollectionQuery } from '@entities/certificate'
import { useOrganization } from '@entities/organization'
import { TONVIEWER_PREFIX } from '@shared/lib/ton'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import LinkText from '@shared/uikit/copyable-text'
import FieldLoader from '@shared/uikit/field-loader'
import { CertIcon } from '@shared/uikit/icons'
import LabelOpposite from '@shared/uikit/label-opposite'
import { useQuery } from '@tanstack/react-query'
import { Address } from '@ton/core'
import { useTonWallet } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const CertificateInfoPage = () => {
  const { state } = useLocation()
  const wallet = useTonWallet()
  const { data: organization, isLoading: isOrgLoading } = useOrganization(
    wallet?.account.address ?? ''
  )
  const { data: certificates, isLoading: isCertsLoading } = useQuery(
    getNFTByCollectionQuery(organization?.address ?? '')
  )
  const certificate = certificates?.find(({ index }) => index === state.certID)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navigateToOrg = () => {
    const path = `/${pathname.split('/')[1]}/${Routes.ORGANIZATION_INFO}`
    console.log(wallet)
    navigate(path, {
      preventScrollReset: true,
      state: { userAddress: wallet?.account.address },
    })
  }

  const navigateToUser = () => {
    const isMyProfile =
      Address.normalize(wallet?.account.address ?? '') === certificate?.owner.wallet
    const path = isMyProfile
      ? `${Routes.PROFILE}`
      : `/${pathname.split('/')[1]}/${Routes.USER_INFO}`
    navigate(path, {
      preventScrollReset: true,
      state: { userAddress: certificate?.owner.wallet },
    })
  }

  if (!state) return <Navigate to={Routes.PROFILE} />

  if (isOrgLoading || isCertsLoading) return <FieldLoader />

  if (!certificate) return <Navigate to={Routes.PROFILE} />

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={t('certificate_info_unit_title')}
          icon={<CertIcon className='h-[26px] text-[var(--primary-color)]' />}
        />
      }
      onBack={() => navigate('..', { preventScrollReset: true })}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('address_label')}>
          <LinkText
            text={certificate?.address}
            target={`${TONVIEWER_PREFIX}${certificate?.address}`}
          />
        </LabelOpposite>
        <LabelOpposite title={t('owner_label')}>
          <p onClick={navigateToUser}>{certificate.owner.wallet}</p>
        </LabelOpposite>
        <LabelOpposite title={t('organization_label')}>
          <p onClick={navigateToOrg}>{certificate.collection?.address ?? ''}</p>
        </LabelOpposite>
      </div>
    </ContentField>
  )
}
