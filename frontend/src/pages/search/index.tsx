import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { TONIcon } from '@shared/uikit/icons'
import Input from '@shared/uikit/input'

const SearchPage = () => {
  return (
    <ContentField title='User searching'>
      <Input
        placeholder='Enter TCS-ID'
        Button={
          <Button>
            <TONIcon />
          </Button>
        }
      />
      <p style={{ lineHeight: '1.5rem' }} className='text-[1rem] mt-4'>
        TCS is a certificate management system based on the TON blockchain. You can get information
        about user’s achievements. To do this, enter the user unique TCS-ID in the field above.
      </p>
    </ContentField>
  )
}

export default SearchPage
