import { z } from "zod";

const MAX_FILE_SIZE_MB = 2;
export const imageSchema = z.object({
	size: z
		.number()
		.max(MAX_FILE_SIZE_MB * 1024 * 1024)
		.refine((value) => value > 0, {
			message: `File size must be less than ${MAX_FILE_SIZE_MB} MB`,
		}),
	type: z.string(),
	name: z.string(),
	lastModified: z.number(),
});

export const createSchema = z.object({
	name: z.string().min(1, { message: "please input item name" }),
	imageURL: z.string(),
	status: z.string().min(1, { message: "please input item status" }),
	place: z.string().min(1, { message: "please input item place" }),
	description: z.string().min(1, { message: "please input item description" }),
	history: z.string().min(1, { message: "please input item history" }),
	category: z.string().min(1, { message: "please input item category" }),
});

export const idSchema = z.string().min(1, { message: "please input item id" });

export const updateSchema = z.object({
	name: z.string().min(1, { message: "please input item name" }),
	imageURL: z.string(),
	status: z.string().min(1, { message: "please input item status" }),
	place: z.string().min(1, { message: "please input item place" }),
	description: z.string().min(1, { message: "please input item description" }),
	category: z.string().min(1, { message: "please input item category" }),
	id: z.string(),
});

export const removeSchema = z.string();
