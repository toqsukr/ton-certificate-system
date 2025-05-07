import { ButtonBase, ButtonProps, SxProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const style: SxProps = {
  width: '100%',
  height: '2.8rem',
  fontWeight: 'bold',
  borderRadius: '0.625rem',
  color: 'var(--text-primary-color)',
  background: 'linear-gradient(90deg, #0198ea 10%, #14ccfa 80%)',
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ButtonBase {...props} sx={style}>
      {children}
    </ButtonBase>
  )
}

export default Button
