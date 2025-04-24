import ContentField from '@shared/uikit/content-field'
import { TonConnectButton } from '@tonconnect/ui-react'

const ProfilePage = () => {
  return (
    <ContentField title='<USER ID>'>
      <TonConnectButton />
    </ContentField>
  )
}

export default ProfilePage
