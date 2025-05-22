import { execute } from '@shared/api/graphql/execute'
import { NftItem, NftItemConnection } from '@shared/api/graphql/graphql'
import { filterContractEntity } from '@shared/lib/tcs'
import { Address } from '@ton/core'
import { openCertificateContractFromAddress } from './model/open-certificate'

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

export const getCertByOwnerQuery = (owner: string) => ({
  queryKey: [userCertsQueryKey, owner],
  queryFn: async () => {
    const res = await execute<NftItemConnection>(getNFTItemsByOwner, {
      ownerAddress: owner,
      first: 50,
    })
    return Promise.all(
      res.items.map(item =>
        filterContractEntity(item, openCertificateContractFromAddress, 'nft_item')
      )
    )
  },
  select: (data: { checkResult: boolean; entity: NftItem }[]) => {
    return data.filter(({ checkResult }) => checkResult).map(({ entity }) => entity)
  },
})
