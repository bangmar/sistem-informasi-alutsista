import Image from "next/image";
import { FC, ReactNode } from "react";

import thumbnail from "@/assets/auth/thumb.svg";

type TAuthLayoutProps = {
	imgPosition: "right" | "left";

	children: ReactNode;
	type: "login" | "register";
};

import greenLogo from "@/assets/auth/green-logo.svg";
import Link from "next/link";

const AuthLayout: FC<TAuthLayoutProps> = ({
	imgPosition,
	children,

	type,
}) => {
	return (
		<section className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto relative max-w-[2000px]'>
			<figure
				className={`${
					imgPosition === "right" ? "order-3" : "order-2 lg:order-1"
				} h-screen overflow-hidden `}>
				<Image
					src={thumbnail}
					alt='auth-image'
					height={200}
					width={100}
					priority
					className='w-full h-full object-cover'></Image>
			</figure>
			<section className='px-14 pt-16 pb-10 flex flex-col justify-between order-1'>
				<section>
					<Link href={"/"} className='mb-10 block'>
						<Image
							src={greenLogo}
							alt='logo'
							height={500}
							width={200}
							loading='lazy'
						/>
					</Link>

					{type === "login" ? (
						<section>
							<h1 className='text-3xl font-bold mb-2'>Masuk Kedalam Akun</h1>
							<p>
								Jelajahi Informasi Alutsista dari dalam web Bandar Tempatnya
								Senjata
							</p>
						</section>
					) : (
						<section>
							<h1 className='text-3xl font-bold mb-2'>Buat Akun Anda</h1>
							<p>
								Lengkapi informasi data diri untuk dapat membuat akun dan masuk
								ke sistem
							</p>
						</section>
					)}
					{children}
				</section>

				<section>
					{type === "login" ? (
						<p className=''>
							Belum punya akun ?{" "}
							<Link
								href={"/auth/daftar"}
								className='font-bold text-green-700 text-sm'>
								Buat Sekarang
							</Link>
						</p>
					) : (
						<p className=''>
							Sudah punya akun ?{" "}
							<Link
								href={"/auth/masuk"}
								className='font-bold text-green-700 text-sm'>
								Masuk Sekarang
							</Link>
						</p>
					)}
				</section>
			</section>
		</section>
	);
};

export default AuthLayout;
