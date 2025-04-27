import { Routes } from '@shared/model/routes'
import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { Address } from '@ton/core'
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
    const hexPublicKey = BigInt(`0x${wallet.account.publicKey}`)

    userFactory?.sendExternal({
      $$type: 'CreateUserRequest',
      seqno: BigInt(`0x42`),
      wallet: Address.parse(wallet.account.address),
      publicKey: hexPublicKey,
    })
  }

  const getContractData = async () => {
    console.log(user?.getGetUserData())
    user && setUserContract((await user.getGetUserData()).publicKey.toString().slice(0, 15))
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
