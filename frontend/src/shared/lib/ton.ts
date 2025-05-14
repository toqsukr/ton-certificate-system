import { beginCell } from '@ton/core'
import { useEffect, useState } from 'react'

export const TONVIEWER_PREFIX = 'https://testnet.tonviewer.com/'

export const useAsyncInitialize = <T>(func: () => Promise<T>, deps: unknown[] = []) => {
  const [state, setState] = useState<T | undefined>()

  useEffect(() => {
    ;(async () => {
      setState(await func())
    })()
  }, deps)

  return state
}

export function createOffchainContent(str: string) {
  return beginCell().storeUint(1, 8).storeStringTail(str).endCell()
}
