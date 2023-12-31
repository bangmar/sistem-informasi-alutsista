import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { IUserRequest } from "@/server/middleware/types";
import { getById, remove, update } from "@/server/service/user-service";

const getHandler = async (request: Request) => {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	const data = await getById(id as string);

	return new Response(
		JSON.stringify({
			message: "Success get user",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

const updateHandler = async (request: IUserRequest) => {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	const data: any = await update({ ...(await request.json()), id: id });

	return new Response(
		JSON.stringify({
			message: "Success update user",
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
	const id = searchParams.get("id");
	console.log(id);
	const data = await remove(id as string);

	return new Response(
		JSON.stringify({
			message: "Success delete user",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const POST = adminMiddleware(errorMiddleware(updateHandler));
export const GET = adminMiddleware(errorMiddleware(getHandler));
export const DELETE = adminMiddleware(errorMiddleware(removeHandler));
