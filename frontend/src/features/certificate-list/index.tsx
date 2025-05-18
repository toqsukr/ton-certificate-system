import { NftItem } from '@shared/api/graphql/graphql'
import { Routes } from '@shared/model/routes'
import { CertIcon } from '@shared/uikit/icons'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './styles.module.scss'

export const CertificateList: FC<{
  certificates: NftItem[] | undefined
}> = ({ certificates }) => {
  const navigate = useNavigate()

  const navigateToCert = (id: string, userAddress: string) => {
    navigate(Routes.CERTIFICATE_INFO, {
      preventScrollReset: true,
      state: { certID: id, userAddress },
    })
  }

  console.log(certificates)

  return (
    <ul className={css.certificate_list}>
      {certificates?.map(({ id, address, name, owner }) => (
        <li
          key={address}
          className='flex flex-col p-3 gap-2 rounded-2xl w-[8rem] cursor-pointer'
          onClick={() => navigateToCert(id, owner.wallet)}>
          <CertIcon className={css.cert_icon} />
          <p className='text-center truncate '>{name || name?.length || 'Без названия'}</p>
        </li>
      ))}
    </ul>
  )
}
