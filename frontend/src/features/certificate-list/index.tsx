import { getNFTByCollectionQuery } from '@entities/certificate'
import { useOrganization } from '@entities/organization'
import { Routes } from '@shared/model/routes'
import { CertIcon } from '@shared/uikit/icons'
import LabelBelow from '@shared/uikit/label-below'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

export const CertificateList: FC<{ ownerAddress: string }> = ({ ownerAddress }) => {
  const navigate = useNavigate()

  const { data: organization } = useOrganization(ownerAddress)
  const { data: certificates } = useQuery(getNFTByCollectionQuery(organization?.address ?? ''))

  const { pathname } = useLocation()
  const { t } = useTranslation()

  const navigateToCert = (index: number) => {
    const path = `/${pathname.split('/')[1]}/${Routes.CERTIFICATE_INFO}`
    navigate(path, {
      preventScrollReset: true,
      state: { certID: index },
    })
  }

  if (!certificates?.length) return <p className='text-center'>{t('certificates_not_found')}</p>

  return (
    <LabelBelow title={t('certificates_label')}>
      <ul className='ml-2.5 flex flex-col gap-2'>
        {certificates?.map(({ address, index }) => (
          <li
            key={address}
            className='flex gap-2.5 items-center cursor-pointer'
            onClick={() => navigateToCert(index)}>
            <CertIcon className='text-[var(--primary-color)]' />
            <p>{address}</p>
          </li>
        ))}
      </ul>
    </LabelBelow>
  )
}
