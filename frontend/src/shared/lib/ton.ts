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

export const getCollectionContent = (rawMetadata: string) => {
  const { _source } = findSource(rawMetadata)
  return createOffchainContent(_source.slice(0, -2))
}

const findSource = (rawMetadata: string) => {
  return JSON.parse(`{${rawMetadata.split(',').filter(data => data.includes('_source'))[0]}}`) as {
    _source: string
  }
}
