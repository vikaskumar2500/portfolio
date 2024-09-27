'use client'
import { Control, useFormState } from 'react-hook-form'
import { FieldTypes } from './contact-form'
import { IconType } from 'react-icons'

interface FormSubmitProps {
  control?: Control<FieldTypes, any>
  label: string
  labelIcon?: IconType
  loadingText?: string
  loadingIcon?: IconType
}

export const FormSubmit = ({
  control,
  label,
  labelIcon: LabelIcon,
  loadingIcon: LoadingIcon,
  loadingText="Please wait",
}: FormSubmitProps) => {
  const { isSubmitting } = useFormState({ control, exact: true })
  return (
    <>
      {!isSubmitting && (
        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-5 bg-blue-600 py-1 hover:scale-y-110"
        >
          <span>{label}</span>
          {LabelIcon && <LabelIcon size={20} className="" />}
        </button>
      )}
      {isSubmitting && (
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2"
        >
          {LoadingIcon && <LoadingIcon className="h-5 w-5 animate-spin " />}
          <p>
            {loadingText}
            <span className="animate-pulse text-xl font-bold transition">
              ...
            </span>
          </p>
        </button>
      )}
    </>
  )
}

FormSubmit.displayName = 'FormSubmit'
