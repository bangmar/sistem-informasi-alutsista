import { getCloudinaryURL } from "@/server/cloudinary";
import { ResponseError } from "@/server/error/response-error";
import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { create, remove } from "@/server/service/item-service";
import { validation } from "@/server/validation";
import { imageSchema } from "@/server/validation/item-validation";

const createHandler = async (request: Request) => {
	const formData = await request.formData();
	const image: File | null = formData.get("image") as File;
	const name = formData.get("name") as string;
	const status = formData.get("status") as string;
	const place = formData.get("place") as string;
	const category = formData.get("category") as string;
	const description = formData.get("description") as string;
	const history = formData.get("history") as string;

	if (!image) {
		throw new ResponseError(400, "please upload an image");
	}

	validation(imageSchema, image);

	const imageURL = await getCloudinaryURL(image);

	const data = await create({
		description,
		history,
		imageURL,
		name,
		place,
		status,
		category,
	});

	return new Response(
		JSON.stringify({
			message: "success upload item",
			data,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
};

export const POST = adminMiddleware(errorMiddleware(createHandler));
