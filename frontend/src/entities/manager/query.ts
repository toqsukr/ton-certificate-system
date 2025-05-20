import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'

const managerProxiesQueryKey = 'manager-proxies'

const getNFTItemsByOwner = `
query NftItemsByOwner($ownerAddress: String!, $first: Int!) {
  nftItemsByOwner(ownerAddress: $ownerAddress, first: $first) {
    items {
        name
        description
        address
        id
        index
        owner {
          name
          wallet
        }
        collection {
          description
          address
          name
          rawMetadata
          description
          owner {
            wallet
          }
        }
      }
  }
}
`

const selectProxiesData = ({
  data,
  proxyAddresses,
}: {
  data: NftItemConnection
  proxyAddresses: { [key: string]: string | undefined }
}) => data.items.filter(({ address }) => !!proxyAddresses[address])

export const getManagerProxyByOwnerQuery = (
  owner: string,
  getProxyAddresses: (
    proxies: { collection: string; index: number }[]
  ) => Promise<{ [key: string]: string | undefined }>
) => ({
  queryKey: [managerProxiesQueryKey, owner],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByOwner, {
      ownerAddress: owner,
      first: 50,
    })
    const certs = res.items.map(({ index, collection }) => ({
      collection: collection?.address ?? '',
      index,
    }))
    const proxyAddresses = await getProxyAddresses(certs)
    return { data: res, proxyAddresses }
  },
  select: selectProxiesData,
})
