import { TONVIEWER_PREFIX } from '@shared/lib/ton'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import LabelOpposite from '@shared/uikit/label-opposite'
import { Address } from '@ton/core'
import { useTonAddress } from '@tonconnect/ui-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const AddressLabel: FC<{ address: string }> = ({ address }) => {
  const { t } = useTranslation()

  return (
    <LabelOpposite title={t('address_label')}>
      <p>
        <Link
          target='_blank'
          to={`${TONVIEWER_PREFIX}${address}`}
          className='cursor-pointer underline'>
          {address}
        </Link>
      </p>
    </LabelOpposite>
  )
}

export const useIsMyAddress = () => {
  const address = useTonAddress()
  const { connected } = useTonConnect()

  return (addressToCheck: string | undefined) => {
    return connected && Address.normalize(addressToCheck ?? '') === Address.normalize(address)
  }
}
