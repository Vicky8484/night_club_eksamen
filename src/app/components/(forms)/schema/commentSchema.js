import * as z from "zod";

export const Comment = z.object({
  commentname: z
    .string()
    .trim()
    .min(3, "We're gonna need your name")
    .regex(/^[^0-9]*$/, "Your name can't contain numbers"),

  commentemail: z
    .string()
    .trim()
    .min(1, "We're gonna need your email")
    .email("Please enter a valid email address"),

  commenttext: z.string().trim().min(1, "Write a comment"),
});

export const initialComment = {
  commentname: "",
  commentemail: "",
  commenttext: "",
};
