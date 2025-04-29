import Button from '@shared/uikit/button'
import { TONIcon } from '@shared/uikit/icons'
import Input from '@shared/uikit/input'
import { Address } from '@ton/core'
import { useRef } from 'react'
import { useSearchUser } from '../model/use-search-user'

export const SearchUserInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const searchUser = useSearchUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch()
  }

  const handleSearch = () => {
    const inputAddress = inputRef.current?.value

    if (!inputAddress) return

    new Promise<Address>(res => {
      const address = Address.parse(inputAddress)
      res(address)
    })
      .then(address => searchUser(address.toString()))
      .catch(() => {})
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        placeholder='Enter User Address'
        Button={
          <Button onClick={handleSearch}>
            <TONIcon />
          </Button>
        }
      />
    </form>
  )
}
