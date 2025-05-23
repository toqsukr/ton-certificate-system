import axios from 'axios'
import { z } from 'zod'
import { HOST_REST_URL } from './ton-client'

const NFT_PREFIX = '/nfts'

const OwnerSchema = z.object({
  address: z.string(),
  is_scam: z.boolean(),
  is_wallet: z.boolean(),
})

const CollectionSchema = z.object({
  address: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
})

const AttributeSchema = z.object({
  trait_type: z.string(),
  value: z.string(),
})

const NFTInfoDTOSchema = z.object({
  address: z.string(),
  index: z.bigint(),
  owner: OwnerSchema,
  collection: CollectionSchema,
  verified: z.boolean(),
  metadata: z.object({
    name: z.string().nullable(),
    image: z.string().nullable(),
    attributes: AttributeSchema.array(),
    description: z.string().nullable(),
  }),
})

export type NFTInfoDTO = z.infer<typeof NFTInfoDTOSchema>

export const nftService = {
  async getNFTInfo(address: string) {
    return axios
      .get<NFTInfoDTO>(`${HOST_REST_URL}${NFT_PREFIX}/${address}`)
      .then(({ data }) => data)
  },
} as const
