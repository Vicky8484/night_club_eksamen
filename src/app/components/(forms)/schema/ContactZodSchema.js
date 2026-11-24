import * as z from "zod";

export const ContactForms = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please write your name")
    .regex(/^[\p{L} ]+$/u, "use only letters and spaces."),
  email: z.email("Please enter a valid email"),
  content: z.string().trim().min(1, "please write your comment"),
});
