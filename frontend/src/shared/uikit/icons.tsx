import { FC, SVGProps } from 'react'

export const TONIcon: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_11_444)'>
        <path
          d='M1.00224 17.6811L1.00224 2.32703C0.988417 2.10685 1.03878 1.88725 1.14827 1.69033C1.25775 1.49341 1.42249 1.32612 1.62591 1.20528C1.82933 1.08444 2.06425 1.01432 2.30705 1.00197C2.54984 0.989624 2.79195 1.03549 3.00899 1.13494L18.248 8.812C18.477 8.93408 18.6668 9.10829 18.7987 9.31739C18.9306 9.52648 19 9.76319 19 10.0041C19 10.245 18.9306 10.4817 18.7987 10.6908C18.6668 10.8999 18.477 11.0741 18.248 11.1962L3.00899 18.8653C2.79263 18.9643 2.55139 19.0101 2.30939 18.9981C2.06738 18.9861 1.83309 18.9167 1.62995 18.7968C1.4268 18.6769 1.2619 18.5108 1.15174 18.315C1.04159 18.1192 0.99004 17.9007 1.00224 17.6811Z'
          stroke='white'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path d='M18.631 10L1.27551 10' stroke='white' strokeWidth='2' strokeMiterlimit='10' />
      </g>
      <defs>
        <clipPath id='clip0_11_444'>
          <rect width='20' height='20' fill='white' transform='matrix(0 -1 1 0 0 20)' />
        </clipPath>
      </defs>
    </svg>
  )
}
