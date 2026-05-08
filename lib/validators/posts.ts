import { z } from "zod";

const uuidSchema = z.string().uuid();

export const createPostSchema = z.object({
  cafeId: uuidSchema,
  productId: uuidSchema,
  imageUrl: z.string().url(),
  caption: z.string().trim().max(2200).optional(),
  rating: z.coerce.number().min(1).max(5).optional(),
});

export const postIdSchema = z.object({
  postId: uuidSchema,
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
