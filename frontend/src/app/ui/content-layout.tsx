import { FC, PropsWithChildren } from 'react'

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className='h-full flex flex-col gap-10 max-w-[30rem] mb-12 px-12 pt-10 mx-auto'>
      {children}
    </section>
  )
}

export default ContentLayout
