import { FC, PropsWithChildren } from 'react'

const ContentField: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <section className='text-white bg-[rgba(255,255,255,.05)] p-6 rounded-[1rem]'>
      <h1 className='text-[1.5rem] font-bold mb-[1.5rem]'>{title}</h1>
      {children}
    </section>
  )
}

export default ContentField
