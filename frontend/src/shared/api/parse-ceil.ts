import { TupleReader } from '@ton/core'

type TonReturn = {
  gas_used: number
  stack: TupleReader
}

export const parseCeil = (result: TonReturn) => {
  const dataCell = result.stack.readCell()
  return dataCell.beginParse()
}
