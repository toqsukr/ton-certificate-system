import { Address } from '@ton/ton'
import { parseCeil } from './parse-ceil'
import tonClient from './ton-client'

export const userService = {
  async getData(address: string) {
    const result = await tonClient.runMethod(Address.parse(address), 'getUserData')
    return parseCeil(result)
  },
} as const
