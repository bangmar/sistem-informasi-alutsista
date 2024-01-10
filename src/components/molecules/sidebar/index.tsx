"use client";
import { FC, ReactElement, useState } from "react";
import logo from "@/assets/home/logo.svg";
import profile from "@/assets/home/profile.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { TbReportAnalytics } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { useGetMe } from "@/module/auth/profile/hook";
import { PiSpinner } from "react-icons/pi";
import { useRecoilState } from "recoil";
import { userRole } from "./store";

const adminMenu = [
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

const userMenu = [
	{
		name: "Inventori",
		link: "/dashboard/inventory",
		logo: <GiHomeGarage />,
	},
];

const Sidebar: FC = (): ReactElement => {
	const pathname = usePathname();
	const { data, isLoading } = useGetMe();
	const me = data?.data;

	const [getRole, setRole] = useRecoilState(userRole);
	const role = me?.role?.name as string;
	setRole(role);
	const SIDEBAR_MENU = getRole === "ADMIN" ? adminMenu : userMenu;

	const router = useRouter();
	const [logoutProgress, setLogoutProcess] = useState(false);
	const logOutHandler = () => {
		sessionStorage.removeItem("token-lautsista");
		router.push("/");
	};

	return (
		<section className='w-80 min-h-[100vh] fixed top-0 bottom-0  bg-text-primary px-10 py-10 text-neutral-100 '>
			<section className='mb-40'>
				<Link href={"/"}>
					<Image src={logo} width={120} height={200} alt='logo-bts' priority />
				</Link>
				<section className=' py-10'>
					<span className='h-12 w-12 rounded-sm bg-gray-100 block mb-2 overflow-hidden'>
						<Image
							src={profile}
							width={120}
							height={200}
							alt='profile-user'
							loading='lazy'
						/>
					</span>
					<h1 className='font-bold text-lg'>{me?.fullname}</h1>
					<p>{me?.nip}</p>
				</section>
				<section className='flex flex-col gap-2'>
					{!isLoading &&
						SIDEBAR_MENU.map((item, index) => {
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
			<section
				onClick={() => {
					setLogoutProcess(true);
					logOutHandler();
				}}
				className='text-2xl fixed bottom-10 left-10 text-red-600 cursor-pointer hover:bg-red-400 transition-colors ease-in-out duration-300 bg-red-300 rounded-lg w-10 h-10 grid place-items-center'>
				{logoutProgress ? (
					<PiSpinner className='animate-spin ' />
				) : (
					<RiLogoutCircleLine />
				)}
			</section>
		</section>
	);
};

export default Sidebar;
