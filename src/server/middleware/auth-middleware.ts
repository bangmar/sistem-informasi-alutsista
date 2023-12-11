import jwt from "jsonwebtoken";
import { IUserRequest } from "./types";

const secretKey: string = "TESTSECRETDULU";

export const authMiddleware = (
	handler: (request: IUserRequest) => Promise<Response>
) => {
	return async (request: IUserRequest) => {
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
			return handler(request);
		} catch (error) {
			return new Response(
				JSON.stringify({ message: "Unauthorized: Invalid token." })
			);
		}
	};
};
