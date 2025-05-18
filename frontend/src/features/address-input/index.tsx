import FlipIconInput from '@shared/uikit/filp-icon-input/flip-icon-input'
import { Address } from '@ton/core'
import { FC, HTMLProps, useRef } from 'react'
import { LuClipboardPaste } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'

type AddressInputProps = HTMLProps<HTMLInputElement> & {
  address: Address | null
  onAddressUpdate: (address: Address | null) => void
}

export const AddressInput: FC<AddressInputProps> = ({
  address,
  onAddressUpdate,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      document.execCommand('paste')
      const address = Address.parse(text)
      if (inputRef?.current) {
        inputRef.current.value = text
        onAddressUpdate(address)
      }
    } catch {}
  }

  const handleClear = () => {
    if (inputRef?.current) {
      inputRef.current.value = ''
      onAddressUpdate(null)
    }
  }

  return (
    <FlipIconInput
      {...inputProps}
      ref={inputRef}
      readOnly
      value={address?.toString() ?? ''}
      Icons={[
        {
          action: handlePaste,
          element: <LuClipboardPaste className='w-7 h-7 stroke-[1.5px]' />,
        },
        { action: handleClear, element: <RxCross2 className='w-8 h-8' /> },
      ]}
      activeIcon={+!!address?.toString()}
    />
  )
}
