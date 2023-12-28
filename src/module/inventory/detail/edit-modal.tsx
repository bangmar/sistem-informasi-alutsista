"use client";

import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { z } from "zod";
import { updateSchema } from "@/server/validation/item-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const category = [
	{ name: "Senjata Api", value: "Gun" },
	{ name: "Pesawat", value: "Plane" },
	{ name: "Tank", value: "Tank" },
];

export const statusOption = ["Aktif", "Rusak", "Perawatan"];
const EditModal = ({ detail }: any) => {
	const [categories, setCategory] = useState(category[0]);
	const [statuses, setStatuses] = useState(statusOption[0]);

	let [isOpen, setIsOpen] = useState(false);
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

	const onsubmit = (data: any) => {
		console.log("submmited : ", data);
	};

	useEffect(() => {
		reset(detail);
	}, [reset, detail]);

	return (
		<section className='w-full'>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='relative z-50'>
				<div
					className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm opacity-60'
					aria-hidden='true'
				/>

				<section className='fixed inset-0 flex w-screen items-center justify-center'>
					<Dialog.Panel className='mx-auto min-w-[600px]  px-4 py-6 rounded-md shadow-sm bg-slate-50'>
						<section className='flex items-center gap-4'>
							<BsArrowRight
								className='text-green-700 text-xl cursor-pointer font-bold rotate-180'
								onClick={() => {
									setIsOpen(false);
								}}
							/>
							<h1 className='text-lg text-slate-800 font-medium'>
								Edit Alutsista nama
							</h1>
						</section>
						<form onSubmit={handleSubmit(onsubmit)}>
							<section className='px-9 pt-4 flex gap-6 mb-4'>
								<label
									htmlFor='input-image'
									className={`h-40 w-40 flex-shrink-0 shadow-md group relative rounded-md grid place-items-center bg-gray-300 ${
										selectedImage ? "bg-cover" : ""
									}`}
									style={
										selectedImage
											? { backgroundImage: `url(${selectedImage})` }
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
										{...register("imageURL")}
										type='file'
										className='hidden'
										id='input-image'
										onChange={handleImageChange}
										accept='image/*'
									/>
								</label>
								<section className='w-full flex flex-col gap-1 py-2 '>
									<input
										{...register("name")}
										id='name'
										type='text'
										className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
										placeholder='Nama Alutsista'
									/>
									<input
										{...register("place")}
										id='place'
										type='text'
										className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
										placeholder='Pangkalan'
									/>
									<Listbox
										{...register("category")}
										value={categories}
										onChange={(selectedCategory) => {
											setValue("category", selectedCategory.value);
											setCategory(selectedCategory);
										}}
										as={"section"}
										className={"w-full relative z-10 mb-1"}>
										<Listbox.Button className='relative flex w-full border-b-2 border-green-700/40 items-center justify-between cursor-pointer  bg-transparent px-1 py-1 text-slate-600 focus:border-green-700 transition-all duration-300 ease-in-out shadow-sm text-sm mb-1'>
											<span className='block truncate '>
												{" "}
												{categories.name}
											</span>
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
										{...register("status")}
										value={statusOption[0]}
										onChange={(selectedStatus) => {
											setValue("status", selectedStatus);
											setStatuses(selectedStatus);
										}}
										as={"section"}
										className={"w-full relative mb-1"}>
										<Listbox.Button className='relative text-slate-600 flex w-full border-b-2 border-green-700/40 items-center justify-between cursor-pointer bg-transparent px-1 py-1 focus:border-green-700 transition-all duration-300 ease-in-out shadow-sm text-sm mb-1'>
											<span className='block truncate '> {statuses}</span>
											<FaAngleDown className='text-green-700' />
										</Listbox.Button>
										<Transition
											as={Fragment}
											leave='transition ease-in duration-100'
											leaveFrom='opacity-100'
											leaveTo='opacity-0'>
											<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black/5 focus:outline-none text-sm'>
												{statusOption.map((status, index) => (
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
								<label
									htmlFor='description'
									className='text-sm  text-slate-800'>
									Deskripsi
								</label>
								<textarea
									{...register("description")}
									name='description'
									id='description'
									cols={10}
									className='w-full h-24 mb-2  mt-1 text-slate-600 border-2 rounded-md shadow-sm border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent '
								/>
							</section>
							<section className='px-10 pb-2 pt-2'>
								<button
									type='submit'
									className='w-full py-2 text-sm hover:bg-green-700 transition-colors ease-in-out bg-green-600 text-neutral-100 rounded-sm shadow-md'>
									Simpan
								</button>
							</section>
						</form>
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
