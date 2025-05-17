import { execute } from '@shared/api/graphql/execute'
import { NftCollectionConnection } from '@shared/api/graphql/graphql'
import { getCollectionContent } from '@shared/lib/ton'
import { useQueryClient } from '@tanstack/react-query'
import { Cell } from '@ton/core'

const organizationDataQueryKey = 'organization-data'

const getNFTCollectionsByOwner = `
  query NftCollectionsByOwner($ownerAddress: String!, $first: Int!) {
    nftCollectionsByOwner(ownerAddress: $ownerAddress, first: $first) {
      items {
        id
        address
        name
        description
        owner {
          wallet
        }
        rawMetadata
      }
    }
  }
`

const selectOrganizationData = ({
  data,
  certAddresses,
}: {
  data: NftCollectionConnection
  certAddresses: { [key: string]: string | undefined }
}) =>
  data.items.find(({ address }) => {
    return !!certAddresses[address]
  })

export const getNFTCollectionByOwnerQuery = (
  address: string,
  getCollectionAddresses: (
    collectionContents: Cell[]
  ) => Promise<{ [key: string]: string | undefined }>
) => ({
  queryKey: [organizationDataQueryKey, address],
  queryFn: async () => {
    const res = await execute<NftCollectionConnection>(getNFTCollectionsByOwner, {
      ownerAddress: address,
      first: 50,
    })
    const collectionContents = res.items.map(({ rawMetadata }) => {
      return getCollectionContent(rawMetadata)
    })
    const certAddresses = await getCollectionAddresses(collectionContents)
    return { data: res, certAddresses }
  },
  select: selectOrganizationData,
})

export const useInvaliateOrganizationData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [organizationDataQueryKey, address],
    })
}
