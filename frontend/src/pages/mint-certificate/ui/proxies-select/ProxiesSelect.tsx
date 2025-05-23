import { useManagerProxies } from '@entities/manager/model/use-manager-proxies'
import { useOrganization } from '@entities/organization'
import { useCertContent } from '@pages/mint-certificate/lib/store'
import Select from '@shared/uikit/select/select'
import { useTonAddress } from '@tonconnect/ui-react'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

const ProxiesSelect = () => {
  const { t } = useTranslation()
  const address = useTonAddress()
  const { data: myOrganization } = useOrganization(address)
  const { data: proxies } = useManagerProxies(address)
  const { organization, updateOrganization } = useCertContent()

  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    updateOrganization(e.currentTarget.value)
  }

  const options = [myOrganization, ...(proxies?.map(proxy => proxy.collection) ?? [])].filter(
    value => !!value
  )

  return (
    <Select value={organization ?? undefined} onChange={handleSelect}>
      <Select.Option selected={!!organization} value=''>
        {t('choose_organization')}
      </Select.Option>
      {options.map(({ address, name }) => (
        <Select.Option selected={organization === address} key={address} value={address}>
          {name || address.slice(0, 24)}
        </Select.Option>
      ))}
    </Select>
  )
}

export default ProxiesSelect
