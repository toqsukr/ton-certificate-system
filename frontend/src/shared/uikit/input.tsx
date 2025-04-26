import {
  createTheme,
  Input as MUIInput,
  InputProps as MUIInputProps,
  SxProps,
  ThemeProvider,
} from '@mui/material'
import { forwardRef, ReactNode } from 'react'

export const customTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          '::placeholder': {
            color: 'var(--text-secondary-color)',
          },
          marginRight: '2.8rem',
          padding: 0,
        },
      },
    },
  },
})

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
} & MUIInputProps

const Input = forwardRef<HTMLInputElement, InputProps>(({ Button, ...props }, ref) => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className='relative border-1 border-[white] rounded-[.625rem]'>
        <MUIInput {...props} ref={ref} sx={style} disableUnderline />
        <div className='absolute top-0 right-0 w-[2.8rem] border-l-1 [&>button]:rounded-[0.5625rem]! [&>button]:rounded-l-none!'>
          {Button}
        </div>
      </div>
    </ThemeProvider>
  )
})

export default Input
