import { Fragment } from "react";

interface TextInputWthLabelProps{
  forItem: string
  labelClassName?: string
  labelText: string
  type: string
  id: string
  handleChange: (e:any) => void
  required?: boolean
  inputClassName?: string
  inputPlaceholder?: string
}

const TextInputLabel = ({forItem, labelClassName, labelText, type='text', id, handleChange, required=false, inputClassName, inputPlaceholder}:TextInputWthLabelProps) => {
  return (
    <Fragment>
      <div>
        <label htmlFor={forItem} className={`text-sm font-medium text-gray-900 dark:text-gray-300 ${labelClassName}`}>{labelText}</label>
        <input type={type} id={id}
               className={`block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 
               border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 
               dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 
               dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm ${inputClassName}`}
               placeholder={inputPlaceholder} required={required} onChange={handleChange}/>
      </div>
    </Fragment>
  )
}

export default TextInputLabel