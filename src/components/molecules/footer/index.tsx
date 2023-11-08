import logo from "@/assets/home/logo.svg";
import Image from "next/image";
import Link from "next/link";

import {
	AiFillGithub,
	AiFillInstagram,
	AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer className='lg:px-20 md:px-16 px-10 bg-neutral-900 py-10 text-neutral-200'>
			<section className='grid grid-cols-1 md:grid-cols-2 gap-20 text-sm mb-14'>
				<aside>
					<Image
						src={logo}
						alt='logo-lautsista'
						width={200}
						height={700}
						className='w-48 mb-6'
						priority
					/>
					<p>
						BTS ARMY (Bandar Tempatnya Senjata) adalah sebuah website yang
						dirancang untuk Kementrian Pertahanan RI dalam membuat Suatu Sistem
						Data Logistik Militer Alutsista (Alat Utama Sistem Persenjataan)
						yang efisien yang kompleks.
					</p>
				</aside>
				<aside className='flex gap-10 flex-wrap md:justify-between justify-start text-sm'>
					<section>
						<h1 className='font-bold text-base mb-2'>Informasi Seputar</h1>
						<p className='mb-1'>Senjata Api</p>
						<p className='mb-1'>Kapal Laut</p>
						<p className='mb-1'>Tank</p>
						<p className='mb-1'>Pesawat</p>
					</section>
					<section>
						<h1 className='font-bold text-base mb-2'>Peta Situs</h1>
						<Link
							href={"/"}
							className='block mb-1 hover:underline transition-all duration-200 ease-in-out hover:font-bold'>
							Home
						</Link>
						<Link
							href={"/panduan"}
							className='block mb-1 hover:underline transition-all duration-200 ease-in-out hover:font-bold'>
							Panduan
						</Link>

						<Link
							href={"/masuk"}
							className='block mb-1 hover:underline transition-all duration-200 ease-in-out hover:font-bold'>
							Masuk
						</Link>
					</section>
					<section>
						<h1 className='font-bold text-base mb-2'>Alamat Kantor</h1>
						<p>941 Ohio Ave.Winona, MN 55987 Indo</p>
					</section>
				</aside>
			</section>
			<section className='grid grid-cols-1 md:grid-cols-2 gap-20'>
				<aside className='flex gap-10 flex-wrap md:justify-between justify-start text-sm'>
					<section>
						<h1 className='font-bold text-base mb-2'>Kontak</h1>
						<p>08396912392144 | PTLautsista@ppl.org</p>
					</section>
					<section className='flex gap-2  items-end'>
						<span className='h-8 w-8 bg-green-700 grid place-items-center rounded-md'>
							<AiFillGithub className='h-6 w-6' />
						</span>
						<span className='h-8 w-8 bg-green-700 grid place-items-center rounded-md'>
							<AiFillTwitterCircle className='h-6 w-6' />
						</span>
						<span className='h-8 w-8 bg-green-700 grid place-items-center rounded-md'>
							<AiFillInstagram className='h-6 w-6' />
						</span>
					</section>
				</aside>
				<aside className='flex items-end justify-start md:justify-end'>
					<p className='text-xs text-neutral-400 '>
						2023 All Right Reserverd PT Lautsista by Telkom University
						Purwokerto
					</p>
				</aside>
			</section>
		</footer>
	);
};

export default Footer;
