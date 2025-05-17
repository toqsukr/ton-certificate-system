import { useOrganization } from '@entities/organization'
import { UploadContent } from '@features/upload-content/index.tsx'
import { getCollectionContent } from '@shared/lib/ton'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { CertIcon } from '@shared/uikit/icons'
import { Address } from '@ton/core'
import { useTonAddress } from '@tonconnect/ui-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useMintCertificate } from './api/mint-certificate'
import OwnerAddressInput from './ui/owner-address-input'

export const MintCertificatePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { mutateAsync: mintCertificate, isPending } = useMintCertificate()
  const address = useTonAddress()
  const { sender } = useTonConnect()
  const { data: organization, isLoading } = useOrganization(address)
  const [ownerAddress, setOwnerAddress] = useState<Address | null>(null)
  const [certContent, setCertContent] = useState<string | null>(null)

  const handleMintCert = async () => {
    if (!organization || !ownerAddress || !certContent) return
    const collectionContent = getCollectionContent(organization.rawMetadata)

    await mintCertificate({
      sender,
      content: certContent,
      owner: ownerAddress,
      collectionContent,
      collectionOwner: organization.owner.wallet,
    })
    setOwnerAddress(null)
    setCertContent(null)
  }

  if (isLoading || isPending) return <FieldLoader />

  return (
    <ContentField title={t('mint_cert_unit_title')} onBack={() => navigate('..')}>
      <div className='flex flex-col gap-4'>
        <OwnerAddressInput
          ownerAddress={ownerAddress}
          onOwnerUpdate={address => setOwnerAddress(address)}
        />

        <UploadContent
          Icon={<CertIcon />}
          content={certContent}
          onContentUpload={content => setCertContent(content)}
        />

        <Button onClick={handleMintCert} disabled={!!!ownerAddress || !!!certContent}>
          Выпустить
        </Button>
        <p>{t('create_cert_unit_text')}</p>
      </div>
    </ContentField>
  )
}
