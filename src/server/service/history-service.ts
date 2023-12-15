import { z } from "zod";
import {
	createSchema,
	removeSchema,
	updateSchema,
} from "../validation/history-validaiton";
import { validation } from "../validation";
import prisma from "../../../prisma/client";
import { ResponseError } from "../error/response-error";

type CreateSchemaType = z.infer<typeof createSchema>;
type UpdateSchemaType = z.infer<typeof updateSchema>;
type RemoveSchemaType = z.infer<typeof removeSchema>;

export const create = async (request: CreateSchemaType) => {
	const result = validation(createSchema, request);

	const isItemExsisted = await prisma.item.findUnique({
		where: {
			id: result.itemId,
		},
	});

	if (!isItemExsisted) {
		throw new ResponseError(404, "items not found");
	}

	const isHistoryExisted = await prisma.history.findFirst({
		where: {
			history: result.history,
		},
	});

	if (isHistoryExisted) {
		throw new ResponseError(401, "history already exsisted");
	}

	return await prisma.history.create({
		data: {
			history: result.history,
			itemId: result.itemId,
		},
		include: {
			item: true,
		},
	});
};

export const update = async (request: UpdateSchemaType) => {
	const result = validation(updateSchema, request);

	const isHistoryExisted = await prisma.history.findFirst({
		where: {
			id: result.historyId,
		},
	});

	if (!isHistoryExisted) {
		throw new ResponseError(404, "history not found");
	}

	return await prisma.history.update({
		data: {
			history: result.history,
		},
		where: {
			id: isHistoryExisted.id,
			itemId: isHistoryExisted.itemId,
		},
	});
};

export const remove = async (request: RemoveSchemaType) => {
	request = validation(removeSchema, request);

	const isHistoryExisted = await prisma.history.findFirst({
		where: {
			id: request,
		},
	});

	if (!isHistoryExisted) {
		throw new ResponseError(404, "history not found");
	}

	return await prisma.history.delete({
		where: { id: request },
	});
};
