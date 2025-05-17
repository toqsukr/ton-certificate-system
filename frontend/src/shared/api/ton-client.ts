import { TonClient } from '@ton/ton'

export const HOST_REST_URL = 'https://testnet.tonapi.io/v2/'

export default new TonClient({
  endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
})

// 'https://toncenter.com/api/v2/jsonRPC'
