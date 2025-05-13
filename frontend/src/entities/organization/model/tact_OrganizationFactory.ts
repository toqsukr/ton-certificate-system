import {
  ABIGetter,
  ABIReceiver,
  ABIType,
  Address,
  beginCell,
  Builder,
  Cell,
  Contract,
  ContractABI,
  contractAddress,
  ContractProvider,
  Dictionary,
  DictionaryValue,
  Sender,
  Slice,
  TupleBuilder,
  TupleReader,
} from '@ton/core'

export type DataSize = {
  $$type: 'DataSize'
  cells: bigint
  bits: bigint
  refs: bigint
}

export function storeDataSize(src: DataSize) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.cells, 257)
    b_0.storeInt(src.bits, 257)
    b_0.storeInt(src.refs, 257)
  }
}

export function loadDataSize(slice: Slice) {
  const sc_0 = slice
  const _cells = sc_0.loadIntBig(257)
  const _bits = sc_0.loadIntBig(257)
  const _refs = sc_0.loadIntBig(257)
  return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs }
}

export function loadTupleDataSize(source: TupleReader) {
  const _cells = source.readBigNumber()
  const _bits = source.readBigNumber()
  const _refs = source.readBigNumber()
  return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs }
}

export function loadGetterTupleDataSize(source: TupleReader) {
  const _cells = source.readBigNumber()
  const _bits = source.readBigNumber()
  const _refs = source.readBigNumber()
  return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs }
}

export function storeTupleDataSize(source: DataSize) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.cells)
  builder.writeNumber(source.bits)
  builder.writeNumber(source.refs)
  return builder.build()
}

export function dictValueParserDataSize(): DictionaryValue<DataSize> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDataSize(src)).endCell())
    },
    parse: src => {
      return loadDataSize(src.loadRef().beginParse())
    },
  }
}

export type SignedBundle = {
  $$type: 'SignedBundle'
  signature: Buffer
  signedData: Slice
}

export function storeSignedBundle(src: SignedBundle) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeBuffer(src.signature)
    b_0.storeBuilder(src.signedData.asBuilder())
  }
}

export function loadSignedBundle(slice: Slice) {
  const sc_0 = slice
  const _signature = sc_0.loadBuffer(64)
  const _signedData = sc_0
  return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData }
}

export function loadTupleSignedBundle(source: TupleReader) {
  const _signature = source.readBuffer()
  const _signedData = source.readCell().asSlice()
  return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData }
}

export function loadGetterTupleSignedBundle(source: TupleReader) {
  const _signature = source.readBuffer()
  const _signedData = source.readCell().asSlice()
  return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData }
}

export function storeTupleSignedBundle(source: SignedBundle) {
  const builder = new TupleBuilder()
  builder.writeBuffer(source.signature)
  builder.writeSlice(source.signedData.asCell())
  return builder.build()
}

export function dictValueParserSignedBundle(): DictionaryValue<SignedBundle> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSignedBundle(src)).endCell())
    },
    parse: src => {
      return loadSignedBundle(src.loadRef().beginParse())
    },
  }
}

export type StateInit = {
  $$type: 'StateInit'
  code: Cell
  data: Cell
}

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeRef(src.code)
    b_0.storeRef(src.data)
  }
}

export function loadStateInit(slice: Slice) {
  const sc_0 = slice
  const _code = sc_0.loadRef()
  const _data = sc_0.loadRef()
  return { $$type: 'StateInit' as const, code: _code, data: _data }
}

export function loadTupleStateInit(source: TupleReader) {
  const _code = source.readCell()
  const _data = source.readCell()
  return { $$type: 'StateInit' as const, code: _code, data: _data }
}

export function loadGetterTupleStateInit(source: TupleReader) {
  const _code = source.readCell()
  const _data = source.readCell()
  return { $$type: 'StateInit' as const, code: _code, data: _data }
}

export function storeTupleStateInit(source: StateInit) {
  const builder = new TupleBuilder()
  builder.writeCell(source.code)
  builder.writeCell(source.data)
  return builder.build()
}

export function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell())
    },
    parse: src => {
      return loadStateInit(src.loadRef().beginParse())
    },
  }
}

export type Context = {
  $$type: 'Context'
  bounceable: boolean
  sender: Address
  value: bigint
  raw: Slice
}

export function storeContext(src: Context) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeBit(src.bounceable)
    b_0.storeAddress(src.sender)
    b_0.storeInt(src.value, 257)
    b_0.storeRef(src.raw.asCell())
  }
}

export function loadContext(slice: Slice) {
  const sc_0 = slice
  const _bounceable = sc_0.loadBit()
  const _sender = sc_0.loadAddress()
  const _value = sc_0.loadIntBig(257)
  const _raw = sc_0.loadRef().asSlice()
  return {
    $$type: 'Context' as const,
    bounceable: _bounceable,
    sender: _sender,
    value: _value,
    raw: _raw,
  }
}

export function loadTupleContext(source: TupleReader) {
  const _bounceable = source.readBoolean()
  const _sender = source.readAddress()
  const _value = source.readBigNumber()
  const _raw = source.readCell().asSlice()
  return {
    $$type: 'Context' as const,
    bounceable: _bounceable,
    sender: _sender,
    value: _value,
    raw: _raw,
  }
}

export function loadGetterTupleContext(source: TupleReader) {
  const _bounceable = source.readBoolean()
  const _sender = source.readAddress()
  const _value = source.readBigNumber()
  const _raw = source.readCell().asSlice()
  return {
    $$type: 'Context' as const,
    bounceable: _bounceable,
    sender: _sender,
    value: _value,
    raw: _raw,
  }
}

export function storeTupleContext(source: Context) {
  const builder = new TupleBuilder()
  builder.writeBoolean(source.bounceable)
  builder.writeAddress(source.sender)
  builder.writeNumber(source.value)
  builder.writeSlice(source.raw.asCell())
  return builder.build()
}

export function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell())
    },
    parse: src => {
      return loadContext(src.loadRef().beginParse())
    },
  }
}

export type SendParameters = {
  $$type: 'SendParameters'
  mode: bigint
  body: Cell | null
  code: Cell | null
  data: Cell | null
  value: bigint
  to: Address
  bounce: boolean
}

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.mode, 257)
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body)
    } else {
      b_0.storeBit(false)
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code)
    } else {
      b_0.storeBit(false)
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data)
    } else {
      b_0.storeBit(false)
    }
    b_0.storeInt(src.value, 257)
    b_0.storeAddress(src.to)
    b_0.storeBit(src.bounce)
  }
}

export function loadSendParameters(slice: Slice) {
  const sc_0 = slice
  const _mode = sc_0.loadIntBig(257)
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null
  const _code = sc_0.loadBit() ? sc_0.loadRef() : null
  const _data = sc_0.loadBit() ? sc_0.loadRef() : null
  const _value = sc_0.loadIntBig(257)
  const _to = sc_0.loadAddress()
  const _bounce = sc_0.loadBit()
  return {
    $$type: 'SendParameters' as const,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
    value: _value,
    to: _to,
    bounce: _bounce,
  }
}

export function loadTupleSendParameters(source: TupleReader) {
  const _mode = source.readBigNumber()
  const _body = source.readCellOpt()
  const _code = source.readCellOpt()
  const _data = source.readCellOpt()
  const _value = source.readBigNumber()
  const _to = source.readAddress()
  const _bounce = source.readBoolean()
  return {
    $$type: 'SendParameters' as const,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
    value: _value,
    to: _to,
    bounce: _bounce,
  }
}

export function loadGetterTupleSendParameters(source: TupleReader) {
  const _mode = source.readBigNumber()
  const _body = source.readCellOpt()
  const _code = source.readCellOpt()
  const _data = source.readCellOpt()
  const _value = source.readBigNumber()
  const _to = source.readAddress()
  const _bounce = source.readBoolean()
  return {
    $$type: 'SendParameters' as const,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
    value: _value,
    to: _to,
    bounce: _bounce,
  }
}

export function storeTupleSendParameters(source: SendParameters) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.mode)
  builder.writeCell(source.body)
  builder.writeCell(source.code)
  builder.writeCell(source.data)
  builder.writeNumber(source.value)
  builder.writeAddress(source.to)
  builder.writeBoolean(source.bounce)
  return builder.build()
}

export function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell())
    },
    parse: src => {
      return loadSendParameters(src.loadRef().beginParse())
    },
  }
}

export type MessageParameters = {
  $$type: 'MessageParameters'
  mode: bigint
  body: Cell | null
  value: bigint
  to: Address
  bounce: boolean
}

export function storeMessageParameters(src: MessageParameters) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.mode, 257)
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body)
    } else {
      b_0.storeBit(false)
    }
    b_0.storeInt(src.value, 257)
    b_0.storeAddress(src.to)
    b_0.storeBit(src.bounce)
  }
}

export function loadMessageParameters(slice: Slice) {
  const sc_0 = slice
  const _mode = sc_0.loadIntBig(257)
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null
  const _value = sc_0.loadIntBig(257)
  const _to = sc_0.loadAddress()
  const _bounce = sc_0.loadBit()
  return {
    $$type: 'MessageParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    to: _to,
    bounce: _bounce,
  }
}

export function loadTupleMessageParameters(source: TupleReader) {
  const _mode = source.readBigNumber()
  const _body = source.readCellOpt()
  const _value = source.readBigNumber()
  const _to = source.readAddress()
  const _bounce = source.readBoolean()
  return {
    $$type: 'MessageParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    to: _to,
    bounce: _bounce,
  }
}

export function loadGetterTupleMessageParameters(source: TupleReader) {
  const _mode = source.readBigNumber()
  const _body = source.readCellOpt()
  const _value = source.readBigNumber()
  const _to = source.readAddress()
  const _bounce = source.readBoolean()
  return {
    $$type: 'MessageParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    to: _to,
    bounce: _bounce,
  }
}

export function storeTupleMessageParameters(source: MessageParameters) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.mode)
  builder.writeCell(source.body)
  builder.writeNumber(source.value)
  builder.writeAddress(source.to)
  builder.writeBoolean(source.bounce)
  return builder.build()
}

export function dictValueParserMessageParameters(): DictionaryValue<MessageParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeMessageParameters(src)).endCell())
    },
    parse: src => {
      return loadMessageParameters(src.loadRef().beginParse())
    },
  }
}

export type DeployParameters = {
  $$type: 'DeployParameters'
  mode: bigint
  body: Cell | null
  value: bigint
  bounce: boolean
  init: StateInit
}

export function storeDeployParameters(src: DeployParameters) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.mode, 257)
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body)
    } else {
      b_0.storeBit(false)
    }
    b_0.storeInt(src.value, 257)
    b_0.storeBit(src.bounce)
    b_0.store(storeStateInit(src.init))
  }
}

export function loadDeployParameters(slice: Slice) {
  const sc_0 = slice
  const _mode = sc_0.loadIntBig(257)
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null
  const _value = sc_0.loadIntBig(257)
  const _bounce = sc_0.loadBit()
  const _init = loadStateInit(sc_0)
  return {
    $$type: 'DeployParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    bounce: _bounce,
    init: _init,
  }
}

export function loadTupleDeployParameters(source: TupleReader) {
  const _mode = source.readBigNumber()
  const _body = source.readCellOpt()
  const _value = source.readBigNumber()
  const _bounce = source.readBoolean()
  const _init = loadTupleStateInit(source)
  return {
    $$type: 'DeployParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    bounce: _bounce,
    init: _init,
  }
}

export function loadGetterTupleDeployParameters(source: TupleReader) {
  const _mode = source.readBigNumber()
  const _body = source.readCellOpt()
  const _value = source.readBigNumber()
  const _bounce = source.readBoolean()
  const _init = loadGetterTupleStateInit(source)
  return {
    $$type: 'DeployParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    bounce: _bounce,
    init: _init,
  }
}

export function storeTupleDeployParameters(source: DeployParameters) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.mode)
  builder.writeCell(source.body)
  builder.writeNumber(source.value)
  builder.writeBoolean(source.bounce)
  builder.writeTuple(storeTupleStateInit(source.init))
  return builder.build()
}

export function dictValueParserDeployParameters(): DictionaryValue<DeployParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployParameters(src)).endCell())
    },
    parse: src => {
      return loadDeployParameters(src.loadRef().beginParse())
    },
  }
}

export type StdAddress = {
  $$type: 'StdAddress'
  workchain: bigint
  address: bigint
}

export function storeStdAddress(src: StdAddress) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.workchain, 8)
    b_0.storeUint(src.address, 256)
  }
}

export function loadStdAddress(slice: Slice) {
  const sc_0 = slice
  const _workchain = sc_0.loadIntBig(8)
  const _address = sc_0.loadUintBig(256)
  return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address }
}

export function loadTupleStdAddress(source: TupleReader) {
  const _workchain = source.readBigNumber()
  const _address = source.readBigNumber()
  return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address }
}

export function loadGetterTupleStdAddress(source: TupleReader) {
  const _workchain = source.readBigNumber()
  const _address = source.readBigNumber()
  return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address }
}

export function storeTupleStdAddress(source: StdAddress) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.workchain)
  builder.writeNumber(source.address)
  return builder.build()
}

export function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStdAddress(src)).endCell())
    },
    parse: src => {
      return loadStdAddress(src.loadRef().beginParse())
    },
  }
}

export type VarAddress = {
  $$type: 'VarAddress'
  workchain: bigint
  address: Slice
}

export function storeVarAddress(src: VarAddress) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.workchain, 32)
    b_0.storeRef(src.address.asCell())
  }
}

export function loadVarAddress(slice: Slice) {
  const sc_0 = slice
  const _workchain = sc_0.loadIntBig(32)
  const _address = sc_0.loadRef().asSlice()
  return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address }
}

export function loadTupleVarAddress(source: TupleReader) {
  const _workchain = source.readBigNumber()
  const _address = source.readCell().asSlice()
  return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address }
}

export function loadGetterTupleVarAddress(source: TupleReader) {
  const _workchain = source.readBigNumber()
  const _address = source.readCell().asSlice()
  return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address }
}

export function storeTupleVarAddress(source: VarAddress) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.workchain)
  builder.writeSlice(source.address.asCell())
  return builder.build()
}

export function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeVarAddress(src)).endCell())
    },
    parse: src => {
      return loadVarAddress(src.loadRef().beginParse())
    },
  }
}

export type BasechainAddress = {
  $$type: 'BasechainAddress'
  hash: bigint | null
}

export function storeBasechainAddress(src: BasechainAddress) {
  return (builder: Builder) => {
    const b_0 = builder
    if (src.hash !== null && src.hash !== undefined) {
      b_0.storeBit(true).storeInt(src.hash, 257)
    } else {
      b_0.storeBit(false)
    }
  }
}

export function loadBasechainAddress(slice: Slice) {
  const sc_0 = slice
  const _hash = sc_0.loadBit() ? sc_0.loadIntBig(257) : null
  return { $$type: 'BasechainAddress' as const, hash: _hash }
}

export function loadTupleBasechainAddress(source: TupleReader) {
  const _hash = source.readBigNumberOpt()
  return { $$type: 'BasechainAddress' as const, hash: _hash }
}

export function loadGetterTupleBasechainAddress(source: TupleReader) {
  const _hash = source.readBigNumberOpt()
  return { $$type: 'BasechainAddress' as const, hash: _hash }
}

export function storeTupleBasechainAddress(source: BasechainAddress) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.hash)
  return builder.build()
}

export function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeBasechainAddress(src)).endCell())
    },
    parse: src => {
      return loadBasechainAddress(src.loadRef().beginParse())
    },
  }
}

export type Excesses = {
  $$type: 'Excesses'
}

export function storeExcesses(_src: Excesses) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(3576854235, 32)
  }
}

export function loadExcesses(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 3576854235) {
    throw Error('Invalid prefix')
  }
  return { $$type: 'Excesses' as const }
}

export function loadTupleExcesses(_source: TupleReader) {
  return { $$type: 'Excesses' as const }
}

export function loadGetterTupleExcesses(_source: TupleReader) {
  return { $$type: 'Excesses' as const }
}

export function storeTupleExcesses(_source: Excesses) {
  const builder = new TupleBuilder()
  return builder.build()
}

export function dictValueParserExcesses(): DictionaryValue<Excesses> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeExcesses(src)).endCell())
    },
    parse: src => {
      return loadExcesses(src.loadRef().beginParse())
    },
  }
}

export type CollectionData = {
  $$type: 'CollectionData'
  next_index: bigint
  content: Cell
  owner: Address
}

export function storeCollectionData(src: CollectionData) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeInt(src.next_index, 257)
    b_0.storeRef(src.content)
    b_0.storeAddress(src.owner)
  }
}

export function loadCollectionData(slice: Slice) {
  const sc_0 = slice
  const _next_index = sc_0.loadIntBig(257)
  const _content = sc_0.loadRef()
  const _owner = sc_0.loadAddress()
  return {
    $$type: 'CollectionData' as const,
    next_index: _next_index,
    content: _content,
    owner: _owner,
  }
}

export function loadTupleCollectionData(source: TupleReader) {
  const _next_index = source.readBigNumber()
  const _content = source.readCell()
  const _owner = source.readAddress()
  return {
    $$type: 'CollectionData' as const,
    next_index: _next_index,
    content: _content,
    owner: _owner,
  }
}

export function loadGetterTupleCollectionData(source: TupleReader) {
  const _next_index = source.readBigNumber()
  const _content = source.readCell()
  const _owner = source.readAddress()
  return {
    $$type: 'CollectionData' as const,
    next_index: _next_index,
    content: _content,
    owner: _owner,
  }
}

export function storeTupleCollectionData(source: CollectionData) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.next_index)
  builder.writeCell(source.content)
  builder.writeAddress(source.owner)
  return builder.build()
}

export function dictValueParserCollectionData(): DictionaryValue<CollectionData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCollectionData(src)).endCell())
    },
    parse: src => {
      return loadCollectionData(src.loadRef().beginParse())
    },
  }
}

export type AddManagerRequest = {
  $$type: 'AddManagerRequest'
  manager: Address
  content: Cell
}

export function storeAddManagerRequest(src: AddManagerRequest) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(11113229, 32)
    b_0.storeAddress(src.manager)
    b_0.storeRef(src.content)
  }
}

export function loadAddManagerRequest(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 11113229) {
    throw Error('Invalid prefix')
  }
  const _manager = sc_0.loadAddress()
  const _content = sc_0.loadRef()
  return { $$type: 'AddManagerRequest' as const, manager: _manager, content: _content }
}

export function loadTupleAddManagerRequest(source: TupleReader) {
  const _manager = source.readAddress()
  const _content = source.readCell()
  return { $$type: 'AddManagerRequest' as const, manager: _manager, content: _content }
}

export function loadGetterTupleAddManagerRequest(source: TupleReader) {
  const _manager = source.readAddress()
  const _content = source.readCell()
  return { $$type: 'AddManagerRequest' as const, manager: _manager, content: _content }
}

export function storeTupleAddManagerRequest(source: AddManagerRequest) {
  const builder = new TupleBuilder()
  builder.writeAddress(source.manager)
  builder.writeCell(source.content)
  return builder.build()
}

export function dictValueParserAddManagerRequest(): DictionaryValue<AddManagerRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeAddManagerRequest(src)).endCell())
    },
    parse: src => {
      return loadAddManagerRequest(src.loadRef().beginParse())
    },
  }
}

export type RemoveManagerRequest = {
  $$type: 'RemoveManagerRequest'
  manager: Address
}

export function storeRemoveManagerRequest(src: RemoveManagerRequest) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(13833075, 32)
    b_0.storeAddress(src.manager)
  }
}

export function loadRemoveManagerRequest(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 13833075) {
    throw Error('Invalid prefix')
  }
  const _manager = sc_0.loadAddress()
  return { $$type: 'RemoveManagerRequest' as const, manager: _manager }
}

export function loadTupleRemoveManagerRequest(source: TupleReader) {
  const _manager = source.readAddress()
  return { $$type: 'RemoveManagerRequest' as const, manager: _manager }
}

export function loadGetterTupleRemoveManagerRequest(source: TupleReader) {
  const _manager = source.readAddress()
  return { $$type: 'RemoveManagerRequest' as const, manager: _manager }
}

export function storeTupleRemoveManagerRequest(source: RemoveManagerRequest) {
  const builder = new TupleBuilder()
  builder.writeAddress(source.manager)
  return builder.build()
}

export function dictValueParserRemoveManagerRequest(): DictionaryValue<RemoveManagerRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeRemoveManagerRequest(src)).endCell())
    },
    parse: src => {
      return loadRemoveManagerRequest(src.loadRef().beginParse())
    },
  }
}

export type Organization$Data = {
  $$type: 'Organization$Data'
  content: Cell
  owner: Address
  next_index: bigint
  manager_next_index: bigint
  wallet_whitelist: Dictionary<Address, Address>
}

export function storeOrganization$Data(src: Organization$Data) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeRef(src.content)
    b_0.storeAddress(src.owner)
    b_0.storeUint(src.next_index, 256)
    b_0.storeUint(src.manager_next_index, 256)
    b_0.storeDict(src.wallet_whitelist, Dictionary.Keys.Address(), Dictionary.Values.Address())
  }
}

export function loadOrganization$Data(slice: Slice) {
  const sc_0 = slice
  const _content = sc_0.loadRef()
  const _owner = sc_0.loadAddress()
  const _next_index = sc_0.loadUintBig(256)
  const _manager_next_index = sc_0.loadUintBig(256)
  const _wallet_whitelist = Dictionary.load(
    Dictionary.Keys.Address(),
    Dictionary.Values.Address(),
    sc_0
  )
  return {
    $$type: 'Organization$Data' as const,
    content: _content,
    owner: _owner,
    next_index: _next_index,
    manager_next_index: _manager_next_index,
    wallet_whitelist: _wallet_whitelist,
  }
}

export function loadTupleOrganization$Data(source: TupleReader) {
  const _content = source.readCell()
  const _owner = source.readAddress()
  const _next_index = source.readBigNumber()
  const _manager_next_index = source.readBigNumber()
  const _wallet_whitelist = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.Address(),
    source.readCellOpt()
  )
  return {
    $$type: 'Organization$Data' as const,
    content: _content,
    owner: _owner,
    next_index: _next_index,
    manager_next_index: _manager_next_index,
    wallet_whitelist: _wallet_whitelist,
  }
}

export function loadGetterTupleOrganization$Data(source: TupleReader) {
  const _content = source.readCell()
  const _owner = source.readAddress()
  const _next_index = source.readBigNumber()
  const _manager_next_index = source.readBigNumber()
  const _wallet_whitelist = Dictionary.loadDirect(
    Dictionary.Keys.Address(),
    Dictionary.Values.Address(),
    source.readCellOpt()
  )
  return {
    $$type: 'Organization$Data' as const,
    content: _content,
    owner: _owner,
    next_index: _next_index,
    manager_next_index: _manager_next_index,
    wallet_whitelist: _wallet_whitelist,
  }
}

export function storeTupleOrganization$Data(source: Organization$Data) {
  const builder = new TupleBuilder()
  builder.writeCell(source.content)
  builder.writeAddress(source.owner)
  builder.writeNumber(source.next_index)
  builder.writeNumber(source.manager_next_index)
  builder.writeCell(
    source.wallet_whitelist.size > 0
      ? beginCell()
          .storeDictDirect(
            source.wallet_whitelist,
            Dictionary.Keys.Address(),
            Dictionary.Values.Address()
          )
          .endCell()
      : null
  )
  return builder.build()
}

export function dictValueParserOrganization$Data(): DictionaryValue<Organization$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeOrganization$Data(src)).endCell())
    },
    parse: src => {
      return loadOrganization$Data(src.loadRef().beginParse())
    },
  }
}

export type Deploy = {
  $$type: 'Deploy'
  queryId: bigint
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(2490013878, 32)
    b_0.storeUint(src.queryId, 64)
  }
}

export function loadDeploy(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error('Invalid prefix')
  }
  const _queryId = sc_0.loadUintBig(64)
  return { $$type: 'Deploy' as const, queryId: _queryId }
}

export function loadTupleDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber()
  return { $$type: 'Deploy' as const, queryId: _queryId }
}

export function loadGetterTupleDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber()
  return { $$type: 'Deploy' as const, queryId: _queryId }
}

export function storeTupleDeploy(source: Deploy) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.queryId)
  return builder.build()
}

export function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell())
    },
    parse: src => {
      return loadDeploy(src.loadRef().beginParse())
    },
  }
}

export type DeployOk = {
  $$type: 'DeployOk'
  queryId: bigint
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(2952335191, 32)
    b_0.storeUint(src.queryId, 64)
  }
}

export function loadDeployOk(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error('Invalid prefix')
  }
  const _queryId = sc_0.loadUintBig(64)
  return { $$type: 'DeployOk' as const, queryId: _queryId }
}

export function loadTupleDeployOk(source: TupleReader) {
  const _queryId = source.readBigNumber()
  return { $$type: 'DeployOk' as const, queryId: _queryId }
}

export function loadGetterTupleDeployOk(source: TupleReader) {
  const _queryId = source.readBigNumber()
  return { $$type: 'DeployOk' as const, queryId: _queryId }
}

export function storeTupleDeployOk(source: DeployOk) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.queryId)
  return builder.build()
}

export function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell())
    },
    parse: src => {
      return loadDeployOk(src.loadRef().beginParse())
    },
  }
}

export type FactoryDeploy = {
  $$type: 'FactoryDeploy'
  queryId: bigint
  cashback: Address
}

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(1829761339, 32)
    b_0.storeUint(src.queryId, 64)
    b_0.storeAddress(src.cashback)
  }
}

export function loadFactoryDeploy(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error('Invalid prefix')
  }
  const _queryId = sc_0.loadUintBig(64)
  const _cashback = sc_0.loadAddress()
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback }
}

export function loadTupleFactoryDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber()
  const _cashback = source.readAddress()
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback }
}

export function loadGetterTupleFactoryDeploy(source: TupleReader) {
  const _queryId = source.readBigNumber()
  const _cashback = source.readAddress()
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback }
}

export function storeTupleFactoryDeploy(source: FactoryDeploy) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.queryId)
  builder.writeAddress(source.cashback)
  return builder.build()
}

export function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell())
    },
    parse: src => {
      return loadFactoryDeploy(src.loadRef().beginParse())
    },
  }
}

export type ChangeOwner = {
  $$type: 'ChangeOwner'
  queryId: bigint
  newOwner: Address
}

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(2174598809, 32)
    b_0.storeUint(src.queryId, 64)
    b_0.storeAddress(src.newOwner)
  }
}

export function loadChangeOwner(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error('Invalid prefix')
  }
  const _queryId = sc_0.loadUintBig(64)
  const _newOwner = sc_0.loadAddress()
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner }
}

export function loadTupleChangeOwner(source: TupleReader) {
  const _queryId = source.readBigNumber()
  const _newOwner = source.readAddress()
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner }
}

export function loadGetterTupleChangeOwner(source: TupleReader) {
  const _queryId = source.readBigNumber()
  const _newOwner = source.readAddress()
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner }
}

export function storeTupleChangeOwner(source: ChangeOwner) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.queryId)
  builder.writeAddress(source.newOwner)
  return builder.build()
}

export function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell())
    },
    parse: src => {
      return loadChangeOwner(src.loadRef().beginParse())
    },
  }
}

export type ChangeOwnerOk = {
  $$type: 'ChangeOwnerOk'
  queryId: bigint
  newOwner: Address
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(846932810, 32)
    b_0.storeUint(src.queryId, 64)
    b_0.storeAddress(src.newOwner)
  }
}

export function loadChangeOwnerOk(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error('Invalid prefix')
  }
  const _queryId = sc_0.loadUintBig(64)
  const _newOwner = sc_0.loadAddress()
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner }
}

export function loadTupleChangeOwnerOk(source: TupleReader) {
  const _queryId = source.readBigNumber()
  const _newOwner = source.readAddress()
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner }
}

export function loadGetterTupleChangeOwnerOk(source: TupleReader) {
  const _queryId = source.readBigNumber()
  const _newOwner = source.readAddress()
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner }
}

export function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.queryId)
  builder.writeAddress(source.newOwner)
  return builder.build()
}

export function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell())
    },
    parse: src => {
      return loadChangeOwnerOk(src.loadRef().beginParse())
    },
  }
}

export type CertificateNFT$Data = {
  $$type: 'CertificateNFT$Data'
  deployed: boolean
  collection: Address
  owner: Address
  index: bigint
  content: Cell
}

export function storeCertificateNFT$Data(src: CertificateNFT$Data) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeBit(src.deployed)
    b_0.storeAddress(src.collection)
    b_0.storeAddress(src.owner)
    b_0.storeInt(src.index, 257)
    b_0.storeRef(src.content)
  }
}

export function loadCertificateNFT$Data(slice: Slice) {
  const sc_0 = slice
  const _deployed = sc_0.loadBit()
  const _collection = sc_0.loadAddress()
  const _owner = sc_0.loadAddress()
  const _index = sc_0.loadIntBig(257)
  const _content = sc_0.loadRef()
  return {
    $$type: 'CertificateNFT$Data' as const,
    deployed: _deployed,
    collection: _collection,
    owner: _owner,
    index: _index,
    content: _content,
  }
}

export function loadTupleCertificateNFT$Data(source: TupleReader) {
  const _deployed = source.readBoolean()
  const _collection = source.readAddress()
  const _owner = source.readAddress()
  const _index = source.readBigNumber()
  const _content = source.readCell()
  return {
    $$type: 'CertificateNFT$Data' as const,
    deployed: _deployed,
    collection: _collection,
    owner: _owner,
    index: _index,
    content: _content,
  }
}

export function loadGetterTupleCertificateNFT$Data(source: TupleReader) {
  const _deployed = source.readBoolean()
  const _collection = source.readAddress()
  const _owner = source.readAddress()
  const _index = source.readBigNumber()
  const _content = source.readCell()
  return {
    $$type: 'CertificateNFT$Data' as const,
    deployed: _deployed,
    collection: _collection,
    owner: _owner,
    index: _index,
    content: _content,
  }
}

export function storeTupleCertificateNFT$Data(source: CertificateNFT$Data) {
  const builder = new TupleBuilder()
  builder.writeBoolean(source.deployed)
  builder.writeAddress(source.collection)
  builder.writeAddress(source.owner)
  builder.writeNumber(source.index)
  builder.writeCell(source.content)
  return builder.build()
}

export function dictValueParserCertificateNFT$Data(): DictionaryValue<CertificateNFT$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCertificateNFT$Data(src)).endCell())
    },
    parse: src => {
      return loadCertificateNFT$Data(src.loadRef().beginParse())
    },
  }
}

export type ManagerNFT$Data = {
  $$type: 'ManagerNFT$Data'
  deployed: boolean
  collection: Address
  owner: Address
  index: bigint
  content: Cell
}

export function storeManagerNFT$Data(src: ManagerNFT$Data) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeBit(src.deployed)
    b_0.storeAddress(src.collection)
    b_0.storeAddress(src.owner)
    b_0.storeInt(src.index, 257)
    b_0.storeRef(src.content)
  }
}

export function loadManagerNFT$Data(slice: Slice) {
  const sc_0 = slice
  const _deployed = sc_0.loadBit()
  const _collection = sc_0.loadAddress()
  const _owner = sc_0.loadAddress()
  const _index = sc_0.loadIntBig(257)
  const _content = sc_0.loadRef()
  return {
    $$type: 'ManagerNFT$Data' as const,
    deployed: _deployed,
    collection: _collection,
    owner: _owner,
    index: _index,
    content: _content,
  }
}

export function loadTupleManagerNFT$Data(source: TupleReader) {
  const _deployed = source.readBoolean()
  const _collection = source.readAddress()
  const _owner = source.readAddress()
  const _index = source.readBigNumber()
  const _content = source.readCell()
  return {
    $$type: 'ManagerNFT$Data' as const,
    deployed: _deployed,
    collection: _collection,
    owner: _owner,
    index: _index,
    content: _content,
  }
}

export function loadGetterTupleManagerNFT$Data(source: TupleReader) {
  const _deployed = source.readBoolean()
  const _collection = source.readAddress()
  const _owner = source.readAddress()
  const _index = source.readBigNumber()
  const _content = source.readCell()
  return {
    $$type: 'ManagerNFT$Data' as const,
    deployed: _deployed,
    collection: _collection,
    owner: _owner,
    index: _index,
    content: _content,
  }
}

export function storeTupleManagerNFT$Data(source: ManagerNFT$Data) {
  const builder = new TupleBuilder()
  builder.writeBoolean(source.deployed)
  builder.writeAddress(source.collection)
  builder.writeAddress(source.owner)
  builder.writeNumber(source.index)
  builder.writeCell(source.content)
  return builder.build()
}

export function dictValueParserManagerNFT$Data(): DictionaryValue<ManagerNFT$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeManagerNFT$Data(src)).endCell())
    },
    parse: src => {
      return loadManagerNFT$Data(src.loadRef().beginParse())
    },
  }
}

export type NftTransfer = {
  $$type: 'NftTransfer'
  query_id: bigint
  new_owner: Address
  response_destination: Address
  custom_payload: Cell | null
  forward_amount: bigint
  forward_payload: Slice
}

export function storeNftTransfer(src: NftTransfer) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(1607220500, 32)
    b_0.storeUint(src.query_id, 64)
    b_0.storeAddress(src.new_owner)
    b_0.storeAddress(src.response_destination)
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload)
    } else {
      b_0.storeBit(false)
    }
    b_0.storeCoins(src.forward_amount)
    b_0.storeBuilder(src.forward_payload.asBuilder())
  }
}

export function loadNftTransfer(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 1607220500) {
    throw Error('Invalid prefix')
  }
  const _query_id = sc_0.loadUintBig(64)
  const _new_owner = sc_0.loadAddress()
  const _response_destination = sc_0.loadAddress()
  const _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null
  const _forward_amount = sc_0.loadCoins()
  const _forward_payload = sc_0
  return {
    $$type: 'NftTransfer' as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_amount: _forward_amount,
    forward_payload: _forward_payload,
  }
}

export function loadTupleNftTransfer(source: TupleReader) {
  const _query_id = source.readBigNumber()
  const _new_owner = source.readAddress()
  const _response_destination = source.readAddress()
  const _custom_payload = source.readCellOpt()
  const _forward_amount = source.readBigNumber()
  const _forward_payload = source.readCell().asSlice()
  return {
    $$type: 'NftTransfer' as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_amount: _forward_amount,
    forward_payload: _forward_payload,
  }
}

export function loadGetterTupleNftTransfer(source: TupleReader) {
  const _query_id = source.readBigNumber()
  const _new_owner = source.readAddress()
  const _response_destination = source.readAddress()
  const _custom_payload = source.readCellOpt()
  const _forward_amount = source.readBigNumber()
  const _forward_payload = source.readCell().asSlice()
  return {
    $$type: 'NftTransfer' as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_amount: _forward_amount,
    forward_payload: _forward_payload,
  }
}

export function storeTupleNftTransfer(source: NftTransfer) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.query_id)
  builder.writeAddress(source.new_owner)
  builder.writeAddress(source.response_destination)
  builder.writeCell(source.custom_payload)
  builder.writeNumber(source.forward_amount)
  builder.writeSlice(source.forward_payload.asCell())
  return builder.build()
}

export function dictValueParserNftTransfer(): DictionaryValue<NftTransfer> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftTransfer(src)).endCell())
    },
    parse: src => {
      return loadNftTransfer(src.loadRef().beginParse())
    },
  }
}

export type NftOwnershipAssigned = {
  $$type: 'NftOwnershipAssigned'
  query_id: bigint
  prev_owner: Address
  forward_payload: Slice
}

export function storeNftOwnershipAssigned(src: NftOwnershipAssigned) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(85167505, 32)
    b_0.storeUint(src.query_id, 64)
    b_0.storeAddress(src.prev_owner)
    b_0.storeBuilder(src.forward_payload.asBuilder())
  }
}

export function loadNftOwnershipAssigned(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 85167505) {
    throw Error('Invalid prefix')
  }
  const _query_id = sc_0.loadUintBig(64)
  const _prev_owner = sc_0.loadAddress()
  const _forward_payload = sc_0
  return {
    $$type: 'NftOwnershipAssigned' as const,
    query_id: _query_id,
    prev_owner: _prev_owner,
    forward_payload: _forward_payload,
  }
}

export function loadTupleNftOwnershipAssigned(source: TupleReader) {
  const _query_id = source.readBigNumber()
  const _prev_owner = source.readAddress()
  const _forward_payload = source.readCell().asSlice()
  return {
    $$type: 'NftOwnershipAssigned' as const,
    query_id: _query_id,
    prev_owner: _prev_owner,
    forward_payload: _forward_payload,
  }
}

export function loadGetterTupleNftOwnershipAssigned(source: TupleReader) {
  const _query_id = source.readBigNumber()
  const _prev_owner = source.readAddress()
  const _forward_payload = source.readCell().asSlice()
  return {
    $$type: 'NftOwnershipAssigned' as const,
    query_id: _query_id,
    prev_owner: _prev_owner,
    forward_payload: _forward_payload,
  }
}

export function storeTupleNftOwnershipAssigned(source: NftOwnershipAssigned) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.query_id)
  builder.writeAddress(source.prev_owner)
  builder.writeSlice(source.forward_payload.asCell())
  return builder.build()
}

export function dictValueParserNftOwnershipAssigned(): DictionaryValue<NftOwnershipAssigned> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftOwnershipAssigned(src)).endCell())
    },
    parse: src => {
      return loadNftOwnershipAssigned(src.loadRef().beginParse())
    },
  }
}

export type NftExcesses = {
  $$type: 'NftExcesses'
  query_id: bigint
}

export function storeNftExcesses(src: NftExcesses) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(1871312355, 32)
    b_0.storeUint(src.query_id, 64)
  }
}

export function loadNftExcesses(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 1871312355) {
    throw Error('Invalid prefix')
  }
  const _query_id = sc_0.loadUintBig(64)
  return { $$type: 'NftExcesses' as const, query_id: _query_id }
}

export function loadTupleNftExcesses(source: TupleReader) {
  const _query_id = source.readBigNumber()
  return { $$type: 'NftExcesses' as const, query_id: _query_id }
}

export function loadGetterTupleNftExcesses(source: TupleReader) {
  const _query_id = source.readBigNumber()
  return { $$type: 'NftExcesses' as const, query_id: _query_id }
}

export function storeTupleNftExcesses(source: NftExcesses) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.query_id)
  return builder.build()
}

export function dictValueParserNftExcesses(): DictionaryValue<NftExcesses> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftExcesses(src)).endCell())
    },
    parse: src => {
      return loadNftExcesses(src.loadRef().beginParse())
    },
  }
}

export type NftGetStaticData = {
  $$type: 'NftGetStaticData'
  query_id: bigint
}

export function storeNftGetStaticData(src: NftGetStaticData) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(801842850, 32)
    b_0.storeUint(src.query_id, 64)
  }
}

export function loadNftGetStaticData(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 801842850) {
    throw Error('Invalid prefix')
  }
  const _query_id = sc_0.loadUintBig(64)
  return { $$type: 'NftGetStaticData' as const, query_id: _query_id }
}

export function loadTupleNftGetStaticData(source: TupleReader) {
  const _query_id = source.readBigNumber()
  return { $$type: 'NftGetStaticData' as const, query_id: _query_id }
}

export function loadGetterTupleNftGetStaticData(source: TupleReader) {
  const _query_id = source.readBigNumber()
  return { $$type: 'NftGetStaticData' as const, query_id: _query_id }
}

export function storeTupleNftGetStaticData(source: NftGetStaticData) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.query_id)
  return builder.build()
}

export function dictValueParserNftGetStaticData(): DictionaryValue<NftGetStaticData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftGetStaticData(src)).endCell())
    },
    parse: src => {
      return loadNftGetStaticData(src.loadRef().beginParse())
    },
  }
}

export type NftReportStaticData = {
  $$type: 'NftReportStaticData'
  query_id: bigint
  index: bigint
  collection: Address
}

export function storeNftReportStaticData(src: NftReportStaticData) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(2339837749, 32)
    b_0.storeUint(src.query_id, 64)
    b_0.storeUint(src.index, 256)
    b_0.storeAddress(src.collection)
  }
}

export function loadNftReportStaticData(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 2339837749) {
    throw Error('Invalid prefix')
  }
  const _query_id = sc_0.loadUintBig(64)
  const _index = sc_0.loadUintBig(256)
  const _collection = sc_0.loadAddress()
  return {
    $$type: 'NftReportStaticData' as const,
    query_id: _query_id,
    index: _index,
    collection: _collection,
  }
}

export function loadTupleNftReportStaticData(source: TupleReader) {
  const _query_id = source.readBigNumber()
  const _index = source.readBigNumber()
  const _collection = source.readAddress()
  return {
    $$type: 'NftReportStaticData' as const,
    query_id: _query_id,
    index: _index,
    collection: _collection,
  }
}

export function loadGetterTupleNftReportStaticData(source: TupleReader) {
  const _query_id = source.readBigNumber()
  const _index = source.readBigNumber()
  const _collection = source.readAddress()
  return {
    $$type: 'NftReportStaticData' as const,
    query_id: _query_id,
    index: _index,
    collection: _collection,
  }
}

export function storeTupleNftReportStaticData(source: NftReportStaticData) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.query_id)
  builder.writeNumber(source.index)
  builder.writeAddress(source.collection)
  return builder.build()
}

export function dictValueParserNftReportStaticData(): DictionaryValue<NftReportStaticData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftReportStaticData(src)).endCell())
    },
    parse: src => {
      return loadNftReportStaticData(src.loadRef().beginParse())
    },
  }
}

export type NftDestroy = {
  $$type: 'NftDestroy'
}

export function storeNftDestroy(_src: NftDestroy) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(520377210, 32)
  }
}

export function loadNftDestroy(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 520377210) {
    throw Error('Invalid prefix')
  }
  return { $$type: 'NftDestroy' as const }
}

export function loadTupleNftDestroy(_source: TupleReader) {
  return { $$type: 'NftDestroy' as const }
}

export function loadGetterTupleNftDestroy(_source: TupleReader) {
  return { $$type: 'NftDestroy' as const }
}

export function storeTupleNftDestroy(_source: NftDestroy) {
  const builder = new TupleBuilder()
  return builder.build()
}

export function dictValueParserNftDestroy(): DictionaryValue<NftDestroy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftDestroy(src)).endCell())
    },
    parse: src => {
      return loadNftDestroy(src.loadRef().beginParse())
    },
  }
}

export type NftDeploy = {
  $$type: 'NftDeploy'
  index: bigint
  owner: Address
  content: Cell
}

export function storeNftDeploy(src: NftDeploy) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(3082862875, 32)
    b_0.storeUint(src.index, 256)
    b_0.storeAddress(src.owner)
    b_0.storeRef(src.content)
  }
}

export function loadNftDeploy(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 3082862875) {
    throw Error('Invalid prefix')
  }
  const _index = sc_0.loadUintBig(256)
  const _owner = sc_0.loadAddress()
  const _content = sc_0.loadRef()
  return { $$type: 'NftDeploy' as const, index: _index, owner: _owner, content: _content }
}

export function loadTupleNftDeploy(source: TupleReader) {
  const _index = source.readBigNumber()
  const _owner = source.readAddress()
  const _content = source.readCell()
  return { $$type: 'NftDeploy' as const, index: _index, owner: _owner, content: _content }
}

export function loadGetterTupleNftDeploy(source: TupleReader) {
  const _index = source.readBigNumber()
  const _owner = source.readAddress()
  const _content = source.readCell()
  return { $$type: 'NftDeploy' as const, index: _index, owner: _owner, content: _content }
}

export function storeTupleNftDeploy(source: NftDeploy) {
  const builder = new TupleBuilder()
  builder.writeNumber(source.index)
  builder.writeAddress(source.owner)
  builder.writeCell(source.content)
  return builder.build()
}

export function dictValueParserNftDeploy(): DictionaryValue<NftDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftDeploy(src)).endCell())
    },
    parse: src => {
      return loadNftDeploy(src.loadRef().beginParse())
    },
  }
}

export type RequestNftDeploy = {
  $$type: 'RequestNftDeploy'
  owner: Address
  content: Cell
}

export function storeRequestNftDeploy(src: RequestNftDeploy) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(3200183706, 32)
    b_0.storeAddress(src.owner)
    b_0.storeRef(src.content)
  }
}

export function loadRequestNftDeploy(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 3200183706) {
    throw Error('Invalid prefix')
  }
  const _owner = sc_0.loadAddress()
  const _content = sc_0.loadRef()
  return { $$type: 'RequestNftDeploy' as const, owner: _owner, content: _content }
}

export function loadTupleRequestNftDeploy(source: TupleReader) {
  const _owner = source.readAddress()
  const _content = source.readCell()
  return { $$type: 'RequestNftDeploy' as const, owner: _owner, content: _content }
}

export function loadGetterTupleRequestNftDeploy(source: TupleReader) {
  const _owner = source.readAddress()
  const _content = source.readCell()
  return { $$type: 'RequestNftDeploy' as const, owner: _owner, content: _content }
}

export function storeTupleRequestNftDeploy(source: RequestNftDeploy) {
  const builder = new TupleBuilder()
  builder.writeAddress(source.owner)
  builder.writeCell(source.content)
  return builder.build()
}

export function dictValueParserRequestNftDeploy(): DictionaryValue<RequestNftDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeRequestNftDeploy(src)).endCell())
    },
    parse: src => {
      return loadRequestNftDeploy(src.loadRef().beginParse())
    },
  }
}

export type NftData = {
  $$type: 'NftData'
  deployed: boolean
  index: bigint
  collection: Address
  owner: Address
  content: Cell
}

export function storeNftData(src: NftData) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeBit(src.deployed)
    b_0.storeInt(src.index, 257)
    b_0.storeAddress(src.collection)
    b_0.storeAddress(src.owner)
    b_0.storeRef(src.content)
  }
}

export function loadNftData(slice: Slice) {
  const sc_0 = slice
  const _deployed = sc_0.loadBit()
  const _index = sc_0.loadIntBig(257)
  const _collection = sc_0.loadAddress()
  const _owner = sc_0.loadAddress()
  const _content = sc_0.loadRef()
  return {
    $$type: 'NftData' as const,
    deployed: _deployed,
    index: _index,
    collection: _collection,
    owner: _owner,
    content: _content,
  }
}

export function loadTupleNftData(source: TupleReader) {
  const _deployed = source.readBoolean()
  const _index = source.readBigNumber()
  const _collection = source.readAddress()
  const _owner = source.readAddress()
  const _content = source.readCell()
  return {
    $$type: 'NftData' as const,
    deployed: _deployed,
    index: _index,
    collection: _collection,
    owner: _owner,
    content: _content,
  }
}

export function loadGetterTupleNftData(source: TupleReader) {
  const _deployed = source.readBoolean()
  const _index = source.readBigNumber()
  const _collection = source.readAddress()
  const _owner = source.readAddress()
  const _content = source.readCell()
  return {
    $$type: 'NftData' as const,
    deployed: _deployed,
    index: _index,
    collection: _collection,
    owner: _owner,
    content: _content,
  }
}

export function storeTupleNftData(source: NftData) {
  const builder = new TupleBuilder()
  builder.writeBoolean(source.deployed)
  builder.writeNumber(source.index)
  builder.writeAddress(source.collection)
  builder.writeAddress(source.owner)
  builder.writeCell(source.content)
  return builder.build()
}

export function dictValueParserNftData(): DictionaryValue<NftData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNftData(src)).endCell())
    },
    parse: src => {
      return loadNftData(src.loadRef().beginParse())
    },
  }
}

export type OrgInitRequest = {
  $$type: 'OrgInitRequest'
  content: Cell
  wallet: Address
}

export function storeOrgInitRequest(src: OrgInitRequest) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(712191329, 32)
    b_0.storeRef(src.content)
    b_0.storeAddress(src.wallet)
  }
}

export function loadOrgInitRequest(slice: Slice) {
  const sc_0 = slice
  if (sc_0.loadUint(32) !== 712191329) {
    throw Error('Invalid prefix')
  }
  const _content = sc_0.loadRef()
  const _wallet = sc_0.loadAddress()
  return { $$type: 'OrgInitRequest' as const, content: _content, wallet: _wallet }
}

export function loadTupleOrgInitRequest(source: TupleReader) {
  const _content = source.readCell()
  const _wallet = source.readAddress()
  return { $$type: 'OrgInitRequest' as const, content: _content, wallet: _wallet }
}

export function loadGetterTupleOrgInitRequest(source: TupleReader) {
  const _content = source.readCell()
  const _wallet = source.readAddress()
  return { $$type: 'OrgInitRequest' as const, content: _content, wallet: _wallet }
}

export function storeTupleOrgInitRequest(source: OrgInitRequest) {
  const builder = new TupleBuilder()
  builder.writeCell(source.content)
  builder.writeAddress(source.wallet)
  return builder.build()
}

export function dictValueParserOrgInitRequest(): DictionaryValue<OrgInitRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeOrgInitRequest(src)).endCell())
    },
    parse: src => {
      return loadOrgInitRequest(src.loadRef().beginParse())
    },
  }
}

export type OrganizationFactory$Data = {
  $$type: 'OrganizationFactory$Data'
}

export function storeOrganizationFactory$Data(_src: OrganizationFactory$Data) {
  return (_builder: Builder) => {}
}

export function loadOrganizationFactory$Data(_slice: Slice) {
  return { $$type: 'OrganizationFactory$Data' as const }
}

export function loadTupleOrganizationFactory$Data(_source: TupleReader) {
  return { $$type: 'OrganizationFactory$Data' as const }
}

export function loadGetterTupleOrganizationFactory$Data(_source: TupleReader) {
  return { $$type: 'OrganizationFactory$Data' as const }
}

export function storeTupleOrganizationFactory$Data(_source: OrganizationFactory$Data) {
  const builder = new TupleBuilder()
  return builder.build()
}

export function dictValueParserOrganizationFactory$Data(): DictionaryValue<OrganizationFactory$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeOrganizationFactory$Data(src)).endCell())
    },
    parse: src => {
      return loadOrganizationFactory$Data(src.loadRef().beginParse())
    },
  }
}

type OrganizationFactory_init_args = {
  $$type: 'OrganizationFactory_init_args'
}

function initOrganizationFactory_init_args(_src: OrganizationFactory_init_args) {
  return (_builder: Builder) => {}
}

async function OrganizationFactory_init() {
  const __code = Cell.fromHex(
    'b5ee9c7241021f010007090001e0ff00208ee73001d072d721d200d200fa4021103450666f04f86102f862ed44d0d20030916d916de202915be07021d74920c21f953101d31f02de2182102a732d61bae30232c00001c121b08e1af8428010c8cb05ce70cf0b6ec98042fb0030c87f01ca00c9ed54e030f2c082e1f2c80b0102f05bd4fa40593031f8416f24135f03820afaf080bef2e2bcf84288c87001ca005a02cc01cf16c9820afaf080706d50437f595f41f90001f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f9040003c8cf8580ca0012cccccf884008cbff01fa028069cf40cf8634f400c901fb00f8427080426f00021e022cff008e88f4a413f4bcf2c80bed53208e8130e1ed43d9030e020271040c02012005070151b8b5ded44d0d200019dd4fa40d3ffd3fff40455406c159ad4fa405902d10170206de25514db3c6c51806000231020120080a014db4a3bda89a1a400033ba9f481a7ffa7ffe808aa80d82b35a9f480b205a202e040dbc5b678d8a30090002230151b4f47da89a1a400033ba9f481a7ffa7ffe808aa80d82b35a9f480b205a202e040dbc4aa09b678d8a300b0180f8280188c87001ca005a59cf16810101cf00c9705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d014014dbc82df6a268690000ceea7d2069ffe9fffa022aa0360acd6a7d202c816880b81036f16d9e3629c0d000654724304dc01d072d721d200d200fa4021103450666f04f86102f862ed44d0d200019dd4fa40d3ffd3fff40455406c159ad4fa405902d10170206de206925f06e07025d74920c21f953105d31f06de218208a9930dbae302218208d31373bae302218210bebeed9abae30236c00005c12115b00f11131d02f25b04fa40d45932f8416f24135f03820afaf080bef2e2bcf8425240c705f2e1912681010b2259f40a6fa131f2e199f8282688c87001ca005a59cf16810101cf00c95c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0820afaf0807153a57009141001e4c855208210b7c0c11b5004cb1f12cbff01cf16ccc923061035102410384800104645155043c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0005a4102681010b5062206e953059f4593098c801cf164133f441e244301201e25b04fa400131f8416f24135f03820afaf080bef2e2bcf8425230c705f2e1912581010b2259f40a6fa192306ddf206eb3f2e194206ef2d080820afaf080716f00c8013082101f04537a01cb1fc940037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00500581010bf45930443012002cc87f01ca0055405045cc58cf16cbffcbfff400c9ed5402f85b04fa40d45932f8416f24135f03820afaf080bef2e2bc81010bf842285959f40a6fa131917f96f8425240c705e2f2e191f8282388c87001ca005a59cf16810101cf00c95c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0820afaf0807170544878141c0228ff008e88f4a413f4bcf2c80bed5320e303ed43d915170267a663f3fb5134348000638434803e903e9020404075c03515501b0563a47e9020404075c01640b4405c08a2105004f8b6cf1b15601816000a547413535302f83001d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e10d200fa40fa40810101d700d455406c158e91fa40810101d7005902d101702288414013e206925f06e004d70d1ff2e0822182105fcc3d14ba8e205bf2c3eb4034c87f01ca0055405045ca0058cf1601cf16810101cf00ccc9ed54e0211819000002fe82102fcb26a2ba8e5b31d33f0131f842708040543375c8552082108b7717355004cb1f12cb3fcbff01cf16c9413040037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb004034c87f01ca0055405045ca0058cf1601cf16810101cf00ccc9ed54e032208210b7c0c11bbae3023182101f04537abae3025f04f2c0821a1b007e303403d3fffa40d4552033f8425260c705f2e1915242ba9202b3923270e2f2e1907f045033c87f01ca0055405045ca0058cf1601cf16810101cf00ccc9ed54004ef8425210c705f2e191f8284034c87f01ca0055405045ca0058cf1601cf16810101cf00ccc9ed5400d2c855208210b7c0c11b5004cb1f12cbff01cf16ccc94650443012104645155043c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb00a44034c87f01ca0055405045cc58cf16cbffcbfff400c9ed5400408e184034c87f01ca0055405045cc58cf16cbffcbfff400c9ed54e05f05f2c0820060c801308210d53276db01cb1fc940037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0030c87f01ca00c9ed5473f0b6e2'
  )
  const builder = beginCell()
  builder.storeUint(0, 1)
  initOrganizationFactory_init_args({ $$type: 'OrganizationFactory_init_args' })(builder)
  const __data = builder.endCell()
  return { code: __code, data: __data }
}

export const OrganizationFactory_errors = {
  2: { message: 'Stack underflow' },
  3: { message: 'Stack overflow' },
  4: { message: 'Integer overflow' },
  5: { message: 'Integer out of expected range' },
  6: { message: 'Invalid opcode' },
  7: { message: 'Type check error' },
  8: { message: 'Cell overflow' },
  9: { message: 'Cell underflow' },
  10: { message: 'Dictionary error' },
  11: { message: "'Unknown' error" },
  12: { message: 'Fatal error' },
  13: { message: 'Out of gas error' },
  14: { message: 'Virtualization error' },
  32: { message: 'Action list is invalid' },
  33: { message: 'Action list is too long' },
  34: { message: 'Action is invalid or not supported' },
  35: { message: 'Invalid source address in outbound message' },
  36: { message: 'Invalid destination address in outbound message' },
  37: { message: 'Not enough Toncoin' },
  38: { message: 'Not enough extra currencies' },
  39: { message: 'Outbound message does not fit into a cell after rewriting' },
  40: { message: 'Cannot process a message' },
  41: { message: 'Library reference is null' },
  42: { message: 'Library change action error' },
  43: {
    message:
      'Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree',
  },
  50: { message: 'Account state size exceeded limits' },
  128: { message: 'Null reference exception' },
  129: { message: 'Invalid serialization prefix' },
  130: { message: 'Invalid incoming message' },
  131: { message: 'Constraints error' },
  132: { message: 'Access denied' },
  133: { message: 'Contract stopped' },
  134: { message: 'Invalid argument' },
  135: { message: 'Code of a contract was not found' },
  136: { message: 'Invalid standard address' },
  138: { message: 'Not a basechain address' },
} as const

export const OrganizationFactory_errors_backward = {
  'Stack underflow': 2,
  'Stack overflow': 3,
  'Integer overflow': 4,
  'Integer out of expected range': 5,
  'Invalid opcode': 6,
  'Type check error': 7,
  'Cell overflow': 8,
  'Cell underflow': 9,
  'Dictionary error': 10,
  "'Unknown' error": 11,
  'Fatal error': 12,
  'Out of gas error': 13,
  'Virtualization error': 14,
  'Action list is invalid': 32,
  'Action list is too long': 33,
  'Action is invalid or not supported': 34,
  'Invalid source address in outbound message': 35,
  'Invalid destination address in outbound message': 36,
  'Not enough Toncoin': 37,
  'Not enough extra currencies': 38,
  'Outbound message does not fit into a cell after rewriting': 39,
  'Cannot process a message': 40,
  'Library reference is null': 41,
  'Library change action error': 42,
  'Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree': 43,
  'Account state size exceeded limits': 50,
  'Null reference exception': 128,
  'Invalid serialization prefix': 129,
  'Invalid incoming message': 130,
  'Constraints error': 131,
  'Access denied': 132,
  'Contract stopped': 133,
  'Invalid argument': 134,
  'Code of a contract was not found': 135,
  'Invalid standard address': 136,
  'Not a basechain address': 138,
} as const

const OrganizationFactory_types: ABIType[] = [
  {
    name: 'DataSize',
    header: null,
    fields: [
      { name: 'cells', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'bits', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'refs', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
    ],
  },
  {
    name: 'SignedBundle',
    header: null,
    fields: [
      {
        name: 'signature',
        type: { kind: 'simple', type: 'fixed-bytes', optional: false, format: 64 },
      },
      {
        name: 'signedData',
        type: { kind: 'simple', type: 'slice', optional: false, format: 'remainder' },
      },
    ],
  },
  {
    name: 'StateInit',
    header: null,
    fields: [
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'Context',
    header: null,
    fields: [
      { name: 'bounceable', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'sender', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'raw', type: { kind: 'simple', type: 'slice', optional: false } },
    ],
  },
  {
    name: 'SendParameters',
    header: null,
    fields: [
      { name: 'mode', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'to', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'bounce', type: { kind: 'simple', type: 'bool', optional: false } },
    ],
  },
  {
    name: 'MessageParameters',
    header: null,
    fields: [
      { name: 'mode', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'to', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'bounce', type: { kind: 'simple', type: 'bool', optional: false } },
    ],
  },
  {
    name: 'DeployParameters',
    header: null,
    fields: [
      { name: 'mode', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'bounce', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'init', type: { kind: 'simple', type: 'StateInit', optional: false } },
    ],
  },
  {
    name: 'StdAddress',
    header: null,
    fields: [
      { name: 'workchain', type: { kind: 'simple', type: 'int', optional: false, format: 8 } },
      { name: 'address', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
    ],
  },
  {
    name: 'VarAddress',
    header: null,
    fields: [
      { name: 'workchain', type: { kind: 'simple', type: 'int', optional: false, format: 32 } },
      { name: 'address', type: { kind: 'simple', type: 'slice', optional: false } },
    ],
  },
  {
    name: 'BasechainAddress',
    header: null,
    fields: [{ name: 'hash', type: { kind: 'simple', type: 'int', optional: true, format: 257 } }],
  },
  { name: 'Excesses', header: 3576854235, fields: [] },
  {
    name: 'CollectionData',
    header: null,
    fields: [
      { name: 'next_index', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'AddManagerRequest',
    header: 11113229,
    fields: [
      { name: 'manager', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'RemoveManagerRequest',
    header: 13833075,
    fields: [{ name: 'manager', type: { kind: 'simple', type: 'address', optional: false } }],
  },
  {
    name: 'Organization$Data',
    header: null,
    fields: [
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'next_index', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
      {
        name: 'manager_next_index',
        type: { kind: 'simple', type: 'uint', optional: false, format: 256 },
      },
      { name: 'wallet_whitelist', type: { kind: 'dict', key: 'address', value: 'address' } },
    ],
  },
  {
    name: 'Deploy',
    header: 2490013878,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
    ],
  },
  {
    name: 'DeployOk',
    header: 2952335191,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
    ],
  },
  {
    name: 'FactoryDeploy',
    header: 1829761339,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'cashback', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'ChangeOwner',
    header: 2174598809,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'newOwner', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'ChangeOwnerOk',
    header: 846932810,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'newOwner', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'CertificateNFT$Data',
    header: null,
    fields: [
      { name: 'deployed', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'collection', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'index', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'ManagerNFT$Data',
    header: null,
    fields: [
      { name: 'deployed', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'collection', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'index', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'NftTransfer',
    header: 1607220500,
    fields: [
      { name: 'query_id', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'new_owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'response_destination', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'custom_payload', type: { kind: 'simple', type: 'cell', optional: true } },
      {
        name: 'forward_amount',
        type: { kind: 'simple', type: 'uint', optional: false, format: 'coins' },
      },
      {
        name: 'forward_payload',
        type: { kind: 'simple', type: 'slice', optional: false, format: 'remainder' },
      },
    ],
  },
  {
    name: 'NftOwnershipAssigned',
    header: 85167505,
    fields: [
      { name: 'query_id', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'prev_owner', type: { kind: 'simple', type: 'address', optional: false } },
      {
        name: 'forward_payload',
        type: { kind: 'simple', type: 'slice', optional: false, format: 'remainder' },
      },
    ],
  },
  {
    name: 'NftExcesses',
    header: 1871312355,
    fields: [
      { name: 'query_id', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
    ],
  },
  {
    name: 'NftGetStaticData',
    header: 801842850,
    fields: [
      { name: 'query_id', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
    ],
  },
  {
    name: 'NftReportStaticData',
    header: 2339837749,
    fields: [
      { name: 'query_id', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'index', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
      { name: 'collection', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  { name: 'NftDestroy', header: 520377210, fields: [] },
  {
    name: 'NftDeploy',
    header: 3082862875,
    fields: [
      { name: 'index', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'RequestNftDeploy',
    header: 3200183706,
    fields: [
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'NftData',
    header: null,
    fields: [
      { name: 'deployed', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'index', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'collection', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'OrgInitRequest',
    header: 712191329,
    fields: [
      { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'wallet', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  { name: 'OrganizationFactory$Data', header: null, fields: [] },
]

const OrganizationFactory_opcodes = {
  Excesses: 3576854235,
  AddManagerRequest: 11113229,
  RemoveManagerRequest: 13833075,
  Deploy: 2490013878,
  DeployOk: 2952335191,
  FactoryDeploy: 1829761339,
  ChangeOwner: 2174598809,
  ChangeOwnerOk: 846932810,
  NftTransfer: 1607220500,
  NftOwnershipAssigned: 85167505,
  NftExcesses: 1871312355,
  NftGetStaticData: 801842850,
  NftReportStaticData: 2339837749,
  NftDestroy: 520377210,
  NftDeploy: 3082862875,
  RequestNftDeploy: 3200183706,
  OrgInitRequest: 712191329,
}

const OrganizationFactory_getters: ABIGetter[] = []

export const OrganizationFactory_getterMapping: { [key: string]: string } = {}

const OrganizationFactory_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'typed', type: 'OrgInitRequest' } },
  { receiver: 'internal', message: { kind: 'empty' } },
]

export const BAD_REQUEST = 400n
export const NON_AUTHORIZED = 401n
export const NOT_FOUND = 404n
export const CONFLICT = 409n
export const TOO_FEW_COINS = 700n
export const NOT_DEPLOYED = 1000n
export const INVALID_OWNER = 1001n
export const INVALID_AMOUNT = 1002n
export const TRANSFER_DISABLED = 1003n
export const DEPLOY_COINS = 50000000n
export const MIN_COINS = 50000000n
export const GAS_CONSUMPTION = 20000000n

export class OrganizationFactory implements Contract {
  public static readonly storageReserve = 0n
  public static readonly errors = OrganizationFactory_errors_backward
  public static readonly opcodes = OrganizationFactory_opcodes

  static async init() {
    return await OrganizationFactory_init()
  }

  static async fromInit() {
    const __gen_init = await OrganizationFactory_init()
    const address = contractAddress(0, __gen_init)
    return new OrganizationFactory(address, __gen_init)
  }

  static fromAddress(address: Address) {
    return new OrganizationFactory(address)
  }

  readonly address: Address
  readonly init?: { code: Cell; data: Cell }
  readonly abi: ContractABI = {
    types: OrganizationFactory_types,
    getters: OrganizationFactory_getters,
    receivers: OrganizationFactory_receivers,
    errors: OrganizationFactory_errors,
  }

  constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address
    this.init = init
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: OrgInitRequest | null
  ) {
    let body: Cell | null = null
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'OrgInitRequest'
    ) {
      body = beginCell().store(storeOrgInitRequest(message)).endCell()
    }
    if (message === null) {
      body = new Cell()
    }
    if (body === null) {
      throw new Error('Invalid message type')
    }

    await provider.internal(via, { ...args, body: body })
  }
}
