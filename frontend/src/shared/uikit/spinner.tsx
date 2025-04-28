import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import { FC } from 'react'

const Spinner: FC<CircularProgressProps> = props => {
  return <CircularProgress {...props} sx={{ color: 'var(--text-primary-color)' }} />
}

export default Spinner
