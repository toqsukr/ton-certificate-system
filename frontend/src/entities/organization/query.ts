import { execute } from '@shared/api/graphql/execute'
import { NftCollection, NftCollectionConnection } from '@shared/api/graphql/graphql'
import { filterContractEntity } from '@shared/lib/tcs'
import { useQueryClient } from '@tanstack/react-query'
import { openOrgFromAddressContract } from './model/open-org-contract'

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

export const getNFTCollectionByOwnerQuery = (address: string) => ({
  queryKey: [organizationDataQueryKey, address],
  queryFn: async () => {
    const res = await execute<NftCollectionConnection>(getNFTCollectionsByOwner, {
      ownerAddress: address,
      first: 50,
    })
    return Promise.all(
      res.items.map(item =>
        filterContractEntity(item, openOrgFromAddressContract, 'nft_collection')
      )
    )
  },
  select: (data: { checkResult: boolean; entity: NftCollection }[]) => {
    return data.filter(({ checkResult }) => checkResult).map(({ entity }) => entity)[0]
  },
})

export const useInvaliateOrganizationData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [organizationDataQueryKey, address],
    })
}
