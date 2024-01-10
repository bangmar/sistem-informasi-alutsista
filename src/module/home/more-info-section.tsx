"use client";

import { FaGun, FaPlane, FaShip } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { GiTank } from "react-icons/gi";
import Button from "@/components/atoms/button";
import Card from "@/components/molecules/card";

const MoreInfoSection = () => {
	return (
		<section className='mb-32'>
			<header className='flex flex-col gap-1 items-center mb-10 text-neutral-900'>
				<h2 className='text-xl'>Jelajahi Sistem</h2>
				<h1 className='font-bold text-3xl  w-96 text-center'>
					Peroleh Informasi Alutsista Lebih Banyak
				</h1>
			</header>
			<main className=' grid place-items-center '>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center'>
					<Card
						buttonText='Lihat Lebih'
						isHasButton
						title='Informasi Senjata Api'
						icon={<FaGun className='text-green-700 w-12 h-12' />}
						link='/dashboard/inventory'
					/>

					<Card
						buttonText='Lihat Lebih'
						isHasButton
						title='Informasi Pesawat'
						icon={<FaPlane className='text-green-700 w-12 h-12' />}
						link='/dashboard/inventory'
					/>
					<Card
						buttonText='Lihat Lebih'
						isHasButton
						title='Informasi Kapal Laut'
						icon={<FaShip className='text-green-700 w-12 h-12' />}
						link='/dashboard/inventory'
					/>
					<Card
						buttonText='Lihat Lebih'
						isHasButton
						title='Informasi Tank Tempur Laut'
						icon={<GiTank className='text-green-700 w-12 h-12' />}
						link='/dashboard/inventory'
					/>
				</div>
			</main>
		</section>
	);
};

export default MoreInfoSection;
