import cn from 'classnames'
import { forwardRef, HTMLProps, ReactNode } from 'react'

export type InputProps = {
  Button?: ReactNode
} & HTMLProps<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ Button, ...props }, ref) => {
  return (
    <div className='relative rounded-[.625rem]'>
      <input
        {...props}
        ref={ref}
        className={cn(
          'w-full h-[2.8rem] p-[0.8rem] font-bold rounded-[0.625rem] text-[var(--text-primary-color)] bg-[var(--background-color)] placeholder:text-[var(--text-third-color)] file:hidden',
          {
            ['mr-[2.8rem]']: !!Button,
          }
        )}
      />
      <div className='absolute top-0 right-0 w-[2.8rem] [&>button]:rounded-[0.5625rem]! [&>button]:rounded-l-none!'>
        {Button}
      </div>
    </div>
  )
})

export default Input
