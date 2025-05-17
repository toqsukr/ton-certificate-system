import cn from 'classnames'
import { forwardRef, MouseEvent, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IconButton } from './icon-button'
import Input, { InputProps } from './input'

const ClearableInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [value, setValue] = useState('')
  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    if (event?.currentTarget) {
      setValue('')
    }
  }

  return (
    <Input
      {...props}
      ref={ref}
      value={value}
      onChange={e => setValue(e?.currentTarget.value)}
      Button={
        <IconButton
          style={{
            transition: 'scale .2s',
            transformOrigin: 'right',
          }}
          className={cn('scale-x-0', {
            ['scale-x-100!']: !!value,
          })}
          Icon={<RxCross2 className='w-8 h-8' />}
          onClick={handleClear}
        />
      }
    />
  )
})

export default ClearableInput
