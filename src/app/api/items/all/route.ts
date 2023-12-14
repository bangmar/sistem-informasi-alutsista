import { authMiddleware } from "@/server/middleware/auth-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { getAll } from "@/server/service/item-service";

const getHandler = async () => {
	const data = await getAll();

	return new Response(
		JSON.stringify({
			message: "success get all items",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const GET = authMiddleware(errorMiddleware(getHandler));
