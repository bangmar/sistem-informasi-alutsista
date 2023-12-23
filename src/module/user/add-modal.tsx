"use client";

import { ChangeEvent, Fragment, useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";
import { BiImageAdd, BiSolidHide, BiSolidShow } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

function AddUserModal() {
	let [isOpen, setIsOpen] = useState(false);
	const [isShow, setShow] = useState(false);

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
					<Dialog.Panel className='mx-auto min-w-[450px]  px-4 py-6 rounded-md shadow-sm bg-slate-50'>
						<section className='flex items-center gap-4 mb-2'>
							<BsArrowRight
								className='text-green-700 text-xl cursor-pointer font-bold rotate-180'
								onClick={() => {
									setIsOpen(false);
								}}
							/>
							<h1 className='text-lg text-slate-800 font-medium'>
								Tambahkan Alutsista Baru
							</h1>
						</section>
						<section className='px-10 py-2 flex flex-col gap-4'>
							<input
								id='nip'
								type='number'
								className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 lg:w-[460px] py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
								placeholder='Nomer Anggota'
							/>
							<input
								id='name'
								type='name'
								className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 lg:w-[460px] py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
								placeholder='Nama Lengkap'
							/>

							<section className='flex  items-center'>
								<input
									id='password'
									type={isShow ? "text" : "password"}
									className={`w-full  mb-2 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm lg:w-[460px]`}
									placeholder='Masukan Kata Sandi'
								/>
								<section
									className='relative right-6  bottom-1 w-6 h-6 grid place-items-center cursor-pointer'
									onClick={() => {
										setShow(!isShow);
									}}>
									{isShow ? (
										<BiSolidHide className='text-green-700 text-xl' />
									) : (
										<BiSolidShow className='text-green-700 text-xl' />
									)}
								</section>
							</section>
							<section className='flex  items-center'>
								<input
									id='confirm-password'
									type={isShow ? "text" : "password"}
									className={`w-full  mb-2 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 py-1 placeholder:text-neutral-400 text-sm lg:w-[460px]`}
									placeholder='Konfirmasi Kata Sandi'
								/>
								<section
									className='relative right-6  bottom-1 w-6 h-6 grid place-items-center cursor-pointer'
									onClick={() => {
										setShow(!isShow);
									}}>
									{isShow ? (
										<BiSolidHide className='text-green-700 text-xl' />
									) : (
										<BiSolidShow className='text-green-700 text-xl' />
									)}
								</section>
							</section>
						</section>

						<section className='px-10 pb-2 pt-2'>
							<button
								onClick={() => {
									setIsOpen(false);
								}}
								type='submit'
								className='w-full py-2 text-sm lg:w-[460px] hover:bg-green-700 transition-colors ease-in-out bg-green-600 text-neutral-100 rounded-sm shadow-md'>
								Simpan
							</button>
						</section>
					</Dialog.Panel>
				</section>
			</Dialog>

			<span
				className='grid place-items-center text-neutral-100 text-lg hover:bg-green-700 transition-all ease-in-out duration-300 cursor-pointer w-11 h-11  bg-green-600 rounded-md shadow-sm'
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<IoMdAdd />
			</span>
		</section>
	);
}

export default AddUserModal;
