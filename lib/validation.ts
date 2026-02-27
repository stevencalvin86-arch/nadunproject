import { z } from 'zod';

export const horoscopeSchema = z.object({
  name: z.string().min(2),
  gender: z.string().min(1),
  dob: z.string().date(),
  tob: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  place: z.string().min(2),
  latitude: z.number(),
  longitude: z.number(),
  timezone: z.string().min(1),
  language: z.enum(['en', 'si'])
});
