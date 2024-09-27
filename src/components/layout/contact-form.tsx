'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useInView } from 'react-intersection-observer'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { IoIosSend } from 'react-icons/io'
import { TbLoader2 } from 'react-icons/tb'
import { toast } from 'sonner'
import { CgClose } from 'react-icons/cg'

// components
import { useActiveSection } from '@/hooks/use-active-section'
import { FormInput, FormSubmit, FormTextArea } from '.'
import { createContact } from '@/actions/contact'

const ContactSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  description: z.string().min(10, 'Min 10 words are required'),
})

export type FieldTypes = z.infer<typeof ContactSchema>

const ContactForm = () => {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const { activeSection, setActiveSection } = useActiveSection()

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FieldTypes>({
    resolver: zodResolver(ContactSchema),
    mode: 'all',
    defaultValues: {
      description: '',
      email: '',
    },
  })

  useEffect(() => {
    if (inView) setActiveSection('Contact')
  }, [inView, activeSection])

  const onSubmit = async (data: FieldTypes) => {
    const { data: contact, error } = await createContact(data)
    if (!error)
      return toast.success('Thank you for contacting us', {
        cancel: {
          label: <CgClose />,
          onClick: (e) => e.preventDefault(),
          actionButtonStyle: {
            outline: 'none',
          },
        },
      })
    toast.error(error, {
      cancel: {
        label: <CgClose />,
        onClick: (e) => e.preventDefault(),
      },
    })
  }

  return (
    <section
      className="flex scroll-mt-28 flex-col gap-2 p-2 md:p-10"
    >
      <p className="font-sm mb-5 w-full text-xs text-neutral-700 md:w-1/2">
        <span className="text-gray-100">Please contact me directly </span>
        <a
          href="mailto:vikas.nits8084@gmail.com"
          className="text-blue-700 underline"
        >
          vikas.nits8084@gmail.com
        </a>{' '}
        <span className="text-neutral-100">or through this form!</span>
      </p>
      <form
        className="flex w-full flex-col gap-5 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          id="email"
          error={errors.email}
          {...register('email')}
          label="Email Address"
          placeholder="Enter your email address"
        />
        <FormTextArea
          id="description"
          placeholder="Please write the description"
          {...register('description')}
          error={errors.description}
          label="Description"
        />
        <FormSubmit
          label="Submit"
          key="contact-form"
          labelIcon={IoIosSend}
          loadingIcon={TbLoader2}
          control={control}
        />
      </form>
    </section>
  )
}

export default ContactForm
