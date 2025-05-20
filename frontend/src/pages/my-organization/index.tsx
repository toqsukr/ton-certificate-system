import { getNFTByCollectionQuery } from '@entities/certificate'
import { useManagerProxies } from '@entities/manager'
import { useOrganization } from '@entities/organization'
import { AddressLabel } from '@features/address-label'
import NameLabel from '@features/name-label'
import { OwnerLabel } from '@features/owner-label'
import { useTonConnect } from '@shared/lib/use-ton-connect'
import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import FieldLoader from '@shared/uikit/field-loader'
import LabelBelow from '@shared/uikit/label-below'
import { useQuery } from '@tanstack/react-query'
import { Address } from '@ton/core'
import { useTonAddress } from '@tonconnect/ui-react'
import { useTranslation } from 'react-i18next'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDeleteOrg } from './use-delete-org'

export const MyOrganizationPage = () => {
  const { t } = useTranslation()
  const address = useTonAddress()
  const navigate = useNavigate()
  const { sender } = useTonConnect()
  const { data: proxies, isLoading: isProxiesLoading } = useManagerProxies(address)
  const { data: organization, isLoading: isOrgLoading } = useOrganization(address)
  const { data: certificates, isLoading: isCertsLoading } = useQuery(
    getNFTByCollectionQuery(organization?.address ?? '')
  )
  const { mutate: deleteOrganization } = useDeleteOrg()

  const handleDeleteOrg = () => {
    try {
      const collection = Address.parse(organization?.address ?? '')
      deleteOrganization({ sender, collection })
    } catch (e) {
      console.error(e)
    }
  }

  if (isOrgLoading || isCertsLoading || isProxiesLoading) return <FieldLoader />

  if (!organization) return <Navigate to={'..'} />

  return (
    <ContentField
      onBack={() => navigate(Routes.PROFILE)}
      title={
        <ContentField.HeaderWithIcon
          text={t('my_organization_unit_title')}
          icon={<PiSuitcaseSimple className='h-[1.6rem] w-[1.6rem] text-[var(--primary-color)]' />}
        />
      }>
      <div className='flex flex-col gap-6'>
        <AddressLabel address={organization.address} />
        <OwnerLabel userAddress={address} />
        <NameLabel name={organization?.name} />
        <LabelBelow title={t('description_label')}>{organization.description}</LabelBelow>
        {!!certificates?.length && (
          <Button onClick={() => navigate(Routes.ORGANIZATION_CERTIFICATES)}>
            {t('issued_certificates')}
          </Button>
        )}
        <Button onClick={() => navigate(Routes.ADD_MANAGER)}>{t('add_manager')}</Button>
        {!!proxies?.length && (
          <Button onClick={() => navigate(Routes.ALL_MANAGERS)}>{t('all_managers')}</Button>
        )}
        <Button onClick={handleDeleteOrg}>{t('delete_organization')}</Button>
      </div>
    </ContentField>
  )
}
