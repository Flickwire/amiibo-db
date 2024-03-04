import { z } from 'zod';
import { ReleaseSchema } from './release';

export const AmiiboSchema = 
  z.object({
    amiiboSeries: z.string(),
    character: z.string(),
    gameSeries: z.string(),
    head: z.string(),
    image: z.string(),
    name: z.string(),
    release: ReleaseSchema,
    tail: z.string(),
    type: z.string(),
  })

export const AmiiboListSchema = z.object({
  amiibo: z.array(AmiiboSchema)
})
