"use client";
import { FC, ReactElement } from "react";
import logo from "@/assets/home/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbReportAnalytics } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

const Sidebar: FC = (): ReactElement => {
	const SIDEBAR_MENU = [
		{
			name: "Laporan",
			link: "/dashboard/statistic",
			logo: <TbReportAnalytics />,
		},
		{
			name: "Inventori",
			link: "/dashboard/inventory",
			logo: <GiHomeGarage />,
		},
		{
			name: "Pengguna",
			link: "/dashboard/user",
			logo: <FaRegUser />,
		},
	];

	const pathname = usePathname();

	return (
		<section className='w-80 min-h-[100vh]  bg-text-primary px-10 py-10 text-neutral-100 '>
			<section className='mb-40'>
				<Link href={"/"}>
					<Image src={logo} width={120} height={200} alt='logo-bts' />
				</Link>
				<section className=' py-10'>
					<span className='h-10 w-10 rounded-sm bg-gray-100 block mb-2'></span>
					<h1 className='font-bold text-lg'>Letkol Mario Rudy Silalahi</h1>
					<p>20102018</p>
				</section>
				<section className='flex flex-col gap-2'>
					{SIDEBAR_MENU.map((item, index) => {
						return (
							<div
								key={index}
								className={`${
									pathname.includes(item.link)
										? "text-neutral-100"
										: "text-neutral-400"
								} flex items-center gap-3 text-lg transition-colors ease-in-out duration-300`}>
								{item.logo}
								<Link href={`${item.link}`} passHref>
									<p>{item.name}</p>
								</Link>
							</div>
						);
					})}
				</section>
			</section>
			<Link
				href={"/"}
				className='text-2xl fixed bottom-10 left-10 text-red-600 cursor-pointer hover:bg-red-400 transition-colors ease-in-out duration-300 bg-red-300 rounded-lg w-10 h-10 grid place-items-center'>
				<RiLogoutCircleLine />
			</Link>
		</section>
	);
};

export default Sidebar;
