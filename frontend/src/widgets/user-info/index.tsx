import { useCertificatesByOwner } from '@entities/certificate/model/use-certificates-by-owner'
import { AddressLabel } from '@features/address-label'
import { OrganizationLabel } from '@features/organization-label'
import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import LabelOpposite from '@shared/uikit/label-opposite'
import { Address } from '@ton/core'
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegUser } from 'react-icons/fa'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

type Mode = 'my-profile' | 'user-profile'

const defineHeaderIcon: Record<Mode, ReactNode> = {
  'my-profile': <PiSuitcaseSimple className='text-[var(--primary-color)]' />,
  'user-profile': <FaRegUser className='text-[var(--primary-color)]' />,
}

const UserInfo: FC<{ address: string }> = ({ address }) => {
  const { t } = useTranslation()
  const walletAddress = useTonAddress()

  const isMyProfile: Mode =
    Address.normalize(walletAddress) === Address.normalize(address) ? 'my-profile' : 'user-profile'

  const defineHeaderTitle: Record<Mode, string> = {
    'my-profile': t('profile_unit_title'),
    'user-profile': t('user_info_unit_title'),
  }

  const defineWallet: Record<Mode, ReactNode> = {
    'my-profile': (
      <LabelOpposite title={t('wallet_label')}>
        <div id='tonconnect-wrapper'>
          <TonConnectButton />
        </div>
      </LabelOpposite>
    ),
    'user-profile': null,
  }

  const defineOrganization: Record<Mode, ReactNode> = {
    'my-profile': (
      <Button onClick={() => navigate(Routes.MY_ORGANIZATION, { state: { address } })}>
        {'Управление организацией'}
      </Button>
    ),
    'user-profile': <OrganizationLabel ownerAddress={address} />,
  }

  const defineCertificates = [
    <p className='text-center'>{t('certificates_not_found')}</p>,
    <Button onClick={() => navigate(Routes.ALL_CERTIFICATES, { state: { address } })}>
      {'Посмотреть сертификаты'}
    </Button>,
  ]

  const { data: certificates, isLoading: isCertsLoading } = useCertificatesByOwner(address)
  const navigate = useNavigate()

  if (isCertsLoading) return <FieldLoader />

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={defineHeaderTitle[isMyProfile]}
          icon={defineHeaderIcon[isMyProfile]}
        />
      }>
      <div className='flex flex-col gap-6'>
        <AddressLabel address={address} />
        {defineWallet[isMyProfile]}
        {defineOrganization[isMyProfile]}
        {defineCertificates[+!!certificates?.length]}
      </div>
    </ContentField>
  )
}

export default UserInfo
