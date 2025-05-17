import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'

const userNFTsQueryKey = 'user-nfts'

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
  queryKey: [userNFTsQueryKey, collection],
  queryFn: async () => {
    return await execute<NftItemConnection>(getNFTItemsByCollection, {
      address: collection,
      first: 50,
    })
  },
  select: (data: NftItemConnection) => {
    return data.items
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

const selectCertificatesData = ({
  data,
  certAddresses,
}: {
  data: NftItemConnection
  certAddresses: { [key: string]: string | undefined }
}) => data.items.filter(({ address }) => !!certAddresses[address])

export const getNFTByOwnerQuery = (
  owner: string,
  getCertAddresses: (
    certs: { collection: string; index: number }[]
  ) => Promise<{ [key: string]: string | undefined }>
) => ({
  queryKey: [userNFTsQueryKey, owner],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByOwner, {
      ownerAddress: owner,
      first: 50,
    })
    const certs = res.items.map(({ index, collection }) => ({
      collection: collection?.address ?? '',
      index,
    }))
    const certAddresses = await getCertAddresses(certs)
    return { data: res, certAddresses }
  },
  select: selectCertificatesData,
})
