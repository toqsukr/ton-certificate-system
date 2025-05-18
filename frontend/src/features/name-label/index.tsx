import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const NameLabel: FC<{ name: string | null | undefined }> = ({ name }) => {
  const { t } = useTranslation()

  if (!name) return

  if (name.length > 15) return <LabelBelow title={t('name_label')}>{name}</LabelBelow>

  return <LabelOpposite title={t('name_label')}>{name}</LabelOpposite>
}

export default NameLabel
