import { getNFTByCollectionQuery } from '@entities/certificate'
import { useOrganization } from '@entities/organization'
import { CertificateList } from '@features/certificate-list'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import LabelOpposite from '@shared/uikit/label-opposite'
import { useQuery } from '@tanstack/react-query'
import {
  CHAIN,
  TonConnectButton,
  useTonWallet,
  Wallet,
  WalletInfoWithOpenMethod,
} from '@tonconnect/ui-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { Navigate } from 'react-router-dom'

const getChainName: Record<CHAIN, string> = {
  [CHAIN.MAINNET]: 'MAINNET',
  [CHAIN.TESTNET]: 'TESTNET',
}

const Content: FC<{ wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) }> = ({ wallet }) => {
  const { t } = useTranslation()

  const { data: organization, isLoading: isOrgLoading } = useOrganization(wallet.account.address)
  const { data: certificates, isLoading: isCertsLoading } = useQuery(
    getNFTByCollectionQuery(organization?.address ?? '')
  )

  if (isOrgLoading || isCertsLoading) return <FieldLoader />

  if (!certificates) return

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={t('profile_unit_title')}
          icon={<PiSuitcaseSimple className='text-[var(--primary-color)]' />}
        />
      }>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('wallet_label')}>
          <div id='tonconnect-wrapper'>
            <TonConnectButton />
          </div>
        </LabelOpposite>
        <LabelOpposite title={t('chain_label')}>{getChainName[wallet.account.chain]}</LabelOpposite>
        <CertificateList ownerAddress={wallet.account.address} />
      </div>
    </ContentField>
  )
}

const ProfilePage = () => {
  const wallet = useTonWallet()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  return <Content wallet={wallet} />
}

export default ProfilePage
