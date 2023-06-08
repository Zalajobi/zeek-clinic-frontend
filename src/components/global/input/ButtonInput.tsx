import {Fragment, ReactNode} from 'react'

interface ButtonProps {
  click: () => void
  className?: string
  icon?: ReactNode
  text: string
}

export const ButtonInput = ({click, className, text, icon}: ButtonProps) => {
  return (
    <Fragment>
      <button className={`text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 
              focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center 
              justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg ${className}`}
              onClick={click}
      >
        {icon} {text}
      </button>
    </Fragment>
  )
}

export const PrimaryButtonOutline = ({click, className, text, icon}: ButtonProps) => {
  return (
    <Fragment>
      <button
        type="button"
        onClick={click}
        className={`flex items-center justify-center min-h-12 px-5 py-2 text-sm font-bold text-center min-w-24 border
        rounded-lg hover:bg-primary text-[#8CC5FA] border-[#BBDDFC] box-border ${className}`}
      >
        {icon} {text}
      </button>
    </Fragment>
  )
}