"use client";

import { FaGun, FaPlane, FaShip } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { GiTank } from "react-icons/gi";
import Button from "@/components/atoms/button";

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
					<section className='bg-neutral-100 rounded-sm shadow-sm w-52 px-10 h-56 md:h-64 flex gap-4 flex-col justify-between py-10 items-start'>
						<FaGun className='text-green-700 w-12 h-12' />
						<h1 className='text-neutral-600 text-xl font-bold'>
							Informasi Senjata Api
						</h1>
						<Button
							name='informasi-senjata-api'
							text='Lihat Lebih'
							hasLink={true}
							link=''
							type='secondary'
							classname='text-green-700 font-bold !p-0 group hover:text-green-600'
							hasIcon
							icon={
								<BsArrowRight className='group-hover:ml-2 ease-in-out duration-150 transition-all' />
							}
						/>
					</section>
					<section className='bg-neutral-100 rounded-sm shadow-sm w-52 px-10 h-56 md:h-64 flex gap-4 flex-col justify-between py-10 items-start'>
						<FaPlane className='text-green-700 w-12 h-12' />
						<h1 className='text-neutral-600 text-xl font-bold'>
							Informasi Pesawat
						</h1>
						<Button
							name='informasi-pesawat'
							text='Lihat Lebih'
							hasLink={true}
							link=''
							type='secondary'
							classname='text-green-700 font-bold !p-0 group hover:text-green-600'
							hasIcon
							icon={
								<BsArrowRight className='group-hover:ml-2 ease-in-out duration-150 transition-all' />
							}
						/>
					</section>
					<section className='bg-neutral-100 rounded-sm shadow-sm w-52 px-10 h-56 md:h-64 flex gap-4 flex-col justify-between py-10 items-start'>
						<FaShip className='text-green-700 w-12 h-12' />
						<h1 className='text-neutral-600 text-xl font-bold'>
							Informasi Kapal Laut
						</h1>
						<Button
							name='informasi-kapal-laut'
							text='Lihat Lebih'
							hasLink={true}
							link=''
							type='secondary'
							classname='text-green-700 font-bold !p-0 group hover:text-green-600'
							hasIcon
							icon={
								<BsArrowRight className='group-hover:ml-2 ease-in-out duration-150 transition-all' />
							}
						/>
					</section>
					<section className='bg-neutral-100 rounded-sm shadow-sm w-52 px-10 h-56 md:h-64 flex gap-4 flex-col justify-between py-10 items-start'>
						<GiTank className='text-green-700 w-12 h-12' />
						<h1 className='text-neutral-600 text-xl font-bold'>
							Informasi Tank Tempur
						</h1>
						<Button
							name='informasi-tank'
							text='Lihat Lebih'
							hasLink={true}
							link=''
							type='secondary'
							classname='text-green-700 font-bold !p-0 group hover:text-green-600'
							hasIcon
							icon={
								<BsArrowRight className='group-hover:ml-2 ease-in-out duration-150 transition-all' />
							}
						/>
					</section>
				</div>
			</main>
		</section>
	);
};

export default MoreInfoSection;
