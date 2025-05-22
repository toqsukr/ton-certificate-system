import { checkIsWallet } from '@shared/lib/tcs'
import { Routes } from '@shared/model/routes'
import { useNavigate } from 'react-router-dom'

export const useSearchUser = () => {
  const navigate = useNavigate()

  return async (address: string) => {
    const isWallet = await checkIsWallet(address)
    if (isWallet) {
      navigate(Routes.USER_INFO, {
        state: { userAddress: address },
        preventScrollReset: true,
      })
    } else {
      alert('Некорректный адрес кошелька')
    }

    // if (checkGetMethod('is_certificate') && checkInterface('nft_item'))
    //   return navigate(Routes.CERTIFICATE_INFO, {
    //     state: { userAddress: address },
    //     preventScrollReset: true,
    //   })

    // if (checkGetMethod('is_organization') && checkInterface('nft_collection'))
    //   return navigate(Routes.USER_INFO, {
    //     state: { userAddress: address },
    //     preventScrollReset: true,
    //   })
  }
}
