import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().trim().min(1).max(80),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9_]{3,24}$/),
  bio: z.string().trim().max(160).optional(),
  location: z.string().trim().max(80).optional(),
  avatarUrl: z.string().url().optional(),
});

export type ProfileInput = z.infer<typeof profileSchema>;
