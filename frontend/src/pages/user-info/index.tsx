import { userByAddressQuery } from '@entities/user'
import ContentField from '@shared/uikit/content-field'
import LabelBelow from '@shared/uikit/label-below'
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
    <ContentField title={'User Information'}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title='Address:'>{state.address.slice(0, 20)}</LabelOpposite>
        <LabelOpposite title='Wallet:'>{data?.wallet.toString().slice(0, 20)}</LabelOpposite>
        <LabelOpposite title='Public Key:'>{data?.publicKey.toString().slice(0, 20)}</LabelOpposite>
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
