import { validation } from "../validation";
import { z } from "zod";
import {
	createSchema,
	idSchema,
	removeSchema,
	updateSchema,
} from "../validation/item-validation";
import prisma from "../../../prisma/client";
import { ResponseError } from "../error/response-error";
import { Category, Status } from "@prisma/client";

type CreateSchemaType = z.infer<typeof createSchema>;
type IdSchemaType = z.infer<typeof idSchema>;
type UpdateSchemaType = z.infer<typeof updateSchema>;
type RemoveSchemaType = z.infer<typeof removeSchema>;

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

export const getById = async (request: IdSchemaType) => {
	request = validation(idSchema, request);

	const isItemExsisted = await prisma.item.findUnique({
		where: {
			id: request,
		},
		include: {
			history: {
				orderBy: {
					createdAt: "desc",
				},
			},
		},
	});

	if (!isItemExsisted) {
		throw new ResponseError(404, "Item not found");
	}

	const relatedItem = await prisma.item.findMany({
		where: {
			AND: [
				{ category: isItemExsisted.category },
				{ id: { not: isItemExsisted.id } },
			],
		},
	});

	return { item: isItemExsisted, relatedItem };
};

export const update = async (request: UpdateSchemaType) => {
	const result = validation(updateSchema, request);

	const isItemExsisted = await prisma.item.findUnique({
		where: {
			id: result.id,
		},
	});

	if (!isItemExsisted) {
		throw new ResponseError(404, "items not found");
	}
	const imageURL = result.imageURL || isItemExsisted.imageURL;

	return await prisma.item.update({
		where: {
			id: result.id,
		},
		data: {
			name: result.name as string,
			imageURL: imageURL,
			description: result.description,
			place: result.place,
			status: result.status as Status,
			category: result.category as Category,
		},
		include: {
			history: true,
		},
	});
};

export const remove = async (request: RemoveSchemaType) => {
	request = validation(removeSchema, request);

	const isItemExsisted = await prisma.item.findUnique({
		where: {
			id: request,
		},
	});

	if (!isItemExsisted) {
		throw new ResponseError(404, "Item not found");
	}

	return await prisma.item.delete({
		where: {
			id: request,
		},
	});
};
