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
  Sender,
  Slice,
} from '@ton/core'

export type CreateUserRequest = {
  $$type: 'CreateUserRequest'
  wallet: Address
  publicKey: bigint
}

export function storeCreateUserRequest(src: CreateUserRequest) {
  return (builder: Builder) => {
    const b_0 = builder
    b_0.storeUint(3663894300, 32)
    b_0.storeAddress(src.wallet)
    b_0.storeUint(src.publicKey, 256)
  }
}

export type UserFactory$Data = {
  $$type: 'UserFactory$Data'
}

async function UserFactory_init() {
  const __code = Cell.fromHex(
    'b5ee9c72410207010001f20001e0ff00208ee73001d072d721d200d200fa4021103450666f04f86102f862ed44d0d20030916d916de202915be07021d74920c21f953101d31f02de218210da62971cbae30232c00001c121b08e1af8428010c8cb05ce70cf0b6ec98042fb0030c87f01ca00c9ed54e030f2c082e1f2c80b0103fc5bfa40d3ff5932f8416f24135f03821005f5e100bef2e2bc6d020259820afaf0800388c855215023cbff01cf16216eb38e147f01ca0001206ef2d0806f2202f400810101cf00947032ca00e2c9706d44437f025f41f90001f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f9040003c8cf8580ca0012cccc8902050601f8ff008e88f4a413f4bcf2c80bed53208e673001d072d721d200d200fa4021103450666f04f86102f862ed44d0d3fffa40d200019af404810101d700596f02916de243306c135f03019130e07021d74920c21f953101d31f309132e2c00001c121b08e11f8428010c8cb05ce70cf0b6ec98042fb00e0f2c082e1ed43d9030147a654d23b513434fffe9034800066bd0120404075c0165bc0a45b7890cc1b04f6cf1b0ce0040006547210000310020096cf16cbff01fa028069cf40cf8634f400c901fb0070f8426f00c801308210d53276db01cb1fc9804241337fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0030c87f01ca00c9ed546268e5d7'
  )
  const builder = beginCell()
  builder.storeUint(0, 1)
  const __data = builder.endCell()
  return { code: __code, data: __data }
}

export const UserFactory_errors = {
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

export const UserFactory_errors_backward = {
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

const UserFactory_types: ABIType[] = [
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
    name: 'Array',
    header: null,
    fields: [
      { name: 'm', type: { kind: 'dict', key: 'uint', keyFormat: 16, value: 'int' } },
      { name: 'length', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
    ],
  },
  {
    name: 'UserData',
    header: null,
    fields: [
      { name: 'publicKey', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
      { name: 'wallet', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'orgs', type: { kind: 'simple', type: 'Array', optional: true } },
    ],
  },
  {
    name: 'User$Data',
    header: null,
    fields: [{ name: 'userData', type: { kind: 'simple', type: 'UserData', optional: false } }],
  },
  { name: 'Excesses', header: 3576854235, fields: [] },
  {
    name: 'CreateUserRequest',
    header: 3663894300,
    fields: [
      { name: 'wallet', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'publicKey', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
    ],
  },
  { name: 'UserFactory$Data', header: null, fields: [] },
]

const UserFactory_opcodes = {
  Deploy: 2490013878,
  DeployOk: 2952335191,
  FactoryDeploy: 1829761339,
  Excesses: 3576854235,
  CreateUserRequest: 3663894300,
}

const UserFactory_getters: ABIGetter[] = []

export const UserFactory_getterMapping: { [key: string]: string } = {}

const UserFactory_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'typed', type: 'CreateUserRequest' } },
  { receiver: 'internal', message: { kind: 'empty' } },
]

export class UserFactory implements Contract {
  public static readonly MAX_ORGS_NUM = 5n
  public static readonly TOO_MUCH_ORGS = 800n
  public static readonly storageReserve = 0n
  public static readonly TOO_FEW_COINS = 700n
  public static readonly errors = UserFactory_errors_backward
  public static readonly opcodes = UserFactory_opcodes

  static async init() {
    return await UserFactory_init()
  }

  static async fromInit() {
    const __gen_init = await UserFactory_init()
    const address = contractAddress(0, __gen_init)
    return new UserFactory(address, __gen_init)
  }

  static fromAddress(address: Address) {
    return new UserFactory(address)
  }

  readonly address: Address
  readonly init?: { code: Cell; data: Cell }
  readonly abi: ContractABI = {
    types: UserFactory_types,
    getters: UserFactory_getters,
    receivers: UserFactory_receivers,
    errors: UserFactory_errors,
  }

  constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address
    this.init = init
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: CreateUserRequest | null
  ) {
    let body: Cell | null = null
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'CreateUserRequest'
    ) {
      body = beginCell().store(storeCreateUserRequest(message)).endCell()
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
