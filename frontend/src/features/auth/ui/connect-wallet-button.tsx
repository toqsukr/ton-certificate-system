import Button from '@shared/uikit/button'
import { useTonConnectModal } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'

const ConnectWalletButton: FC<PropsWithChildren> = ({ children }) => {
  const { open } = useTonConnectModal()

  return <Button onClick={open}>{children}</Button>
}

export default ConnectWalletButton
