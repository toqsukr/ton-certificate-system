import { Routes } from '@shared/model/routes'
import ContentField from '@shared/uikit/content-field'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { Navigate } from 'react-router-dom'
import css from './styles.module.scss'
import UserDepsProvider from './ui/user-deps-provider'

const Content = () => {
  // const { user } = useUserStore()

  return (
    <ContentField title='Account'>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title='Wallet:'>
          <div className={css.ton_connect_wrapper}>
            <TonConnectButton />
          </div>
        </LabelOpposite>

        <LabelBelow title='Certificates:'>
          <ul className='*:ml-4 flex flex-col gap-2'>
            <li>{'• akdjf8asldjfkmzpo_fj?jf89slfl'}</li>
            <li>{'• hkerf85jf8_9sjdlxAAGSnv'}</li>
            <li>{'• lIoxcljarmofabosdfn45fa'}</li>
            <li>{'• a$djf8fjjf89sdsjdsjzcvsak'}</li>
          </ul>
        </LabelBelow>
      </div>
    </ContentField>
  )
}

const ProfilePage = () => {
  const wallet = useTonWallet()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  return (
    <UserDepsProvider wallet={wallet}>
      <Content />
    </UserDepsProvider>
  )
}

export default ProfilePage
