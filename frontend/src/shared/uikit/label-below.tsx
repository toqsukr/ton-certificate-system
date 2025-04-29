import { FC, PropsWithChildren } from 'react'

type LabelBelowProp = {
  title: string
}

const LabelBelow: FC<PropsWithChildren<LabelBelowProp>> = ({ children, title }) => {
  return (
    <section style={{ lineHeight: '30px' }} className='flex flex-col gap-2 text-white font-bold'>
      <h1 className='text-[var(--primary-color)]'>{title}</h1>
      <div style={{ lineHeight: '30px' }} className='whitespace-nowrap overflow-hidden w-full'>
        {children}
      </div>
    </section>
  )
}

export default LabelBelow
