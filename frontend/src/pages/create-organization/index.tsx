import { useOrganization } from '@entities/organization'
import { useCreateOrgTag } from '@features/create-organization-tag'
import { UploadContent, useIsContentSaving, useSaveOffchainContent } from '@features/upload-content'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import Button from '@shared/uikit/button'
import ClearableInput from '@shared/uikit/clearable-input'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import { useTonAddress } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { TbPhotoDown } from 'react-icons/tb'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCreateOrganization } from './api/use-create-organization'
import { OrgContentFormSchema, useOrgContent } from './model/store'

export const CreateOrganizationPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { sender } = useTonConnect()
  const address = useTonAddress()
  const isContentUploading = useIsContentSaving()

  const {
    updateImage,
    updateAttributes,
    updateDescription,
    updateName,
    resetStore,
    ...contentData
  } = useOrgContent()

  const { data: organization, isLoading } = useOrganization(address)

  const { mutateAsync: createOrganization, isPending } = useCreateOrganization()

  const { mutateAsync: saveContentFile } = useSaveOffchainContent()
  const { checkTag, updateTag } = useCreateOrgTag()

  const handleCreateOrganization = async () => {
    if (!OrgContentFormSchema.safeParse(contentData).success) return

    try {
      const jsonString = JSON.stringify(contentData, null, 2)

      const blob = new Blob([jsonString], { type: 'application/json' })

      const file = new File([blob], 'data.json', { type: 'application/json' })

      const reader = new FileReader()

      reader.onloadend = async function () {
        const base64Data = reader.result as string

        const response = await saveContentFile({
          file: base64Data,
          filename: `org-data-${new Date().toISOString().slice(0, 10)}.json`,
        })
        const content = `${import.meta.env.VITE_TON_STORAGE_URL}${response.bagID}`
        console.log('content: ', content)
        await createOrganization({
          owner: address,
          sender,
          content,
        })

        resetStore()
        updateTag()
        navigate('..')
      }
      reader.readAsDataURL(file)
    } catch (e) {
      console.log(e)
    }
  }

  const onContentUpload = (content: string | null) => {
    updateImage(content)
  }

  console.log(contentData, !OrgContentFormSchema.safeParse(contentData).success)

  if (isLoading || isPending) return <FieldLoader />

  if (organization || !checkTag()) return <Navigate to={'..'} />

  return (
    <ContentField title={t('create_org_unit_title')} onBack={() => navigate('..')}>
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
          label={t('upload_org_image')}
          accept='image/png, image/jpeg'
          contentURL={contentData.image}
          onContentUpload={onContentUpload}
          Icon={<TbPhotoDown className='w-6 h-6' />}
        />
        <p>{t('create_org_unit_text')}</p>
        <Button
          disabled={isContentUploading || !OrgContentFormSchema.safeParse(contentData).success}
          onClick={handleCreateOrganization}>
          {t('create_organization')}
        </Button>
      </div>
    </ContentField>
  )
}
