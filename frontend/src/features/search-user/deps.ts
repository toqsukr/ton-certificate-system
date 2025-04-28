import { createStrictContext, useStrictContext } from '@shared/lib/react'
import { TonClient } from '@ton/ton'

type SearchUserDeps = {
  client: TonClient
}

export const searchUserDepsContext = createStrictContext<SearchUserDeps>()

export const useSearchUserDeps = () => useStrictContext(searchUserDepsContext)
