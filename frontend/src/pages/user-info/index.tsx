import { userByAddressQuery } from '@entities/user'
import ContentField from '@shared/uikit/content-field'
import LabelOpposite from '@shared/uikit/label-opposite'
import Spinner from '@shared/uikit/spinner'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

export const UserInfoPage = () => {
  const { state } = useLocation()

  const { data, isFetching } = useQuery(userByAddressQuery(state.address ?? ''))

  if (isFetching)
    return (
      <div className=' relative'>
        <ContentField title={''}>
          <div className='h-40' />
          <Spinner className='absolute left-1/2 top-1/2 -translate-1/2' />
        </ContentField>
      </div>
    )

  return (
    <ContentField title={data?.publicKey.toString().slice(0, 15) ?? ''}>
      <LabelOpposite title='Wallet'>{data?.wallet.toString().slice(0, 15)}</LabelOpposite>
    </ContentField>
  )
}
