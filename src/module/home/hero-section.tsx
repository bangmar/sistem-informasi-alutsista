import hero from "@/assets/home/hero.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const HeroSection = () => {
	return (
		<>
			<section className='w-full h-[540px] bg-contain absolute -z-10 top-0 right-0 left-0'>
				<Image
					src={hero}
					alt='hero-image'
					width={100}
					height={100}
					className='w-full object-cover h-full'
					draggable={false}
					priority
				/>
			</section>
			<section className='relative z-20 h-[500px] align-bottom content-end pb-32 grid  grid-cols-1 lg:grid-cols-2'>
				<aside className='flex flex-col gap-8'>
					<h1 className=' text-4xl md:text-5xl font-bold '>
						INFORMASI PERLENGKAPAN ALUTSISTA - REPUBLIK INDONESIA{" "}
					</h1>
					<section className='w-full flex gap-4'>
						<input
							type='search'
							className='w-full placeholder:text-neutral-400  outline-none text-neutral-900 text-sm rounded-sm shadow-sm md:text-base px-6 h-10 md:h-11 '
							placeholder='Cari Informasi alutsista apa saja disini'
							autoFocus
						/>
						<section className='h-10 md:h-11 text-2xl bg-green-800 hover:bg-green-700 cursor-pointer ease-in-out duration-200 grid place-items-center px-3 rounded-sm shadow-sm'>
							<AiOutlineSearch />
						</section>
					</section>
				</aside>
			</section>
		</>
	);
};

export default HeroSection;
