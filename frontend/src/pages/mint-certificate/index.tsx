import { useOrganization } from '@entities/organization'
import { AddressInput } from '@features/address-input'
import { UploadContent, useSaveOffchainContent } from '@features/upload-content'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import Button from '@shared/uikit/button'
import ClearableInput from '@shared/uikit/clearable-input'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { Address } from '@ton/core'
import { useTonAddress } from '@tonconnect/ui-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbPhotoDown } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { useMintCertificate } from './api/mint-certificate'
import { CertContentFormSchema, useCertContent } from './lib/store'
import ProxiesSelect from './ui/proxies-select/ProxiesSelect'

export const MintCertificatePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const address = useTonAddress()
  const { sender } = useTonConnect()
  const [owner, setOwner] = useState<Address | null>(null)
  const { mutateAsync: mintCertificate, isPending } = useMintCertificate()
  const { mutateAsync: saveContentFile, isPending: isContentSaving } = useSaveOffchainContent()
  const { isLoading: isOrgLoading } = useOrganization(address)
  const {
    updateAttributes,
    updateDescription,
    updateImage,
    updateName,
    updateOrganization,
    resetStore,
    ...storeValues
  } = useCertContent()

  const handleMintCert = async () => {
    if (!owner || !CertContentFormSchema.safeParse(storeValues).success) return
    const { organization, ...contentData } = storeValues

    try {
      const jsonString = JSON.stringify(contentData, null, 2)

      const blob = new Blob([jsonString], { type: 'application/json' })

      const file = new File([blob], 'data.json', { type: 'application/json' })

      const reader = new FileReader()

      reader.onloadend = async function () {
        const base64Data = reader.result as string

        const response = await saveContentFile({
          file: base64Data,
          filename: `cert-data-${new Date().toISOString().slice(0, 10)}.json`,
        })
        const content = `${import.meta.env.VITE_TON_STORAGE_URL}${response.bagID}`
        const collectionAddress = Address.parse(organization!).toString()

        await mintCertificate({
          sender,
          content,
          owner,
          collectionAddress,
        })

        resetStore()
        setOwner(null)
      }
      reader.readAsDataURL(file)
    } catch (e) {
      console.error(e)
    }
  }

  const onContentUpload = (content: string | null) => {
    updateImage(content)
  }

  if (isOrgLoading) return <FieldLoader />

  return (
    <ContentField title={t('mint_cert_unit_title')} onBack={() => navigate(-1)}>
      <div className='flex flex-col gap-4'>
        <ProxiesSelect />
        <ClearableInput
          disabled={!storeValues.organization || isPending || isContentSaving}
          onChange={e => updateName(e.currentTarget.value)}
          placeholder={t('content_name')}
        />
        <ClearableInput
          disabled={!storeValues.organization || isPending || isContentSaving}
          onChange={e => updateDescription(e.currentTarget.value)}
          placeholder={t('content_description')}
        />
        <AddressInput
          disabled={!storeValues.organization || isPending || isContentSaving}
          placeholder={t('cert_owner_address')}
          address={owner}
          onAddressUpdate={address => setOwner(address)}
        />
        <UploadContent
          disabled={!storeValues.organization}
          label={t('upload_cert_image')}
          accept='image/png, image/jpeg'
          contentURL={storeValues.image}
          onContentUpload={onContentUpload}
          Icon={<TbPhotoDown className='w-6 h-6' />}
        />
        <p>{t('create_cert_unit_text')}</p>
        <Button
          onClick={handleMintCert}
          disabled={
            isPending ||
            isContentSaving ||
            !owner ||
            !CertContentFormSchema.safeParse(storeValues).success
          }>
          {t('mint_certificate')}
        </Button>
      </div>
    </ContentField>
  )
}
