"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "@/components/atoms/button";
import { z } from "zod";
import { updateSchema } from "@/server/validation/history-validaiton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BsArrowRight } from "react-icons/bs";
import { useGetItemDetail, useUpdateHistory } from "./hook";
import { AxiosError } from "axios";

function EditHistoryModal({ historyId, itemId, currentHistory }: any) {
	let [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState("");

	type UpdateHistorySchema = z.infer<typeof updateSchema>;

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateHistorySchema>({
		resolver: zodResolver(updateSchema),
	});

	const { mutate, isLoading, isError } = useUpdateHistory(itemId, historyId);
	const { refetch } = useGetItemDetail(itemId);

	const onSubmit = (data: any) => {
		console.log(data);
		try {
			mutate(data, {
				onSuccess: () => {
					console.log("sukses update history");
					setIsOpen(false);
					refetch();
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
		reset({ history: currentHistory, historyId: historyId, itemId: itemId });
	}, [currentHistory, historyId, itemId, reset]);

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
								text='Perbarui Riwayat'
								classname='text-neutral-200 !bg-green-600 text-sm mb-2  grid place-items-center w-full'
								name='update-riwayat'
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
			<span
				onClick={() => {
					setIsOpen(true);
				}}>
				<MdOutlineEdit className='text-green-700 cursor-pointer hover:bg-gray-100 hover:rounded-md hover:shadow-sm hover:p-0.5 transition-all duration-200 ease-in-out' />
			</span>
		</section>
	);
}

export default EditHistoryModal;
