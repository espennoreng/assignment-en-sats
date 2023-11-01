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
          ? 'bg-blue-900 text-white hover:bg-blue-800'
          : 'bg-transparent text-blue-900 hover:bg-blue-50'
      } ${
        outlined ? 'border border-blue-900' : ''
      } font-base py-2 px-4 rounded-lg`}
    >
      {children}
    </button>
  )
}
