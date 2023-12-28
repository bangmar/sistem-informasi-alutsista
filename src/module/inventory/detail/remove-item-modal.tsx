"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AxiosError } from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { useRemoveitem } from "./hook";
import { useRouter } from "next/navigation";

function RemoveItemModal({ id, name }: any) {
	let [isOpen, setIsOpen] = useState(false);

	const [error, setError] = useState("");

	const { mutate, isLoading } = useRemoveitem();

	const router = useRouter();

	const onSubmit = () => {
		console.log(id);
		try {
			mutate(id, {
				onSuccess: () => {
					console.log("sukses remove item");
					setIsOpen(false);
					router.push("/dashboard/inventory", { scroll: false });
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
						<section className='px-10 mb-2 text-sm text-center'>
							<p>
								Hapus item <span className='font-bold'>{name}</span> ini dari
								daftar ?
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

			<section
				className='px-4 py-2 flex w-full  items-center transition-colors duration-300 ease-in-out gap-4 cursor-pointer hover:bg-red-600 bg-red-500 text-slate-100 text-sm rounded-md shadow-sm'
				onClick={() => {
					setIsOpen(true);
				}}>
				<GoTrash className='text-lg' />
				<h1>Hapus Alutsista</h1>
			</section>
		</section>
	);
}

export default RemoveItemModal;
