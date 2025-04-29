import { FC, PropsWithChildren, ReactNode } from 'react'

const ContentField: FC<PropsWithChildren<{ title: ReactNode }>> = ({ children, title }) => {
  return (
    <section className='h-max text-white bg-[rgba(255,255,255,.05)] p-6 rounded-[1rem]'>
      <header style={{ lineHeight: '2rem' }} className='text-[1.5rem] font-bold mb-[1.5rem]'>
        {title}
      </header>
      {children}
    </section>
  )
}

export default ContentField
