"use client";

import logo from "@/assets/home/logo.svg";
import Button from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
	const [isMenuToggled, setMenuToggled] = useState<boolean>(false);

	return (
		<header className='bg-neutral-900 relative flex items-center justify-between lg:px-20 md:px-16 px-10 h-16 mb-6 ease-in-out duration-300 z-50'>
			<Image
				src={logo}
				alt='logo-lautsista'
				width={200}
				height={700}
				className='w-32'
				priority
			/>
			<nav
				className={`${
					isMenuToggled ? "-top-52" : "top-16"
				} text-neutral-200 py-4 md:py-0 px-10 md:px-0  gap-4 md:gap-6 items-center text-sm flex flex-col md:flex-row bg-neutral-800 md:bg-transparent absolute  left-0 right-0 md:static transition-all duration-200 ease-in-out -z-10`}>
				<Link href={"/"} className='hover:font-bold ease-in-out duration-300'>
					Tentang
				</Link>
				<Link
					href={"/panduan"}
					className='hover:font-bold ease-in-out duration-300'>
					Panduan
				</Link>
				<Link
					href={"/daftar"}
					className='hover:font-bold ease-in-out duration-300'>
					Daftar
				</Link>
				<Button
					type='primary'
					name='masuk'
					hasLink={true}
					text='Masuk'
					link='/masuk'
					classname='w-full '
				/>
			</nav>
			<section
				onClick={() => {
					setMenuToggled(!isMenuToggled);
				}}
				className='md:hidden'>
				{isMenuToggled ? (
					<RxCross1 className='text-neutral-200 w-6 h-6  cursor-pointer' />
				) : (
					<BiMenuAltRight className='text-neutral-200 w-6 h-6  cursor-pointer' />
				)}
			</section>
		</header>
	);
};

export default Navbar;
