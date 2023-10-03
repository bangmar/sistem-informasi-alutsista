"use client";

import logo from "@/assets/home/logo.svg";
import Button from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";

import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
	return (
		<header className='bg-neutral-900 flex items-center justify-between lg:px-20 md:px-16 px-10 py-3 mb-6 ease-in-out duration-300'>
			<Image
				src={logo}
				alt='logo-lautsista'
				width={200}
				height={700}
				className='w-32'
				priority
			/>
			<nav className='text-neutral-100  gap-6 items-center text-sm hidden md:flex'>
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
				/>
			</nav>
			<BiMenuAltRight className='text-neutral-200 w-6 h-6 md:hidden cursor-pointer' />
		</header>
	);
};

export default Navbar;
