import { authMiddleware } from "@/server/middleware/auth-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { getAll } from "@/server/service/user-service";

const getHanlder = async () => {
	const data = await getAll();

	return new Response(
		JSON.stringify({
			message: "success get all users",
			data,
		})
	);
};

export const GET = authMiddleware(errorMiddleware(getHanlder));
