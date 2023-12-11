import prisma from "../../../prisma/client";
import { ResponseError } from "../error/response-error";
import { validation } from "../validation";
import {
	getSchema,
	loginSchema,
	registerSchema,
	updateSchema,
} from "../validation/user-validation";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

type RegisterSchemaType = z.infer<typeof registerSchema>;
type LoginSchemaType = z.infer<typeof loginSchema>;
type GetSchemaType = z.infer<typeof getSchema>;
type UpdateSchemaType = z.infer<typeof updateSchema>;

export const register = async (request: RegisterSchemaType) => {
	const result = validation(registerSchema, request);

	const isUserExsisted = await prisma.user.findFirst({
		where: {
			nip: result.nip,
		},
	});

	if (isUserExsisted) {
		throw new ResponseError(400, "User Already Exsisted");
	}

	const userRoleId = await prisma.role.findFirst({
		where: {
			name: "USER",
		},
		select: {
			id: true,
		},
	});

	const isRoleExsisted = await prisma.role.findFirst({
		where: {
			id: userRoleId?.id,
		},
	});

	if (!isRoleExsisted) {
		throw new ResponseError(400, "Cant Find Role");
	}

	result.password = await hash(result.password, 10);
	const profile = "";

	return await prisma.user.create({
		data: { ...result, profile, roleId: userRoleId?.id as string },
		select: {
			fullname: true,
			nip: true,
			createdAt: true,
			role: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	});
};

export const login = async (request: LoginSchemaType) => {
	const result = validation(loginSchema, request);

	const isUserExsisted = await prisma.user.findFirst({
		where: {
			nip: result.nip,
		},
		select: {
			role: {
				select: {
					id: true,
				},
			},
			password: true,
			id: true,
		},
	});

	if (!isUserExsisted) {
		throw new ResponseError(404, "Wrong username or password");
	}

	const comparePassword = await compare(
		result.password,
		isUserExsisted.password
	);
	if (!comparePassword) {
		throw new ResponseError(404, "Wrong Username or Password");
	}

	const token = jwt.sign(
		{
			user: {
				userId: isUserExsisted.id,
				roleId: isUserExsisted.role.id,
			},
		},
		"TESTSECRETDULU",
		{
			expiresIn: "20m",
		}
	);

	return { token };
};

export const getById = async (request: GetSchemaType) => {
	request = validation(getSchema, request);

	const isUserExsisted = await prisma.user.findUnique({
		where: {
			id: request,
		},
	});

	if (!isUserExsisted) {
		throw new ResponseError(404, "User not found");
	}

	return await prisma.user.findUnique({
		where: {
			id: request,
		},
		select: {
			fullname: true,
			createdAt: true,
			nip: true,
			role: { select: { name: true } },
		},
	});
};

export const getMe = async (request: GetSchemaType) => {
	request = validation(getSchema, request);

	const isUserExsisted = await prisma.user.findUnique({
		where: { id: request },
		select: {
			createdAt: true,
			fullname: true,
			id: true,
			nip: true,
			updatedAt: true,
			role: { select: { name: true } },
		},
	});

	if (!isUserExsisted) {
		throw new ResponseError(404, "User not found!");
	}

	return isUserExsisted;
};

export const update = async (request: UpdateSchemaType) => {
	const data = validation(updateSchema, request);

	const isUserExsisted = await prisma.user.findUnique({
		where: { id: data.id },
		select: { updatedAt: true, id: true, nip: true },
	});

	if (!isUserExsisted) {
		throw new ResponseError(404, "User not found");
	}

	if (data.password) {
		data.password = await hash(data.password, 10);
	}

	return prisma.user.update({
		where: {
			id: data.id,
		},
		data: data,
		select: {
			createdAt: true,
			fullname: true,
			id: true,
			nip: true,
			updatedAt: true,
			role: { select: { id: true, name: true } },
		},
	});
};

export const remove = async (request: GetSchemaType) => {
	request = validation(getSchema, request);

	const isUserExsisted = await prisma.user.findUnique({
		where: { id: request },
	});

	if (!isUserExsisted) {
		throw new ResponseError(404, "user not found");
	}

	return await prisma.user.delete({
		where: {
			id: request,
		},
		select: {
			createdAt: true,
			fullname: true,
			id: true,
			nip: true,
		},
	});
};
