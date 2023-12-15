import { v2 as cloudinary } from "cloudinary";

export const couldinaryConfig = cloudinary.config({
	cloud_name: "dehrqyxo1",
	api_key: "763337891441753",
	api_secret: "d9I9oHdRTyvTDIzGgEtaQZwbDPA",
});

export const getCloudinaryURL = async (image: File) => {
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

	return imageURL;
};
