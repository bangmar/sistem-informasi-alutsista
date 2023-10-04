"use client";

import Footer from "@/components/molecules/footer";
import Navbar from "@/components/molecules/navbar";
import { useIsScroll } from "@/hooks/useIsScroll";
import { FC, ReactNode } from "react";

type TBaseLayoutProps = {
	children: ReactNode;
};

const Baselayout: FC<TBaseLayoutProps> = ({ children }) => {
	const { isSticky } = useIsScroll();

	return (
		<div className=' container mx-auto relative max-w-[1900px]'>
			<Navbar />
			<section className={`${isSticky ? "block h-20" : ""}`}></section>
			<main className='px-12 md:px-20 lg:px-28  '>{children}</main>
			<Footer />
		</div>
	);
};

export default Baselayout;
