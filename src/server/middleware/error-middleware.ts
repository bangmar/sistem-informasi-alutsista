import { ResponseError } from "../error/response-error";
import { IUserRequest, TParams } from "./types";

export const errorMiddleware = (
	handler: (request: IUserRequest, params?: TParams) => Promise<Response>
) => {
	return async (request: IUserRequest, params?: TParams) => {
		try {
			return await handler(request, params);
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
