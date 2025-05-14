import { execute } from '@shared/api/graphql/execute'
import { NftItemConnection } from '@shared/api/graphql/graphql'
import { useQueryClient } from '@tanstack/react-query'
import { Address, Cell, TonClient } from '@ton/ton'
import { TCertificate } from './model/certificate'
import { openCertificateContract } from './model/open-certificate'

const userNFTsQueryKey = 'user-nfts'
const certificateDataQueryKey = 'certificate-data'

type GetNftData = {
  $$type: 'NftData'
  deployed: boolean
  index: bigint
  collection: Address
  owner: Address
  content: Cell
}

const selectCertificate: (data: GetNftData) => TCertificate = data => ({
  id: Number(data.index),
  deployed: data.deployed,
  owner: data.owner.toString(),
  content: data.content.toString(),
  collection: data.collection.toString(),
})

export const certificateDataQueryOptions = (
  client: TonClient,
  collection: string,
  index: number
) => ({
  queryKey: [certificateDataQueryKey, index],
  queryFn: async () =>
    await openCertificateContract(client, Address.parse(collection), BigInt(index)).then(contract =>
      contract.getGetNftData()
    ),
  select: selectCertificate,
})

export const useInvaliateCertificateData = () => {
  const queryClient = useQueryClient()
  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [certificateDataQueryKey, address],
    })
}

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
