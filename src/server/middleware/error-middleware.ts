import { ResponseError } from "../error/response-error";
import { IUserRequest } from "./types";

export const errorMiddleware = (
	handler: (request: IUserRequest) => Promise<Response>
) => {
	return async (request: IUserRequest) => {
		try {
			return await handler(request);
		} catch (error) {
			if (error instanceof ResponseError) {
				return new Response(
					JSON.stringify({
						error: error?.message,
					}),
					{
						status: error.status,
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
			} else {
				return new Response(
					JSON.stringify({
						error: "Internal Server Error",
					}),
					{
						status: 500,
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
			}
		}
	};
};
