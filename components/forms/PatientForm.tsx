'use client'

// form
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// validation
import { zodResolver } from '@hookform/resolvers/zod'
import { set, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CustomFormField from '../CustomFormField'
import SubmitButton from '../SubmitButton'
import { useState } from 'react'
import { UserFormVaidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

const formSchema = z.object({
  username: z.string().min(5, {
    message: 'Username must be at least 5 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
})

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  // 1. Define your form
  const form = useForm<z.infer<typeof UserFormVaidation>>({
    resolver: zodResolver(UserFormVaidation),
    // a resolver is a function that takes a form schema and returns a form resolver which is a function that returns a form with validation meaning that it will validate the form schema
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit({ name, email, phone }: z.infer<typeof UserFormVaidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)

    // try {
    //   const userData = { name, email, phone }
    //   const user = await createUser(userData)
    //   if (user) router.push(`/patients/${user.#id/register}`)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi there 👋</h1>
          <p className='text-dark-700'>Schedule your first appointment</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='name'
          label='Full Name'
          placeholder='John Doe'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='email'
          label='Email'
          placeholder='jonndoe@gmail.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name='phone'
          label='Phone Number'
          placeholder='(555) 123-4567'
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm
