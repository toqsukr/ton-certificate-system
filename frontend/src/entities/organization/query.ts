import { execute } from '@shared/api/graphql/execute'
import { NftCollectionConnection } from '@shared/api/graphql/graphql'
import { createOffchainContent } from '@shared/lib/ton'
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

const selectOrganizationData = (
  data: NftCollectionConnection,
  certAddresses: { [key: string]: string | undefined }
) =>
  data.items.find(({ address }) => {
    return !!certAddresses[address]
  })

const findSource = (rawMetadata: string) => {
  return JSON.parse(`{${rawMetadata.split(',').filter(data => data.includes('_source'))[0]}}`) as {
    _source: string
  }
}

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
      const { _source } = findSource(rawMetadata)
      return createOffchainContent(_source.slice(0, -2))
    })
    const certAddresses = await getCollectionAddresses(collectionContents)
    return { data: res, certAddresses }
  },
  select: ({
    data,
    certAddresses,
  }: {
    data: NftCollectionConnection
    certAddresses: { [key: string]: string | undefined }
  }) => {
    const selected = selectOrganizationData(data, certAddresses)
    return selected
  },
})

export const useInvaliateOrganizationData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [organizationDataQueryKey, address],
    })
}
