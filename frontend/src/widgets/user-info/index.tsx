import { useCertificatesByOwner } from '@entities/certificate/model/use-certificates-by-owner'
import { useManagerProxies } from '@entities/manager/model/use-manager-proxies'
import { useOrganization } from '@entities/organization'
import { AddressLabel, useIsMyAddress } from '@features/address-label'
import { useCreateOrgTag } from '@features/create-organization-tag'
import { OrganizationLabel } from '@features/organization-label'
import { useTonConnect } from '@shared/lib/use-ton-connect'
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
import { useDeleteManager } from './use-delete-manager'

type Mode = 'my-profile' | 'user-profile'

const defineHeaderIcon: Record<Mode, ReactNode> = {
  'my-profile': <PiSuitcaseSimple className='h-[1.6rem] w-[1.6rem] text-[var(--primary-color)]' />,
  'user-profile': <FaRegUser className='h-[1.5rem] w-[1.5rem] text-[var(--primary-color)]' />,
}

const UserInfo: FC<{ address: string }> = ({ address }) => {
  const { t } = useTranslation()
  const walletAddress = useTonAddress()
  const { data: organization, isLoading: isOrgLoading } = useOrganization(walletAddress)
  const { checkTag } = useCreateOrgTag()
  const isMyProfile = useIsMyAddress()
  const { sender } = useTonConnect()
  const { mutate: deleteManager } = useDeleteManager()
  const { data: managerProxies, isLoading: isProxiesLoading } = useManagerProxies(address)

  const profileMode = isMyProfile(address) ? 'my-profile' : 'user-profile'

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
  const defineMint = () => {
    if (!isMyProfile(address) || (!managerProxies?.length && !organization)) return null

    return (
      <Button onClick={() => navigate(Routes.MINT_CERTIFICATE)}>{t('create_certificate')}</Button>
    )
  }

  const defineDeleteManager = () => {
    const isManager = !!managerProxies?.find(
      ({ owner }) =>
        !isMyProfile(address) && Address.normalize(owner.wallet) === Address.normalize(address)
    )
    if (isManager) {
      const collection = Address.parse(organization?.address ?? '')
      const manager = Address.parse(address)
      return (
        <Button onClick={() => deleteManager({ sender, collection, manager })}>
          {t('delete_manager')}
        </Button>
      )
    }

    return null
  }

  const defineOrganization: Record<Mode, ReactNode> = {
    'my-profile': (
      <>
        {organization ? (
          <Button onClick={() => navigate(Routes.MY_ORGANIZATION, { state: { address } })}>
            {t('my_organization')}
          </Button>
        ) : (
          <Button
            disabled={!checkTag()}
            onClick={() => navigate(Routes.CREATE_ORGANIZATION, { state: { address } })}>
            {t('create_organization')}
          </Button>
        )}
      </>
    ),
    'user-profile': <OrganizationLabel ownerAddress={address} />,
  }

  const defineCertificates = [
    null,
    <Button onClick={() => navigate(Routes.ALL_CERTIFICATES, { state: { address } })}>
      {t('show_certificates')}
    </Button>,
  ]

  const { data: certificates, isLoading: isCertsLoading } = useCertificatesByOwner(address)
  const navigate = useNavigate()

  if (isCertsLoading || isOrgLoading || isProxiesLoading) return <FieldLoader />

  return (
    <ContentField
      onBack={() => navigate(-1)}
      title={
        <ContentField.HeaderWithIcon
          text={defineHeaderTitle[profileMode]}
          icon={defineHeaderIcon[profileMode]}
        />
      }>
      <div className='flex flex-col gap-6'>
        <AddressLabel address={address} />
        {defineWallet[profileMode]}
        {defineOrganization[profileMode]}
        {defineCertificates[+!!certificates?.length]}
        {defineMint()}
        {defineDeleteManager()}
      </div>
    </ContentField>
  )
}

export default UserInfo
