import tonClient from '@shared/api/ton-client'
import { useQueryClient } from '@tanstack/react-query'
import { openUserContract } from '../model/open-user-contract'

const userDataQueryKey = 'user-data'

export const userByAddressQuery = (address: string) => {
  return {
    queryKey: [userDataQueryKey, address],
    queryFn: async () => {
      return await openUserContract(tonClient, address)?.getGetUserData()
    },
  }
}

export const useInvaliateUserData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [userDataQueryKey, address],
    })
}
