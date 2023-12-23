"use client";

import React, { useState, ChangeEvent } from "react";
import { BiImageAdd } from "react-icons/bi";

const ImageTest: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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
	};

	return (
		<div className='px-10 py-20'>
			<label
				htmlFor='input-image'
				className={`h-40 w-40 shadow-md group relative rounded-md grid place-items-center bg-gray-300 ${
					selectedImage ? "bg-cover" : ""
				}`}
				style={
					selectedImage ? { backgroundImage: `url(${selectedImage})` } : {}
				}>
				<BiImageAdd
					className={`text-4xl  cursor-pointer ${
						selectedImage
							? "text-slate-200 hover:text-slate-700 transition-colors ease-in-out"
							: "text-slate-700"
					}`}
				/>
				<input
					type='file'
					className='hidden'
					id='input-image'
					onChange={handleImageChange}
					accept='image/*'
				/>
			</label>
		</div>
	);
};

export default ImageTest;
