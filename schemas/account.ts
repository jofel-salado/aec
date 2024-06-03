import z from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
