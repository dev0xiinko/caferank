import { z } from "zod";

export const createCommentSchema = z.object({
  postId: z.string().uuid(),
  content: z.string().trim().min(1).max(500),
});

export const commentIdSchema = z.object({
  commentId: z.string().uuid(),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
