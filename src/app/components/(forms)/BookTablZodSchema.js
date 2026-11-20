import * as z from "zod";

export const BookTableForms = z.object({
  name: z
    .string()
    .trim()
    .min(1, "The field cannot be empty.")
    .regex(/^[\p{L} ]+$/u, "use only letters and spaces."),
  email: z.email("Please enter a valid email"),
  guests: z.coerce.number().min(1, "At least 1 guest"),
  phone: z.string().trim().min(1, "Phone is required"),
  table: z.string().min(1, "Please select a table"),
  comment: z.string().trim().optional(),
});

export const initialBooking = {
  name: "",
  email: "",
  guests: "",
  phone: "",
  table: "",
  comment: "",
  date: "",
};
