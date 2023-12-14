import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { authMiddleware } from "@/server/middleware/auth-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { TParams } from "@/server/middleware/types";
import { getById } from "@/server/service/item-service";

const getHandler = async (request: Request, params: TParams | undefined) => {
	const id = params?.params?.id;
	const data = await getById(id as string);

	return new Response(
		JSON.stringify({
			message: "success get item by id",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

const updateHandler = async (request: Request, params: TParams | undefined) => {
	const id = params?.params?.id;

	return new Response(
		JSON.stringify({
			message: "your hit update item api",
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const GET = authMiddleware(errorMiddleware(getHandler));
export const POST = updateHandler;
