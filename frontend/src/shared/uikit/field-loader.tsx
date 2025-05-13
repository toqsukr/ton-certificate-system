import ContentField from './content-field'
import Spinner from './spinner'

const FieldLoader = () => {
  return (
    <div className=' relative'>
      <ContentField>
        <div className='h-50' />
        <Spinner className='absolute left-1/2 top-1/2 -translate-1/2' />
      </ContentField>
    </div>
  )
}

export default FieldLoader
