import { userByAddressQuery } from '@entities/user/query'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import CopyableText from '@shared/uikit/copyable-text'
import FieldLoader from '@shared/uikit/field-loader'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const UserInfoPage = () => {
  const { state } = useLocation()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const options = userByAddressQuery(state?.userAddress)
  const { data, isLoading } = useQuery(options)

  if (!state) return <Navigate to={Routes.SEARCH} />

  if (isLoading) return <FieldLoader />

  if (!data) return <Navigate to={Routes.SEARCH} />

  return (
    <ContentField title={t('user_info_unit_title')} onBack={() => navigate(Routes.SEARCH)}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title={t('address_label')}>
          <CopyableText text={state?.userAddress} />
        </LabelOpposite>
        {!data.items.length ? (
          <p className='text-center'>{t('certificates_not_found')}</p>
        ) : (
          <LabelBelow title={t('certificates_label')}>
            <ul className='*:ml-4 flex flex-col gap-2'>
              {data.items.map(({ address, index }) => (
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
