import { z } from "zod";

export const registerSchema = z.object({
	fullname: z
		.string()
		.min(1, { message: "Fullname Cant be Empty" })
		.max(255, { message: "Fullname cant more than 255" }),
	nip: z
		.string()
		.min(1, { message: "Please Enter Valid NIP" })
		.max(50, { message: "Please Enter Valid NIP" }),
	email: z.string().email({ message: "please enter a valid email address" }),
	password: z.string().min(8, { message: "Password must more then 8 char" }),
});

export const loginSchema = z.object({
	nip: z
		.string()
		.min(1, { message: "Please Enter Valid NIP" })
		.max(50, { message: "Please Enter Valid NIP" }),
	password: z
		.string()
		.min(8, { message: "Password must contain 8 char or more" }),
});

export const getSchema = z.string();

export const updateSchema = z.object({
	fullname: z
		.string()
		.min(1, { message: "Fullname Cant be Empty" })
		.max(255, { message: "Fullname cant more than 255" }),
	nip: z
		.string()
		.min(1, { message: "Please Enter Valid NIP" })
		.max(50, { message: "Please Enter Valid NIP" }),
	password: z.string().min(8, { message: "Password must more then 8 char" }),
	id: z.string(),
});
