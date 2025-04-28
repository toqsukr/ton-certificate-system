import { useUserStore } from '@entities/user'
import { useCreateUser } from '@features/auth'
import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import LabelOpposite from '@shared/uikit/label-opposite'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { Navigate } from 'react-router-dom'
import UserDepsProvider from './ui/user-deps-provider'

const Content = () => {
  const { mutate: createUser } = useCreateUser()
  const { user } = useUserStore()

  return (
    <ContentField title={'USER-ID'}>
      <div className='flex flex-col gap-4'>
        {user && <LabelOpposite title='Public Key'>{user.publicKey.slice(0, 15)}</LabelOpposite>}
        <LabelOpposite title='Wallet'>
          <TonConnectButton />
        </LabelOpposite>
        <Button onClick={() => createUser()}>Create account</Button>
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
