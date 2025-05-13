import { FC, PropsWithChildren } from 'react'

type LabelOppositeProp = {
  title: string
}

const LabelOpposite: FC<PropsWithChildren<LabelOppositeProp>> = ({ children, title }) => {
  return (
    <section
      style={{ lineHeight: '30px' }}
      className='flex justify-between items-center text-white font-bold'>
      <h1 className='text-[var(--primary-color)]'>{title}</h1>
      <div className='flex justify-end whitespace-nowrap overflow-hidden w-[9.25rem]'>
        {children}
      </div>
    </section>
  )
}

export default LabelOpposite
