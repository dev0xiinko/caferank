import { z } from "zod";

export const createSuggestionSchema = z.object({
  type: z.enum(["cafe", "product"]),
  name: z.string().trim().min(2).max(120),
  cafeId: z.string().uuid().optional(),
  notes: z.string().trim().max(500).optional(),
});

export type CreateSuggestionInput = z.infer<typeof createSuggestionSchema>;
