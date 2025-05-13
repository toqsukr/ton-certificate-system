import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'
import { useQueryClient } from '@tanstack/react-query'

const userDataQueryKey = 'user-data'

const getNFTItemsByOwner = `
  query ExampleQuery($ownerAddress: String!, $first: Int!) {
    nftItemsByOwner(ownerAddress: $ownerAddress, first: $first) {
      items {
        description
        index
        name
        address
      }
    }
  }
`

export const userByAddressQuery = (address: string) => ({
  queryKey: [userDataQueryKey, address],
  queryFn: async () =>
    await execute<NftItemConnection>(getNFTItemsByOwner, {
      ownerAddress: address,
      first: 50,
    }),
})

export const useInvaliateUserData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [userDataQueryKey, address],
    })
}
