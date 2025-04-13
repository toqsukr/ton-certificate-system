import { createTheme, InputProps, Input as MUIInput, SxProps, ThemeProvider } from '@mui/material'
import { forwardRef } from 'react'

export const customTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          '::placeholder': {
            color: 'var(--text-secondary-color)',
          },
          padding: 0,
        },
      },
    },
  },
})

const style: SxProps = {
  width: '100%',
  fontWeight: 'bold',
  padding: '0.625rem',
  borderRadius: '0.625rem',
  color: 'var(--text-primary-color)',
  border: '1px solid #fff',
  transition: 'border-color .3s',
  '&.Mui-focused': {
    borderColor: 'var(--button-bg-color)',
  },
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <ThemeProvider theme={customTheme}>
      <MUIInput {...props} ref={ref} sx={style} disableUnderline />
    </ThemeProvider>
  )
})

export default Input
