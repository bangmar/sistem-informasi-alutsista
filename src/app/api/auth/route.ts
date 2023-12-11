import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { IUserRequest } from "@/server/middleware/types";
import { register } from "@/server/service/user-service";

async function postHandler(request: IUserRequest) {
	const json = await request.json();
	const data = await register(json);

	return new Response(
		JSON.stringify({
			data,
			message: "Success create New User!",
		})
	);
}

export const POST = adminMiddleware(errorMiddleware(postHandler));
