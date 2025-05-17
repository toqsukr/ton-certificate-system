import FlipIconInput from '@shared/uikit/filp-icon-input/flip-icon-input'
import { Address } from '@ton/core'
import { FC, useRef } from 'react'
import { LuClipboardPaste } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'

const OwnerAddressInput: FC<{
  ownerAddress: Address | null
  onOwnerUpdate: (address: Address | null) => void
}> = ({ ownerAddress, onOwnerUpdate }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handlePaste = async () => {
    console.log('click paste')
    try {
      const text = await navigator.clipboard.readText()
      const address = Address.parse(text)
      if (inputRef?.current) {
        inputRef.current.value = text
        onOwnerUpdate(address)
        console.log('success address', address)
      }
    } catch {}
  }

  const handleClear = () => {
    console.log('click clear')
    if (inputRef?.current) {
      inputRef.current.value = ''
      onOwnerUpdate(null)
    }
  }

  return (
    <FlipIconInput
      ref={inputRef}
      readOnly
      placeholder='Адрес владельца'
      value={ownerAddress?.toString() ?? ''}
      Icons={[
        {
          action: handlePaste,
          element: <LuClipboardPaste className='w-7 h-7 stroke-[1.5px]' />,
        },
        { action: handleClear, element: <RxCross2 className='w-8 h-8' /> },
      ]}
      activeIcon={+!!ownerAddress?.toString()}
    />
  )
}

export default OwnerAddressInput
