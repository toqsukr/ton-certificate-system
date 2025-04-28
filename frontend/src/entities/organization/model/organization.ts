import { Address } from '@ton/core'

export type TOrganization = {
  code: string
  publicKey: string
  wallet: Address
  creator: string
}
