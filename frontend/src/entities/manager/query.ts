import { execute } from '@shared/api/graphql/execute'
import { NftItem, NftItemConnection } from '@shared/api/graphql/graphql'
import { filterContractEntity } from '@shared/lib/tcs'
import { openManagerContractFromAddress } from './model/open-manager-contract'

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
    return Promise.all(
      res.items.map(item => filterContractEntity(item, openManagerContractFromAddress, 'nft-item'))
    )
  },
  select: (data: { checkResult: boolean; entity: NftItem }[]) => {
    return data.filter(({ checkResult }) => checkResult).map(({ entity }) => entity)
  },
})
