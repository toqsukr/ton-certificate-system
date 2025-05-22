import axios from 'axios'
import { z } from 'zod'
import { HOST_REST_URL } from './ton-client'

const ACCOUNT_PREFIX = '/accounts'

const AccountInfoDTOSchema = z.object({
  address: z.string(),
  is_wallet: z.boolean(),
  interfaces: z.string().array(),
  get_methods: z.string().array(),
  status: z.string(),
  last_activity: z.bigint(),
  balance: z.bigint(),
})

export type AccountInfoDTO = z.infer<typeof AccountInfoDTOSchema>

export const accountService = {
  async getAccountInfo(address: string) {
    return axios
      .get<AccountInfoDTO>(`${HOST_REST_URL}${ACCOUNT_PREFIX}/${address}`)
      .then(({ data }) => data)
  },
} as const
