import jwt from "jsonwebtoken";
import { IUserRequest, TParams } from "./types";

const secretKey: string = "TESTSECRETDULU";

export const authMiddleware = (
	handler: (request: IUserRequest, params?: TParams) => Promise<Response>
) => {
	return async (request: IUserRequest, params?: TParams) => {
		const token = request.headers.get("authorization")?.replace("Bearer ", "");
		if (!token) {
			return new Response(
				JSON.stringify({
					message: "Unauthorized: No token provided.",
				}),
				{ status: 401 }
			);
		}
		try {
			const decoded = jwt.verify(token, secretKey);
			request.user = decoded;
			return handler(request, params);
		} catch (error) {
			return new Response(
				JSON.stringify({ message: "Unauthorized: Invalid token." })
			);
		}
	};
};
