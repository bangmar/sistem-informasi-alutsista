"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { MdHistory, MdOutlineDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "@/components/atoms/button";
import { z } from "zod";
import { createSchema } from "@/server/validation/history-validaiton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddHistory, useGetItemDetail } from "./hook";
import { AxiosError } from "axios";
import { BsArrowRight } from "react-icons/bs";

function AddHistoryModal({ id }: any) {
	let [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState("");

	const { mutate, isLoading, isError } = useAddHistory(id);

	type AddHistorySchema = z.infer<typeof createSchema>;

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<AddHistorySchema>({
		resolver: zodResolver(createSchema),
	});

	const { refetch } = useGetItemDetail(id as string);

	const onSubmit = (data: any) => {
		console.log(data);
		try {
			mutate(data, {
				onSuccess: () => {
					console.log("sukses add history");
					setIsOpen(false);
					refetch();
					reset({ history: "", itemId: id });
				},
				onError: (error: AxiosError<any, any>) => {
					setError(error.response?.data.error);
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		reset({ itemId: id });
	}, [id, reset]);

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
					<Dialog.Panel className='mx-auto min-w-[450px] max-w-[550px]   px-8 py-8 rounded-md shadow-sm bg-slate-50'>
						<section className='px-10 mb-2 flex items-center gap-2 text-sm '>
							<BsArrowRight
								className='text-green-700 text-xl cursor-pointer font-bold rotate-180'
								onClick={() => {
									setIsOpen(false);
								}}
							/>
							<p>Tambahkan Riwayat</p>
						</section>
						<form className='px-10' onSubmit={handleSubmit(onSubmit)}>
							<textarea
								{...register("history")}
								name='history'
								id='history'
								cols={10}
								className='w-96 mt-1 h-40 mb-2 text-slate-600 border-2 rounded-md shadow-sm border-gray-200 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm bg-transparent '
							/>
							{errors.history && (
								<p className='text-xs text-red-500 -mt-4 px-1'>
									{errors.history.message}
								</p>
							)}
							{isError && (
								<p className='text-center w-full lg:w-[460px]  text-sm text-red-500'>
									Opps ... {error}
								</p>
							)}
							<Button
								text='Tambah Riwayat'
								classname='text-neutral-200 !bg-green-600 text-sm mb-2  grid place-items-center w-full'
								name='tambah-riwayat'
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
						</form>
					</Dialog.Panel>
				</section>
			</Dialog>

			<section
				className='px-4 py-2 flex flex-shrink-1 w-full items-center transition-colors duration-300 ease-in-out gap-4 cursor-pointer hover:bg-yellow-600 bg-yellow-500 text-slate-100 text-sm rounded-md shadow-sm'
				onClick={() => {
					setIsOpen(true);
				}}>
				<MdHistory className='text-lg' />
				<h1>Tambah Riwayat</h1>
			</section>
		</section>
	);
}

export default AddHistoryModal;
