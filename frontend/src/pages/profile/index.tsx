import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserFactoryContract } from './use-user-factory-contract'
import { useUserContract } from './use-user-ontract'

const ProfilePage = () => {
  const wallet = useTonWallet()
  const [userContract, setUserContract] = useState('USER-ID')
  const userFactory = useUserFactoryContract()
  const user = useUserContract()

  if (!wallet) return <Navigate to={Routes.AUTH} />

  const createUserContract = () => {
    userFactory?.createUser()
  }

  const getContractData = async () => {
    const res = await user?.getGetUserData()
    res && setUserContract(res.publicKey.toString().slice(0, 15))
  }

  return (
    <ContentField title={userContract.slice(0, 20)}>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <TonConnectButton />
          <Button onClick={getContractData}>Get Data</Button>
        </div>
        <Button onClick={createUserContract}>Create account</Button>
      </div>
    </ContentField>
  )
}

export default ProfilePage
