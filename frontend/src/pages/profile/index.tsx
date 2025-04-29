import { useUserStore } from '@entities/user'
import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import CopyableText from '@shared/uikit/copyable-text'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { Navigate } from 'react-router-dom'
import './tonconnect.css'

const Content = () => {
  const { user } = useUserStore()

  return (
    <ContentField title='Account'>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title='Wallet:'>
          <div id='tonconnect-wrapper'>
            <TonConnectButton />
          </div>
        </LabelOpposite>
        <LabelOpposite title='Address:'>
          <CopyableText text={user?.address ?? ''} />
        </LabelOpposite>
        <LabelBelow title='Certificates:'>
          <ul className='*:ml-4 flex flex-col gap-2'>
            <li>{'• akdjf8asldjfkmzpo_fj?jf89slfldjf8asldj?jf89s'}</li>
            <li>{'• hkerf85jf8_9sjdlxAAGSnvdjf8asldjfkmzpo_fj?jf89s'}</li>
            <li>{'• lIoxcljarmofabosdfn45fadjf8asldjfkmzpo_fj?jf89s'}</li>
            <li>{'• a$djf8fjjf89sdsjdsjzcvsakdjf8asldjfkmzpo_fj?jf89s'}</li>
          </ul>
        </LabelBelow>
      </div>
    </ContentField>
  )
}

const ProfilePage = () => {
  const wallet = useTonWallet()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  return <Content />
}

export default ProfilePage
