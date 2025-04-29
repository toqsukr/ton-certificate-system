export const walletKeyToHex = (key: string | undefined) => {
  return BigInt(`0x${key}`)
}
