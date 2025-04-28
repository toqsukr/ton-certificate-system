import { openUserContract } from '@entities/user'
import { useMutation } from '@tanstack/react-query'
import { useSearchUserDeps } from '../deps'

const searchUserKey = 'search-user-key'

export const useMutateSearchUser = (address: string) => {
  const { client } = useSearchUserDeps()

  return useMutation({
    mutationKey: [searchUserKey],
    mutationFn: async () => {
      return openUserContract(client, address)?.getGetUserData()
    },
  })
}
