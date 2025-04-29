import { Input as MUIInput, SxProps } from '@mui/material'
import { forwardRef, HTMLProps, ReactNode } from 'react'

const style: SxProps = {
  width: '100%',
  height: '2.8rem',
  fontWeight: 'bold',
  padding: '0.8rem',
  borderRadius: '0.625rem',
  color: 'var(--text-primary-color)',
}

type InputProps = {
  Button?: ReactNode
} & HTMLProps<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ Button, ...props }, ref) => {
  return (
    <div className='relative border-1 border-[white] rounded-[.625rem]'>
      <MUIInput
        sx={style}
        disableUnderline
        inputComponent={() => (
          <input
            {...props}
            className='w-full mr-[2.8rem] placeholder:text-[var(--text-third-color)]'
            ref={ref}
          />
        )}
      />
      <div className='absolute top-0 right-0 w-[2.8rem] border-l-1 [&>button]:rounded-[0.5625rem]! [&>button]:rounded-l-none!'>
        {Button}
      </div>
    </div>
  )
})

export default Input
