import { useOrganization } from '@entities/organization'
import { UploadContent } from '@features/upload-content'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { useTonAddress } from '@tonconnect/ui-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GoOrganization } from 'react-icons/go'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCreateOrganization } from './api/use-create-organization'

export const CreateOrganizationPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { sender } = useTonConnect()
  const address = useTonAddress()
  const [orgContent, setOrgContent] = useState<string | null>(null)
  const { data: organization, isLoading } = useOrganization(address)

  const { mutateAsync: createOrganization, isPending } = useCreateOrganization()

  const handleCreateOrganization = async () => {
    if (!orgContent) return

    await createOrganization({
      owner: address,
      sender,
      content: orgContent,
    })

    // navigate('..')
  }

  if (isLoading || isPending) return <FieldLoader />

  if (organization) return <Navigate to={'..'} />

  return (
    <ContentField title={t('create_org_unit_title')} onBack={() => navigate('..')}>
      <div className='flex flex-col gap-4'>
        <UploadContent
          content={orgContent}
          onContentUpload={content => setOrgContent(content)}
          Icon={<GoOrganization className='w-6 h-6' />}
        />
        <Button onClick={handleCreateOrganization}>Создать организацию</Button>
        <p>{t('create_org_unit_text')}</p>
      </div>
    </ContentField>
  )
}
