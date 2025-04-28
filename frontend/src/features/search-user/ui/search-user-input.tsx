import Button from '@shared/uikit/button'
import { TONIcon } from '@shared/uikit/icons'
import Input from '@shared/uikit/input'
import { useState } from 'react'
import { useSearchUser } from '../model/use-search-user'

export const SearchUserInput = () => {
  const [address, setAddress] = useState('')
  const searchUser = useSearchUser(address)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddress(e.target.value)
  }

  return (
    <Input
      placeholder='Enter TCS-ID'
      onChange={handleChange}
      Button={
        <Button>
          <TONIcon onClick={searchUser} />
        </Button>
      }
    />
  )
}
