import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'
import { Address } from '@ton/core'

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
    return await execute<NftItemConnection>(getNFTItemsByCollection, {
      address: collection,
      first: 50,
    })
  },
  select: (data: NftItemConnection) => {
    return data.items.filter(
      ({ address, owner }) => Address.normalize(address) !== Address.normalize(owner.wallet)
    )
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

export const getCertByOwnerQuery = (
  owner: string,
  getCertAddresses: (
    certs: { collection: string; index: number }[]
  ) => Promise<{ [key: string]: string | undefined }>
) => ({
  queryKey: [userCertsQueryKey, owner],
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
