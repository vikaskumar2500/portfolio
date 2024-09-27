import { FieldError } from 'react-hook-form'
import { IoCloseCircleOutline } from 'react-icons/io5'

type FormErrorProps = { error?: FieldError }

export const FormError = ({ error }: FormErrorProps) => {
  return (
    <>
      {error && (
        <div className="flex items-center gap-1 pt-2">
          <IoCloseCircleOutline color="red" size={16} className="text-xs" />
          <p className="text-xs text-red-500">{error.message}</p>
        </div>
      )}
    </>
  )
}
