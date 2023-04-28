import React from 'react'

interface ButtonProps {
  click: () => void
  className?: string
  text: string
}

const ButtonInput = ({click, className, text}: ButtonProps) => {
  return (
    <React.Fragment>
      <button className={`text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 
              focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center 
              justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg ${className}`}
              onClick={click}
      >
        {text}
      </button>
    </React.Fragment>
  )
}

export default ButtonInput