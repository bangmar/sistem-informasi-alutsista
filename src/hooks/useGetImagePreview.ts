import { ChangeEvent, useState } from "react";

export const useGetImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const file = e.target.files?.[0];

	if (file && file.type.startsWith("image/")) {
		const reader = new FileReader();
		reader.onload = () => {
			setSelectedImage(reader.result as string);
		};
		reader.readAsDataURL(file);
	} else {
		setSelectedImage(null);
	}

	return selectedImage;
};
