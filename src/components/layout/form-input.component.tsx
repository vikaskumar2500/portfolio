import { forwardRef, InputHTMLAttributes } from 'react'
import { FormError } from './form-error.component'
import { FieldError } from 'react-hook-form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: FieldError
  className?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, label, className, name, placeholder, error, ...props }, ref) => {
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
          <input
            id={id}
            name={name || id}
            className="w-full px-2 py-1 outline-none ring-[0.25px] ring-white focus-visible:ring-1 focus-visible:ring-blue-600"
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        </div>
        <FormError error={error} />
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'
