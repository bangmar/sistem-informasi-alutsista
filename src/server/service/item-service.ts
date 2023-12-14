import { validation } from "../validation";
import { z } from "zod";
import { createSchema, idSchema } from "../validation/item-validation";
import prisma from "../../../prisma/client";
import { ResponseError } from "../error/response-error";
import { Category, Status } from "@prisma/client";

type CreateSchemaType = z.infer<typeof createSchema>;
type ParamsSchemaType = z.infer<typeof idSchema>;

export const create = async (request: CreateSchemaType) => {
	const result = validation(createSchema, request);

	const isItemExsisted = await prisma.item.findFirst({
		where: {
			name: result.name,
		},
	});

	if (isItemExsisted) {
		throw new ResponseError(401, "Items already exsisted");
	}

	return await prisma.item.create({
		data: {
			name: result.name,
			imageURL: result.imageURL,
			description: result.description,
			place: result.place,
			status: result.status as Status,
			category: result.category as Category,
			history: {
				create: {
					history: result.history,
				},
			},
		},
		include: {
			history: true,
		},
	});
};

export const getAll = async () => {
	return await prisma.item.findMany({});
};

export const getById = async (request: ParamsSchemaType) => {
	request = validation(idSchema, request);

	const isItemExsisted = await prisma.item.findUnique({
		where: {
			id: request,
		},
		include: {
			history: true,
		},
	});

	if (!isItemExsisted) {
		throw new ResponseError(404, "Item not found");
	}

	const relatedItem = await prisma.item.findMany({
		where: {
			category: isItemExsisted.category,
		},
	});

	return isItemExsisted;
};

export const update = async (request: CreateSchemaType) => {
	const result = validation(createSchema, request);
};
