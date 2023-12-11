import { authMiddleware } from "@/server/middleware/auth-middleware";
import { IUserRequest } from "@/server/middleware/types";
import { getMe } from "@/server/service/user-service";

export const getMeHandler = async (request: IUserRequest) => {
	const { user } = request.user;
	const data = await getMe(user.userId as string);

	return new Response(
		JSON.stringify({
			message: "success get me",
			data,
		})
	);
};

export const GET = authMiddleware(getMeHandler);
