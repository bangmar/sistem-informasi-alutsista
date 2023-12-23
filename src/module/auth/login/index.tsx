"use client";
import Button from "@/components/atoms/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { loginSchema } from "@/server/validation/user-validation";
import { TLoginPayload } from "./api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useLogin } from "./hook";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

type LoginSchema = z.infer<typeof loginSchema>;

const LoginModule = () => {
	const [error, setError] = useState("");
	const [isShow, setShow] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const { mutate, isLoading, isError } = useLogin();

	const onSubmit = async (data: TLoginPayload) => {
		try {
			mutate(data, {
				onSuccess: () => {
					console.log("sukses login");
					router.push("/dashboard/inventory");
				},
				onError: (error: AxiosError<any, any>) => {
					setError(error.response?.data.error);
				},
			});
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<main className='py-10'>
			<form
				action=''
				className='flex flex-col'
				onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("nip")}
					id='NIP'
					type='number'
					className={`w-full mb-2 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-2 py-1 placeholder:text-neutral-400 text-sm lg:w-[460px]`}
					placeholder='Masukan NIP Anggota'
				/>
				{errors.nip && (
					<p className='text-xs text-red-500 px-2'>{errors.nip.message}</p>
				)}

				<section className='flex mt-6 items-center'>
					<input
						{...register("password")}
						id='password'
						type={isShow ? "text" : "password"}
						className={`w-full  mb-2 remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-2 py-1 placeholder:text-neutral-400 text-sm lg:w-[460px]`}
						placeholder='Masukan Kata Sandi'
					/>
					<section
						className='relative right-6 bottom-1 w-6 h-6 grid place-items-center cursor-pointer'
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
					<p className='text-xs text-red-500 px-2'>{errors.password.message}</p>
				)}

				<Button
					text='Masuk'
					classname='text-neutral-200 mb-2 mt-6 grid place-items-center w-full lg:w-[460px]'
					name='masuk'
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
				{isError && (
					<p className='text-center w-full lg:w-[460px]  text-sm text-red-500'>
						Opps ... {error}
					</p>
				)}
			</form>
		</main>
	);
};

export default LoginModule;
