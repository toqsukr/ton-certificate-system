import { useOrganization } from '@entities/organization'
import { AddressInput } from '@features/address-input'
import { createOffchainContent } from '@shared/lib/ton'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { Address } from '@ton/core'
import { useTonAddress } from '@tonconnect/ui-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAddManager } from './use-add-manager'

export const AddManager = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { sender } = useTonConnect()
  const address = useTonAddress()
  const { data: organization } = useOrganization(address)
  const [managerAddress, setManagerAddress] = useState<Address | null>(null)
  const { mutateAsync: addManager } = useAddManager()

  const onAddressUpdate = (address: Address | null) => {
    setManagerAddress(address)
  }

  const handleAddManager = async () => {
    if (!managerAddress || !organization) return
    try {
      const managerContent = `${import.meta.env.VITE_TON_STORAGE_URL}${
        import.meta.env.VITE_MANAGER_CONTENT_BAGID
      }`
      const collection = Address.parse(organization?.address)
      const content = createOffchainContent(managerContent)
      await addManager({
        sender,
        content,
        collection,
        manager: managerAddress,
      })
      setManagerAddress(null)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ContentField title={t('add_manager_unit_title')} onBack={() => navigate(-1)}>
      <div className='flex flex-col gap-6'>
        <AddressInput
          placeholder={t('manager_address')}
          address={managerAddress}
          onAddressUpdate={onAddressUpdate}
        />
        <Button onClick={handleAddManager} disabled={!managerAddress}>
          {t('add_manager')}
        </Button>
      </div>
    </ContentField>
  )
}
