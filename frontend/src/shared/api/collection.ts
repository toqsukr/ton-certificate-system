import axios from 'axios'
import { z } from 'zod'
import { HOST_REST_URL } from './ton-client'

const COLLECTION_PREFIX = '/nfts/collections'

const CollectionInfoDTOSchema = z.object({
  address: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  social_links: z.string().array(),
})

export type CollectionInfoDTO = z.infer<typeof CollectionInfoDTOSchema>

export const collectionService = {
  async getCollectionInfo(address: string) {
    return axios
      .get<CollectionInfoDTO>(`${HOST_REST_URL}${COLLECTION_PREFIX}/${address}`)
      .then(({ data }) => data)
  },
} as const
