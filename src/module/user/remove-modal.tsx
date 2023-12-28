"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/server/validation/user-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetAll, useRegister, useRemove } from "./hook";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function RemoveModal({ data }: any) {
	let [isOpen, setIsOpen] = useState(false);

	const [error, setError] = useState("");

	const { mutate, isLoading } = useRemove();
	const { refetch } = useGetAll();

	const onSubmit = () => {
		try {
			mutate(data.id, {
				onSuccess: () => {
					console.log("sukses remove user");
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
						<section className='px-10 mb-2 text-sm text-center'>
							<p>
								Hapus <span className='font-bold'>{data?.fullname}</span> dari
								daftar Pengguna
							</p>
							{error ? <p>terjadi errro : {error}</p> : null}
						</section>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
							className='px-10 pt-2 flex  gap-4'>
							<button
								type='submit'
								className='w-full grid place-items-center py-2 text-sm  hover:bg-red-700 transition-colors ease-in-out bg-red-600 text-neutral-100 rounded-sm shadow-md'>
								{isLoading ? (
									<AiOutlineLoading3Quarters
										className={`animate-spin text-sm`}
									/>
								) : (
									"Hapus"
								)}
							</button>
							<button
								type='button'
								onClick={() => {
									setIsOpen(false);
								}}
								className='w-full py-2 text-sm  hover:bg-green-700 transition-colors ease-in-out bg-green-600 text-neutral-100 rounded-sm shadow-md'>
								Batal
							</button>
						</form>
					</Dialog.Panel>
				</section>
			</Dialog>

			<span
				onClick={() => {
					setIsOpen(true);
				}}>
				<MdOutlineDelete className='text-red-700 cursor-pointer  hover:bg-gray-100 hover:rounded-md hover:shadow-sm hover:p-0.5 transition-all duration-200 ease-in-out' />
			</span>
		</section>
	);
}

export default RemoveModal;
