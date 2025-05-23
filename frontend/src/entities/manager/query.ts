import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'
import { filterNftItems, managerTagAttribute } from '@shared/lib/tcs'

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

export const getManagerProxyByOwnerQuery = (owner: string) => ({
  queryKey: [managerProxiesQueryKey, owner],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByOwner, {
      ownerAddress: owner,
      first: 50,
    })
    return await filterNftItems(managerTagAttribute, res.items)
  },
})

const getNFTItemsByCollection = `
  query NftCollectionItems($address: String!, $first: Int!) {
    nftCollectionItems(address: $address, first: $first) {
      items {
        name
        description
        address
        id
        owner {
          name
          wallet
        }
        collection {
          description
          address
          name
          description
        }
      }
    }
  }
`

export const getManagerProxyByCollectionQuery = (collection: string) => ({
  queryKey: [managerProxiesQueryKey, collection],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByCollection, {
      address: collection,
      first: 50,
    })
    return await filterNftItems(managerTagAttribute, res.items)
  },
})
