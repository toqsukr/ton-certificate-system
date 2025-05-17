import axios from 'axios'
import { z } from 'zod'
import { HOST_REST_URL } from './ton-client'

const COLLECTION_PREFIX = '/nfts/collections'

const WalletSchema = z.object({
  address: z.string(),
  name: z.string(),
  is_scam: z.boolean(),
  is_wallet: z.boolean(),
})

const NFTCollectionSchema = z.object({
  address: z.string(),
  next_item_index: z.number(),
  owner: WalletSchema,
  raw_collection_content: z.string(),
  approved_by: z.string().array(),
})

const NFTSchema = z.object({
  address: z.string(),
  index: z.number(),
  owner: WalletSchema,
  collection: NFTCollectionSchema,
})

const GetNFTItemsSchema = z.object({
  nft_items: NFTSchema.array(),
})

export type NFTCollection = z.infer<typeof NFTCollectionSchema>

export type GetNFTItems = z.infer<typeof GetNFTItemsSchema>

export const organizationService = {
  async getNFTCollection(collection: string) {
    return axios
      .get<NFTCollection>(`${HOST_REST_URL}${COLLECTION_PREFIX}/${collection}`)
      .then(({ data }) => NFTCollectionSchema.parse(data))
  },

  async getItemsByCollection(collection: string) {
    return axios
      .get<GetNFTItems>(`${HOST_REST_URL}${COLLECTION_PREFIX}/${collection}/items`)
      .then(({ data }) => GetNFTItemsSchema.parse(data))
  },
} as const
