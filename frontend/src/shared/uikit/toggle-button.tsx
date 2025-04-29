import {
  ToggleButton as MUIToggleButton,
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButtonGroupProps as MUIToggleButtonGroupProps,
  SxProps,
  ToggleButtonProps,
} from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const buttonStyle: SxProps = {
  border: '0',
  width: '100%',
  height: '3rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '0.625rem 0',
  textTransform: 'math-auto',
  borderRadius: '1.25rem !important',
  color: 'var(--text-third-color)',
  '&.Mui-selected': {
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
}

const ToggleButton: FC<PropsWithChildren<ToggleButtonProps>> = ({ children, ...props }) => {
  return (
    <MUIToggleButton {...props} sx={buttonStyle}>
      {children}
    </MUIToggleButton>
  )
}

const groupStyle: SxProps = {
  width: '100%',
  backgroundColor: 'rgba(255,255,255,.05)',
  borderRadius: '1.25rem',
}

interface ToggleButtonGroupComponent extends FC<PropsWithChildren<MUIToggleButtonGroupProps>> {
  Button: typeof ToggleButton
}

const ToggleButtonGroup: ToggleButtonGroupComponent = ({ children, ...props }) => {
  return (
    <MUIToggleButtonGroup {...props} sx={groupStyle}>
      {children}
    </MUIToggleButtonGroup>
  )
}

ToggleButtonGroup.Button = ToggleButton

export default ToggleButtonGroup
