import { ResponseError } from "@/server/error/response-error";
import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { IUserRequest } from "@/server/middleware/types";
import { getById, remove, update } from "@/server/service/user-service";

export const getHandler = async (request: Request) => {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	const data = await getById(id as string);

	return new Response(
		JSON.stringify({
			message: "Success get user",
			data,
		})
	);
};

export const updateHandler = async (request: IUserRequest) => {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	const data = await update({ ...(await request.json()), id: id });

	return new Response(
		JSON.stringify({
			message: "Success update user",
			data,
		})
	);
};

export const removeHandler = async (request: Request) => {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	console.log(id);
	const data = await remove(id as string);

	return new Response(
		JSON.stringify({
			message: "Success delete user",
			data,
		})
	);
};

export const POST = adminMiddleware(errorMiddleware(updateHandler));
export const GET = adminMiddleware(errorMiddleware(getHandler));
export const DELETE = adminMiddleware(errorMiddleware(removeHandler));
