import { FC, PropsWithChildren, ReactNode } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

const ContentField: FC<PropsWithChildren<{ title?: ReactNode; onBack?: () => void }>> = ({
  children,
  title,
  onBack,
}) => {
  return (
    <section className='h-max text-white bg-[rgba(255,255,255,.05)] p-6 rounded-[1rem]'>
      {title && (
        <header style={{ lineHeight: '2rem' }} className='text-[1.5rem] font-bold mb-[1.5rem]'>
          <div className='flex items-center gap-5'>
            {onBack && <IoArrowBackOutline className='cursor-pointer' onClick={onBack} />}
            {title}
          </div>
        </header>
      )}
      {children}
    </section>
  )
}

export default ContentField
