import cn from 'classnames'
import { ChangeEvent, FormEvent, forwardRef, MouseEvent, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IconButton } from './icon-button'
import Input, { InputProps } from './input'

const ClearableInput = forwardRef<HTMLInputElement, InputProps>(({ onChange, ...props }, ref) => {
  const [value, setValue] = useState('')
  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    if (event?.currentTarget) {
      setValue('')
      event.currentTarget.value = ''
    }

    if (onChange) {
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as ChangeEvent<HTMLInputElement>

      onChange(syntheticEvent)
    }
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onChange?.(e)
    setValue(e?.currentTarget.value)
  }

  return (
    <Input
      {...props}
      ref={ref}
      value={value}
      onChange={handleChange}
      Button={
        <IconButton
          disabled={props.disabled}
          style={{ transformOrigin: 'right' }}
          className={cn('scale-x-0', {
            ['scale-x-100!']: !!value,
          })}
          Icon={<RxCross2 className='w-7 h-7' />}
          onClick={handleClear}
        />
      }
    />
  )
})

export default ClearableInput
