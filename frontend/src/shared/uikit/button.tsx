import { ButtonBase, ButtonProps, SxProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const style: SxProps = {
  width: '100%',
  height: '2.8rem',
  fontWeight: 'bold',
  borderRadius: '0.625rem',
  color: 'var(--text-primary-color)',

  background: 'linear-gradient(90deg, #0198ea 0%, #14ccfa 50%, #777777 50%, #999999 100%)',
  backgroundSize: '200% 100%',
  backgroundPosition: '0% 0%',
  transition: 'background-position 0.5s ease, opacity 0.3s ease',

  ':disabled': {
    backgroundPosition: '100% 0%',
    opacity: 0.7,
  },
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ButtonBase {...props} sx={style}>
      {children}
    </ButtonBase>
  )
}

export default Button
