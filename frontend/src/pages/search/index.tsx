import { SearchUserInput } from '@features/search-user'
import ContentField from '@shared/uikit/content-field'

const SearchPage = () => {
  return (
    <ContentField title='Information'>
      <div className='flex flex-col gap-3'>
        <SearchUserInput />
        <p className='text-[1rem] mt-4'>
          TCS is a certificate management system based on the TON blockchain. You can get
          information about user’s achievements. To do this, enter the user unique TCS-ID in the
          field above.
        </p>
      </div>
    </ContentField>
  )
}

export default SearchPage
