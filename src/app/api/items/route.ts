import { couldinaryConfig } from "@/server/cloudinary";
import { ResponseError } from "@/server/error/response-error";
import { adminMiddleware } from "@/server/middleware/admin-middleware";
import { errorMiddleware } from "@/server/middleware/error-middleware";
import { create } from "@/server/service/item-service";
import { validation } from "@/server/validation";
import { imageSchema } from "@/server/validation/item-validation";
import { v2 as cloudinary } from "cloudinary";

const createHandler = async (request: Request) => {
	couldinaryConfig;

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

	const bytes = await image.arrayBuffer();
	const buffer = Buffer.from(bytes);
	let imageURL = "";

	const cloudinaryUpload = new Promise((resolve, reject) => {
		cloudinary.uploader
			.upload_stream(
				{
					folder: "lautsista",
					public_id: image.name,
					resource_type: "image",
				},
				(error, result) => {
					if (error) {
						console.error("Error uploading image to Cloudinary:", error);
						reject(error);
					} else {
						imageURL = result?.url as string;
						resolve(imageURL);
					}
				}
			)
			.end(buffer);
	});

	await cloudinaryUpload;

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
