import { z } from "zod";

export const assetSchema = z.object({
  batchName: z.string().min(3, "Batch name must be 3+ chars").max(50),
  files: z.any(), 
});
