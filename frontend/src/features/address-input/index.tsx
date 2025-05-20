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

  const onPaste = (textAddress: string) => {
    try {
      const address = Address.parse(textAddress)
      if (inputRef?.current) {
        inputRef.current.value = textAddress
        onAddressUpdate(address)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText()
    onPaste(text)
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
      value={address?.toString() ?? ''}
      onPaste={e => onPaste(e.clipboardData.getData('text/plain'))}
      Icons={[
        {
          action: handlePaste,
          element: <LuClipboardPaste className='w-[26px] h-[26px] stroke-[2px]' />,
        },
        { action: handleClear, element: <RxCross2 className='w-7 h-7 ' /> },
      ]}
      activeIcon={+!!address?.toString()}
    />
  )
}
