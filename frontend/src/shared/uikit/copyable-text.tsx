import { FC } from 'react'
import { Link } from 'react-router-dom'

const LinkText: FC<{ text: string; target: string }> = ({ text, target }) => {
  return (
    <p>
      <Link to={target} className='cursor-pointer underline'>
        {text}
      </Link>
    </p>
  )
}

export default LinkText
