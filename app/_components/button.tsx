import { ButtonHTMLAttributes } from 'react'

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  outlined?: boolean
}

export default function Button({
  variant,
  outlined,
  children,
  ...props
}: Readonly<ButtonInterface>) {
  return (
    <button
      {...props}
      className={`${
        variant === 'primary'
          ? 'bg-blue-900 text-white'
          : 'bg-transparent text-blue-900'
      } ${
        outlined ? 'border border-blue-900' : ''
      } hover:bg-blue-900 hover:text-white font-base py-2 px-4 rounded-lg`}
    >
      {children}
    </button>
  )
}
