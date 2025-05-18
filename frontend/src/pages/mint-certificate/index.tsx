import { useOrganization } from '@entities/organization'
import { UploadContent, useIsContentSaving } from '@features/upload-content/index.tsx'
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

export const MintCertificatePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { mutateAsync: mintCertificate, isPending } = useMintCertificate()
  const address = useTonAddress()
  const { sender } = useTonConnect()
  const { data: organization, isLoading } = useOrganization(address)
  const [ownerAddress, setOwnerAddress] = useState<Address | null>(null)
  const [certContent, setCertContent] = useState<string | null>(null)
  const { updateAttributes, updateDescription, updateImage, updateName, ...contentData } =
    useCertContent()
  const isContentUploading = useIsContentSaving()

  const handleMintCert = async () => {
    if (!organization || !ownerAddress || !certContent) return

    await mintCertificate({
      sender,
      content: certContent,
      owner: ownerAddress,
      collectionAddress: organization.address,
    })
    setOwnerAddress(null)
    setCertContent(null)
  }

  const onContentUpload = (content: string | null) => {
    updateImage(content)
  }

  if (isLoading || isPending) return <FieldLoader />

  return (
    <ContentField title={t('mint_cert_unit_title')} onBack={() => navigate('..')}>
      <div className='flex flex-col gap-4'>
        <ClearableInput
          onChange={e => updateName(e.currentTarget.value)}
          placeholder={t('content_name')}
        />
        <ClearableInput
          onChange={e => updateDescription(e.currentTarget.value)}
          placeholder={t('content_description')}
        />
        <UploadContent
          label={t('upload_cert_image')}
          accept='image/png, image/jpeg'
          contentURL={contentData.image}
          onContentUpload={onContentUpload}
          Icon={<TbPhotoDown className='w-6 h-6' />}
        />
        <p>{t('create_cert_unit_text')}</p>
        <Button
          onClick={handleMintCert}
          disabled={isContentUploading || !CertContentFormSchema.safeParse(contentData).success}>
          {t('mint_certificate')}
        </Button>
      </div>
    </ContentField>
  )
}
