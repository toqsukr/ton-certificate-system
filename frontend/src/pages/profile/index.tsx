import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import LabelOpposite from '@shared/uikit/label-opposite'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserFactoryContract } from './use-user-factory-contract'
import { useUserContract } from './use-user-ontract'

const ProfilePage = () => {
  const wallet = useTonWallet()
  const [userContract, setUserContract] = useState<string | null>(null)
  const userFactory = useUserFactoryContract()
  const user = useUserContract()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  const createUserContract = () => {
    userFactory?.createUser()
  }

  const getContractData = async () => {
    const res = await user?.contract.getGetUserData()
    res && setUserContract(res.publicKey.toString())
  }

  return (
    <ContentField title={user?.address.slice(0, 15) ?? 'USER-ID'}>
      <div className='flex flex-col gap-4'>
        {userContract && (
          <LabelOpposite title='Public Key'>{userContract.slice(0, 15)}</LabelOpposite>
        )}
        <LabelOpposite title='Wallet'>
          <TonConnectButton />
        </LabelOpposite>
        <Button onClick={getContractData}>Get Data</Button>
        <Button onClick={createUserContract}>Create account</Button>
      </div>
    </ContentField>
  )
}

export default ProfilePage
