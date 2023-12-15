import { z } from "zod";

export const createSchema = z.object({
	itemId: z.string(),
	history: z.string().min(1, { message: "please input item history" }),
});
export const updateSchema = z.object({
	historyId: z.string(),
	itemId: z.string(),
	history: z.string().min(1, { message: "please input item history" }),
});

export const removeSchema = z.string();
