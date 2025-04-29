import { userByAddressQuery } from '@entities/user'
import ContentField from '@shared/uikit/content-field'
import CopyableText from '@shared/uikit/copyable-text'
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
          <div className='h-50' />
          <Spinner className='absolute left-1/2 top-1/2 -translate-1/2' />
        </ContentField>
      </div>
    )

  return (
    <ContentField title={'User Information'}>
      <div className='flex flex-col gap-6'>
        <LabelOpposite title='Address:'>
          <CopyableText text={state.address} />
        </LabelOpposite>
        <LabelOpposite title='Wallet:'>
          <CopyableText text={data?.wallet.toString() ?? ''} />
        </LabelOpposite>
        <LabelOpposite title='Public Key:'>
          <CopyableText text={data?.publicKey.toString() ?? ''} />
        </LabelOpposite>
        <LabelBelow title='Certificates:'>
          <ul className='*:ml-4 flex flex-col gap-2'>
            <li>{'• akdjf8asldjfkmzpo_fj?jf89slfllIoxcljarmofabosdfn45fa'}</li>
            <li>{'• hkerf85jf8_9sjdlxAAGSnvlIoxcljarmofabosdfn45fa'}</li>
            <li>{'• lIoxcljarmofabosdfn45falIoxcljarmofabosdfn45fa'}</li>
            <li>{'• a$djf8fjjf89sdsjdsjzcvsaklIoxcljarmofabosdfn45fa'}</li>
          </ul>
        </LabelBelow>
      </div>
    </ContentField>
  )
}
