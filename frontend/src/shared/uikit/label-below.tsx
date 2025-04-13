import { FC, PropsWithChildren } from 'react'

type LabelBelowProp = {
  title: string
}

const LabelBelow: FC<PropsWithChildren<LabelBelowProp>> = ({ children, title }) => {
  return (
    <section style={{ lineHeight: '30px' }} className='flex flex-col gap-1 text-white font-bold'>
      <h1 className='text-[var(--primary-color)]'>{title}</h1>
      <div style={{ lineHeight: '30px' }} className='flex-wrap break-words'>
        {children}
      </div>
    </section>
  )
}

export default LabelBelow
