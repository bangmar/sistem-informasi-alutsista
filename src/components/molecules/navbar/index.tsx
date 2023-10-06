"use client";

import logo from "@/assets/home/logo.svg";
import Button from "@/components/atoms/button";
import { useIsScroll } from "@/hooks/useIsScroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
	const [isMenuToggled, setMenuToggled] = useState<boolean>(false);

	const { isSticky } = useIsScroll();

	const pathname = usePathname();

	return (
		<header
			className={` flex items-center justify-between lg:px-20 md:px-16 px-10 transition-all ease-in-out duration-300 z-50 ${
				isSticky
					? "fixed top-0 left-0 right-0 h-16 bg-neutral-900"
					: "relative  h-20"
			} ${pathname.includes("panduan") ? "bg-neutral-900" : ""} `}>
			<Link href={"/"}>
				<Image
					src={logo}
					alt='logo-lautsista'
					width={200}
					height={700}
					className='w-32'
					priority
				/>
			</Link>
			<nav
				className={`${
					!isMenuToggled ? "-top-60" : isSticky ? "top-16" : "top-20"
				} text-neutral-100 py-8 md:py-0 px-10 md:px-0  gap-5 md:gap-8 items-center text-sm flex flex-col md:flex-row bg-neutral-800 md:bg-transparent absolute  left-0 right-0 md:static transition-all duration-200 ease-in-out -z-10`}>
				<Link
					href={"/"}
					className={`${
						pathname === "/" ? "font-bold" : ""
					} hover:font-bold ease-in-out  duration-300`}>
					Home
				</Link>
				<Link
					href={"/panduan"}
					className={`${
						pathname === "/panduan" || pathname === "/panduan/video-panduan"
							? "font-bold"
							: ""
					} hover:font-bold ease-in-out  duration-300`}>
					Panduan
				</Link>
				<Link
					href={"/daftar"}
					className='hover:font-bold ease-in-out duration-300 '>
					Daftar
				</Link>
				<Button
					type='primary'
					name='masuk'
					hasLink={true}
					text='Masuk'
					link='/masuk'
					classname='w-full grid place-items-center'
				/>
			</nav>
			<section
				onClick={() => {
					setMenuToggled(!isMenuToggled);
				}}
				className='md:hidden grid place-items-center w-10 h-10  cursor-pointer'>
				{!isMenuToggled ? (
					<BiMenuAltRight className='text-neutral-200 w-6 h-6 ' />
				) : (
					<RxCross1 className='text-neutral-200 w-6 h-6 ' />
				)}
			</section>
		</header>
	);
};

export default Navbar;
