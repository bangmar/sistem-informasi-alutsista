import prisma from "../../../prisma/client";
import { authMiddleware } from "./auth-middleware";
import { IUserRequest } from "./types";

export const adminMiddleware = (
	handler: (request: IUserRequest) => Promise<Response>
) => {
	return authMiddleware(async (request: IUserRequest) => {
		const { user } = request.user;

		const isRoleAdmin = await prisma.role.findUnique({
			where: {
				id: user.roleId,
			},
			select: {
				name: true,
			},
		});

		if (isRoleAdmin?.name !== "ADMIN") {
			return new Response(
				JSON.stringify({
					message: "Unauthorized: You Dont have Access .",
				}),
				{ status: 401 }
			);
		}
		return handler(request);
	});
};
