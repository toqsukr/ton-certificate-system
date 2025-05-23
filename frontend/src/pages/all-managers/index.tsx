import { getManagerProxyByCollectionQuery } from '@entities/manager/query'
import { useOrganization } from '@entities/organization'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { useQuery } from '@tanstack/react-query'
import { useTonAddress } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { TbSettings } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import css from './style.module.scss'

export const AllManagers = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const address = useTonAddress()
  const { data: organization, isLoading: isOrgLoading } = useOrganization(address)
  const { data: proxies, isLoading: isProxiesLoading } = useQuery(
    getManagerProxyByCollectionQuery(organization?.address ?? '')
  )

  const navigateToManager = (userAddress: string) => {
    navigate(Routes.USER_INFO, {
      preventScrollReset: true,
      state: { userAddress },
    })
  }

  if (isProxiesLoading || isOrgLoading) return <FieldLoader />

  return (
    <ContentField title={t('all_managers_unit_title')} onBack={() => navigate(-1)}>
      <ul className={css.manager_list}>
        {proxies?.map(({ address, owner }) => (
          <li
            key={address}
            className='flex flex-col p-3 gap-2 rounded-2xl w-[8rem] cursor-pointer'
            onClick={() => navigateToManager(owner.wallet)}>
            <TbSettings className={css.manager_icon} />
            <p className='text-center truncate '>{owner.wallet}</p>
          </li>
        ))}
      </ul>
    </ContentField>
  )
}
