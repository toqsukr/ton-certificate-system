import { useQueryClient } from '@tanstack/react-query'
import { Address, Cell, TonClient } from '@ton/ton'
import { TManager } from './model/manager'
import { openManagerContract } from './model/open-manager'

const managerDataQueryKey = 'manager-data'

type GetManagerData = {
  $$type: 'NftData'
  deployed: boolean
  index: bigint
  collection: Address
  owner: Address
  content: Cell
}

const selectManager: (data: GetManagerData) => TManager = data => ({
  id: Number(data.index),
  deployed: data.deployed,
  owner: data.owner.toString(),
  content: data.content.toString(),
  collection: data.collection.toString(),
})

export const managerDataQueryOptions = (client: TonClient, collection: string, index: number) => ({
  queryKey: [managerDataQueryKey, index],
  queryFn: async () =>
    await openManagerContract(client, Address.parse(collection), BigInt(index)).then(contract =>
      contract.getGetNftData()
    ),
  select: selectManager,
})

export const useInvaliateCertificateData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [managerDataQueryKey, address],
    })
}
