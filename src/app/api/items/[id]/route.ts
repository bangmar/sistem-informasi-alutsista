import { getCloudinaryURL } from "@/server/cloudinary";
import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { authMiddleware } from "@/server/middleware/auth-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { TParams } from "@/server/middleware/types";
import { getById, remove, update } from "@/server/service/item-service";
import { validation } from "@/server/validation";
import { imageSchema } from "@/server/validation/item-validation";

const getHandler = async (request: Request, params: TParams | undefined) => {
	const id = params?.params?.id;
	const data = await getById(id as string);

	return new Response(
		JSON.stringify({
			message: "success get item by id",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

const updateHandler = async (request: Request, params: TParams | undefined) => {
	const formData = await request.formData();
	const id = params?.params?.id as string;
	const image: File | null = formData.get("image") as File;
	const name = formData.get("name") as string;
	const status = formData.get("status") as string;
	const place = formData.get("place") as string;
	const category = formData.get("category") as string;
	const description = formData.get("description") as string;

	let imageURL = "";

	if (image) {
		validation(imageSchema, image);
		imageURL = await getCloudinaryURL(image);
	}

	const data = await update({
		id,
		description,
		imageURL,
		name,
		place,
		status,
		category,
	});

	return new Response(
		JSON.stringify({
			message: "success update item",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

const deleteHandler = async (requset: Request, params: TParams | undefined) => {
	const id = params?.params?.id;

	await remove(id as string);

	return new Response(
		JSON.stringify({
			message: "success  remove item",
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const GET = authMiddleware(errorMiddleware(getHandler));
export const PUT = adminMiddleware(errorMiddleware(updateHandler));
export const DELETE = adminMiddleware(errorMiddleware(deleteHandler));
