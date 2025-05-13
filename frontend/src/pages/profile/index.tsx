import { useUserStore } from '@entities/user'
import { userByAddressQuery } from '@entities/user/query'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import { useQuery } from '@tanstack/react-query'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { Navigate, useNavigate } from 'react-router-dom'
import './tonconnect.css'

const Content = () => {
  const { user } = useUserStore()
  const { t } = useTranslation()
  const wallet = useTonWallet()
  if (!wallet) return

  const options = userByAddressQuery(wallet?.account.address)
  const { data, isLoading } = useQuery(options)
  const navigate = useNavigate()

  if (isLoading) return <FieldLoader />

  if (!data) return

  return (
    <ContentField title={t('profile_unit_title')}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('wallet_label')}>
          <div id='tonconnect-wrapper'>
            <TonConnectButton />
          </div>
        </LabelOpposite>
        <LabelOpposite title={t('chain_label')}>{user?.chain ?? ''}</LabelOpposite>
        {!data.items.length ? (
          <p className='text-center'>{t('certificates_not_found')}</p>
        ) : (
          <LabelBelow title={t('certificates_label')}>
            <ul className='*:ml-4 flex flex-col gap-2'>
              {data?.items.map(({ address, index }) => (
                <li
                  key={address}
                  className='cursor-pointer'
                  onClick={() => navigate(Routes.CERTIFICATE_INFO, { state: { certID: index } })}>
                  {address}
                </li>
              ))}
            </ul>
          </LabelBelow>
        )}
      </div>
    </ContentField>
  )
}

const ProfilePage = () => {
  const wallet = useTonWallet()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  return <Content />
}

export default ProfilePage
