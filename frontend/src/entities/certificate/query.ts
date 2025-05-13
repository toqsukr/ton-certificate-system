import { useQueryClient } from '@tanstack/react-query'
import { Address, Cell, TonClient } from '@ton/ton'
import { TCertificate } from './model/certificate'
import { openCertificateContract } from './model/open-certificate'

const certificateDataQueryKey = 'certificate-data'

type GetNftData = {
  $$type: 'NftData'
  deployed: boolean
  index: bigint
  collection: Address
  owner: Address
  content: Cell
}

const selectCallback: (data: GetNftData) => TCertificate = data => ({
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
  select: selectCallback,
})

export const useInvaliateCertificateData = () => {
  const queryClient = useQueryClient()

  return (address: string) =>
    queryClient.invalidateQueries({
      queryKey: [certificateDataQueryKey, address],
    })
}
