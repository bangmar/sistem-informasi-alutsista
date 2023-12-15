import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { TParams } from "@/server/middleware/types";
import { create, remove, update } from "@/server/service/history-service";

const addHandler = async (request: Request, params: TParams | undefined) => {
	const itemId = params?.params?.id as string;
	const json = await request.json();
	const history = json.history;

	const data = await create({ history, itemId });

	return new Response(
		JSON.stringify({
			message: "success add history",
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
	const { searchParams } = new URL(request.url);
	const itemId = params?.params?.id as string;
	const json = await request.json();

	const history = json.history;
	const historyId = searchParams.get("id") as string;

	const data = await update({ history, historyId, itemId });

	return new Response(
		JSON.stringify({
			message: "success update history",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

const removeHandler = async (request: Request) => {
	const { searchParams } = new URL(request.url);
	const historyId = searchParams.get("id") as string;

	await remove(historyId);

	return new Response(
		JSON.stringify({
			message: "success delete history",
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const POST = adminMiddleware(errorMiddleware(addHandler));
export const PUT = adminMiddleware(errorMiddleware(updateHandler));
export const DELETE = adminMiddleware(errorMiddleware(removeHandler));
