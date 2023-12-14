import { errorMiddleware } from "@/server/middleware/error-middleware";
import { login } from "@/server/service/user-service";

async function postHandler(request: Request) {
	const json = await request.json();
	const data = await login(json);

	return new Response(
		JSON.stringify({
			message: "success login user",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}

export const POST = errorMiddleware(postHandler);
