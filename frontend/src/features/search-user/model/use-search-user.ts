import { useUserStore } from '@entities/user'
import { useMutateSearchUser } from '../api/mutate-search-user'

export const useSearchUser = (address: string) => {
  const { mutateAsync } = useMutateSearchUser(address)
  const { setUser } = useUserStore()

  return async () => {
    const response = await mutateAsync()
    if (response) {
      const { wallet, publicKey } = response
      setUser({ wallet: wallet.toString(), publicKey: publicKey.toString() })
    }
  }
}
