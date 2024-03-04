import { z } from 'zod'

export const ReleaseSchema = 
  z.object({
    au: z.string().nullable(),
    eu: z.string().nullable(),
    jp: z.string().nullable(),
    na: z.string().nullable(),
  })