import { FC } from 'react'

const CopyableText: FC<{ text: string }> = ({ text }) => {
  const handleClick = () => {
    alert('Success copied!')
    navigator.clipboard.writeText(text)
  }

  return (
    <span className='cursor-pointer underline' onClick={handleClick}>
      {text}
    </span>
  )
}

export default CopyableText
