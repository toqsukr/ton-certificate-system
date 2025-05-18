import { AddressInput } from '@features/address-input'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { Address } from '@ton/core'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LuSearch } from 'react-icons/lu'
import { useSearchUser } from './use-search-user'

const SearchPage = () => {
  const [searchAddress, setSearchAddress] = useState<Address | null>(null)
  const { t } = useTranslation()

  const searchUser = useSearchUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch()
  }

  const onAddressUpdate = (address: Address | null) => {
    setSearchAddress(address)
  }

  const handleSearch = () => {
    if (!searchAddress) return
    searchUser(searchAddress.toString())
  }

  return (
    <ContentField
      title={
        <ContentField.HeaderWithIcon
          text={t('search_unit_title')}
          icon={<LuSearch className='text-[var(--primary-color)]' />}
        />
      }>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <AddressInput
          placeholder={t('search_input_placeholder')}
          address={searchAddress}
          onAddressUpdate={onAddressUpdate}
        />
        <p className='text-[1rem]'>{t('search_about_text')}</p>
        <Button disabled={!searchAddress} onClick={handleSearch}>
          {t('search_user')}
        </Button>
      </form>
    </ContentField>
  )
}

export default SearchPage
