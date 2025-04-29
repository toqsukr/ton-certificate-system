import { SearchUserInput } from '@features/search-user'
import ContentField from '@shared/uikit/content-field'
import { useTranslation } from 'react-i18next'

const SearchPage = () => {
  const { t } = useTranslation()

  return (
    <ContentField title={t('search_unit_title')}>
      <div className='flex flex-col gap-2'>
        <SearchUserInput placeholder={t('search_input_placeholder')} />
        <p className='text-[1rem] mt-4'>{t('search_about_text')}</p>
      </div>
    </ContentField>
  )
}

export default SearchPage
