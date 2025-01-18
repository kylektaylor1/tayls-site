import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(10)
});
export type ContactForm = z.infer<typeof contactFormSchema>;
