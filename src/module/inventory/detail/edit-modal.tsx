"use client";

import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/atoms/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGetItemDetail, useUpdateDetail } from "./hook";
import { useGetItem } from "../hook";

export const category = [
	{ name: "Senjata Api", value: "Gun" },
	{ name: "Pesawat", value: "Plane" },
	{ name: "Tank", value: "Tank" },
];

export const status = ["Aktif", "Rusak", "Perawatan"];

const EditModal = ({ detail }: any) => {
	const [categories, setCategory] = useState(category[0]);
	const [statuses, setStatuses] = useState(status[0]);

	let [isOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const MAX_FILE_SIZE = 2 * 1024 * 1024;
	const updateSchema = z.object({
		name: z.string().min(1, { message: "masukan nama alat alutsista" }),
		status: z.string().min(1, { message: "pilih status yang sesuai" }),
		place: z.string().min(1, { message: "masukan nama pangkalan alutsista" }),
		description: z.string().min(1, { message: "masukan deskripsi alutsista" }),
		category: z.string().min(1, { message: "pilih category yang sesuai" }),
		image: z
			.any()
			.refine(
				(files) => files !== undefined && files?.length >= 1,
				"Pilih 1 gambar alutsista"
			)
			.refine(
				(files) =>
					files !== undefined &&
					files?.[0]?.size <= MAX_FILE_SIZE &&
					files?.[0]?.type.startsWith("image/"),
				"gambar tidak boleh lebih dari 2 MB"
			)
			.optional(),
	});

	type UpdateSchame = z.infer<typeof updateSchema>;

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		reset,
	} = useForm<UpdateSchame>({
		resolver: zodResolver(updateSchema),
	});

	const { mutate, isLoading } = useUpdateDetail(detail?.id as string);
	const { refetch } = useGetItemDetail(detail?.id as string);
	const onsubmit = (data: any) => {
		try {
			mutate(
				data.image
					? {
							...data,
							name: data.name as string,
							image: data.image[0] as File,
							place: data.place as string,
							status: data.status as string,
							category: data.category as string,
							history: data.history as string,
							description: data.description as string,
					  }
					: {
							...data,
							name: data.name as string,
							place: data.place as string,
							status: data.status as string,
							category: data.category as string,
							history: data.history as string,
							description: data.description as string,
					  },
				{
					onSuccess: () => {
						console.log("sukses update detail");
						setIsOpen(false);
						refetch();
					},
				}
			);
		} catch (error) {
			console.log(error);
		}
	};

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file && file.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedImage(reader.result as string);
			};
			reader.readAsDataURL(file);
			setValue("image", e.target.files);
		} else {
			setSelectedImage(null);
		}
	};

	useEffect(() => {
		reset(detail);
	}, [reset, detail]);

	return (
		<section>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='relative z-50'>
				<div
					className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm opacity-60'
					aria-hidden='true'
				/>

				<section className='fixed inset-0 flex w-screen items-center justify-center'>
					<Dialog.Panel
						as='form'
						onSubmit={handleSubmit(onsubmit)}
						className='mx-auto min-w-[600px]  px-4 py-6 rounded-md shadow-sm bg-slate-50'>
						<section className='flex items-center gap-4'>
							<BsArrowRight
								className='text-green-700 text-xl cursor-pointer font-bold rotate-180'
								onClick={() => {
									setIsOpen(false);
								}}
							/>
							<h1 className='text-lg text-slate-800 font-medium'>
								Edit Alutsista <span className='font-bold'>{detail?.name}</span>
							</h1>
						</section>
						<section className='px-9 pt-4 flex  gap-6 mb-2'>
							<section className='w-full py-2'>
								<label
									htmlFor='input-image'
									className={`h-44 w-full flex-shrink-0 shadow-md group relative rounded-md grid place-items-center bg-gray-100 ${
										detail?.imageURL || selectedImage ? "bg-cover" : ""
									}`}
									style={
										selectedImage
											? { backgroundImage: `url(${selectedImage})` }
											: detail?.imageURL
											? { backgroundImage: `url(${detail?.imageURL})` }
											: {}
									}>
									<BiImageAdd
										className={`text-4xl  cursor-pointer ${
											selectedImage
												? "text-slate-200 hover:text-slate-700 transition-colors ease-in-out"
												: "text-slate-700"
										}`}
									/>
									<input
										onChange={handleImageChange}
										type='file'
										id='input-image'
										accept='image/*'
										placeholder='Pilih Gambar'
										className='w-full hidden   '
									/>
								</label>
								{errors.image && (
									<p className='text-xs text-red-500 px-1 pt-2 mb-1'>
										{errors?.image?.message as string}
									</p>
								)}
							</section>

							<section className='w-full flex flex-col gap-2 py-2 '>
								<input
									{...register("name")}
									id='name'
									type='text'
									className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-gray-200 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
									placeholder='Nama Alutsista'
								/>
								{errors.name && (
									<p className='text-xs text-red-500 px-1 -mt-2 mb-1'>
										{errors.name.message}
									</p>
								)}
								<input
									{...register("place")}
									id='place'
									type='text'
									className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-gray-200 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
									placeholder='Pangkalan'
								/>
								{errors.place && (
									<p className='text-xs text-red-500 px-1 -mt-2 mb-1'>
										{errors.place.message}
									</p>
								)}
								<Listbox
									{...register("category")}
									value={categories}
									onChange={(e): any => {
										setValue("category", e.value);
										setCategory(e);
									}}
									as={"section"}
									className={"w-full relative z-10 mb-1"}>
									<Listbox.Button className='relative flex w-full border-b-2 border-gray-200 items-center justify-between cursor-pointer  bg-transparent px-1 py-1 text-slate-600  transition-all duration-300 ease-in-out shadow-sm text-sm mb-1'>
										<span className='block truncate '> {categories.name}</span>
										<FaAngleDown className='text-green-700' />
									</Listbox.Button>
									<Transition
										as={Fragment}
										leave='transition ease-in duration-100'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'>
										<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black/5 focus:outline-none text-sm'>
											{category.map((cat, index) => (
												<Listbox.Option
													key={index}
													className={({ active }) =>
														`relative cursor-pointer select-none py-2 px-4 ${
															active
																? "bg-green-400 text-green-900"
																: "text-gray-900"
														}`
													}
													value={cat}>
													{({ selected }) => (
														<>
															<span
																className={`block truncate ${
																	selected ? "font-medium" : "font-normal"
																}`}>
																{cat.name}
															</span>
														</>
													)}
												</Listbox.Option>
											))}
										</Listbox.Options>
									</Transition>
								</Listbox>

								<Listbox
									value={statuses}
									{...register("status")}
									onChange={(e): any => {
										setValue("status", e);
										setStatuses(e);
									}}
									as={"section"}
									className={"w-full relative mb-1"}>
									<Listbox.Button className='relative text-slate-600 flex w-full border-b-2 border-gray-200 items-center justify-between cursor-pointer bg-transparent px-1 py-1 focus:border-green-700 transition-all duration-300 ease-in-out shadow-sm text-sm mb-1'>
										<span className='block truncate '> {statuses}</span>
										<FaAngleDown className='text-green-700' />
									</Listbox.Button>
									<Transition
										as={Fragment}
										leave='transition ease-in duration-100'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'>
										<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black/5 focus:outline-none text-sm'>
											{status.map((status, index) => (
												<Listbox.Option
													key={index}
													className={({ active }) =>
														`relative cursor-pointer select-none py-2 px-4 ${
															active
																? "bg-green-400 text-green-900"
																: "text-gray-900"
														}`
													}
													value={status}>
													{({ selected }) => (
														<>
															<span
																className={`block truncate ${
																	selected ? "font-medium" : "font-normal"
																}`}>
																{status}
															</span>
														</>
													)}
												</Listbox.Option>
											))}
										</Listbox.Options>
									</Transition>
								</Listbox>
							</section>
						</section>
						<section className='px-9'>
							<label htmlFor='description' className='text-sm  text-slate-800'>
								Deskripsi
							</label>
							<textarea
								{...register("description")}
								name='description'
								id='description'
								cols={10}
								className='w-full h-24 mb-2  mt-1 text-slate-600 border-2 rounded-md shadow-sm border-gray-200 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent '
							/>
							{errors.description && (
								<p className='text-xs text-red-500 px-1 -mt-2 mb-1'>
									{errors.description.message}
								</p>
							)}

							<Button
								text='Simpan'
								classname='text-neutral-200 !bg-green-600 text-sm mb-2 mt-4 grid place-items-center w-full'
								name='simpan'
								cat='primary'
								type='submit'
								hasIcon={true}
								icon={
									<AiOutlineLoading3Quarters
										className={`${
											isLoading ? "animate-spin" : "hidden"
										} text-sm ml-2`}
									/>
								}
							/>
						</section>
					</Dialog.Panel>
				</section>
			</Dialog>

			<button
				id='edit-lautsista'
				name='edit-lautsista'
				type='button'
				className='px-4 py-2 w-full flex items-center transition-colors duration-300 ease-in-out gap-4 cursor-pointer hover:bg-green-700 bg-green-600 text-slate-100 text-sm rounded-md shadow-sm'
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<MdOutlineModeEdit className='text-lg' />
				<h1>Edit Alutsista</h1>
			</button>
		</section>
	);
};

export default EditModal;
