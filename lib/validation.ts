import { z } from 'zod'

export const UserFormValidation = z.object({
  name: z.string().min(5, {
    message: 'Username must be at least 5 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      'Invalid phone number'
    ),
})
