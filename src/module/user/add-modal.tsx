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
import { useGetAll, useRegister } from "./hook";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "@/components/atoms/button";

function AddUserModal() {
	let [isOpen, setIsOpen] = useState(false);
	const [isShow, setShow] = useState(false);

	const [error, setError] = useState("");

	type RegisterSchema = z.infer<typeof registerSchema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
	});

	const { mutate, isError, isLoading } = useRegister();
	const { refetch } = useGetAll();

	const onSubmit = (data: any) => {
		try {
			mutate(data, {
				onSuccess: () => {
					console.log("sukses create user");
					setIsOpen(false);
					refetch();
					reset({ email: "", fullname: "", nip: "", password: "" });
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
					<Dialog.Panel className='mx-auto min-w-[450px]   px-8 py-8 rounded-md shadow-sm bg-slate-50'>
						<section className='flex items-center gap-4 mb-2'>
							<BsArrowRight
								className='text-green-700 text-xl cursor-pointer font-bold rotate-180'
								onClick={() => {
									setIsOpen(false);
								}}
							/>
							<h1 className='text-lg text-slate-800 font-medium'>
								Tambahkan Pengguna Baru
							</h1>
						</section>

						<form
							action=''
							onSubmit={handleSubmit(onSubmit)}
							className='px-10 py-2 flex flex-col gap-4'>
							<input
								{...register("nip")}
								id='nip'
								type='number'
								className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 lg:w-[460px] py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
								placeholder='Nomer Anggota'
							/>
							{errors.nip && (
								<p className='text-xs text-red-500 -mt-4 px-1'>
									{errors.nip.message}
								</p>
							)}
							<input
								{...register("fullname")}
								id='fullname'
								type='fullname'
								className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 lg:w-[460px] py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
								placeholder='Nama Lengkap'
							/>
							{errors.fullname && (
								<p className='text-xs text-red-500 -mt-4 px-1'>
									{errors.fullname.message}
								</p>
							)}
							<input
								{...register("email")}
								id='email'
								type='email'
								className={`w-full mb-2 text-slate-600 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-1 lg:w-[460px] py-1 placeholder:text-neutral-400 text-sm bg-transparent `}
								placeholder='Email'
							/>
							{errors.email && (
								<p className='text-xs text-red-500 -mt-4 px-1'>
									{errors.email.message}
								</p>
							)}

							<section className='flex  items-center'>
								<input
									{...register("password")}
									id='password'
									autoComplete='new-password'
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
							{errors.password && (
								<p className='text-xs text-red-500 -mt-4 px-1'>
									{errors?.password.message}
								</p>
							)}
							{isError && (
								<p className='text-center w-full lg:w-[460px]  text-sm text-red-500'>
									Opps ... {error}
								</p>
							)}
							<Button
								text='Daftar'
								classname='text-neutral-200 !bg-green-600 !text-sm mb-2  grid place-items-center w-full lg:w-[460px]'
								name='daftar'
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
