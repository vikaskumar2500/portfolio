import { forwardRef, TextareaHTMLAttributes, LegacyRef } from 'react'
import { FormError } from './form-error.component'
import { FieldError } from 'react-hook-form'

interface FormTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label?: string
  error?: FieldError
  className?: string
  rows?:number;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    { id, label, className, error, name, placeholder, rows = 4, ...props },
    ref,
  ) => {
    return (
      <div className="w-full">
        <div className="flex flex-col items-start gap-1">
          {label && (
            <label
              htmlFor={id}
              className="text-base font-normal text-declaration"
            >
              {label}
            </label>
          )}
          <textarea
            id={id}
            name={name || id}
            className={`w-full px-2 py-1 outline-none ring-[0.25px] ring-white focus-visible:ring-1 focus-visible:ring-blue-600 ${className}`}
            placeholder={placeholder}
            rows={rows}
            ref={ref}
            {...props}
          />
        </div>
        <FormError error={error} />
      </div>
    )
  },
)

FormTextArea.displayName = 'FormTextArea'
