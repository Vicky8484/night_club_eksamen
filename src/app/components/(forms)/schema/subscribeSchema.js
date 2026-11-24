import * as z from "zod";

export const SubscribeSchema = z.object({
  email: z.email("Please enter a valid email"),
});
