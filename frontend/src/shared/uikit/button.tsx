import { ButtonBase, ButtonProps, SxProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const style: SxProps = {
  width: '100%',
  height: '2.8rem',
  fontWeight: 'bold',
  borderRadius: '0.625rem',
  color: 'var(--text-primary-color)',
  backgroundColor: 'var(--button-bg-color)',
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ButtonBase {...props} sx={style}>
      {children}
    </ButtonBase>
  )
}

export default Button
