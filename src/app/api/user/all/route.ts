import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { getAll } from "@/server/service/user-service";

const getHanlder = async () => {
	const data = await getAll();

	return new Response(
		JSON.stringify({
			message: "success get all users",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const GET = adminMiddleware(errorMiddleware(getHanlder));
