import { ButtonProps } from '@mui/material'
import Button from '@shared/uikit/button'
import Spinner from '@shared/uikit/spinner'
import { FC, ReactNode } from 'react'

type IconButtonProps = {
  isLoading?: boolean
  Icon: ReactNode
} & ButtonProps

export const IconButton: FC<IconButtonProps> = ({ isLoading, Icon, ...props }) => {
  return (
    <Button {...props} disabled={props.disabled || isLoading}>
      {isLoading ? <Spinner className='p-2' /> : Icon}
    </Button>
  )
}
