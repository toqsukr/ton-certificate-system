import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'
import { certificateTagAttribute, filterNftItems } from '@shared/lib/tcs'

const userCertsQueryKey = 'user-certs'
const userOrgQueryKey = 'user-org'

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

export const getNFTByCollectionQuery = (collection: string) => ({
  queryKey: [userOrgQueryKey, collection],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByCollection, {
      address: collection,
      first: 50,
    })
    return await filterNftItems(certificateTagAttribute, res.items)
  },
})

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

export const getCertByOwnerQuery = (owner: string) => ({
  queryKey: [userCertsQueryKey, owner],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByOwner, {
      ownerAddress: owner,
      first: 50,
    })
    return await filterNftItems(certificateTagAttribute, res.items)
  },
})
