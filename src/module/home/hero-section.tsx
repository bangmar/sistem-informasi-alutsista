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
			<section className='relative z-20 h-[500px] align-bottom content-end pb-48 grid  grid-cols-1 '>
				<aside className='flex flex-col gap-2'>
					<h1 className=' text-4xl md:text-4xl lg:text-5xl  font-bold '>
						INFORMASI PERLENGKAPAN
					</h1>
					<h1 className=' text-4xl md:text-4xl lg:text-5xl  font-bold '>
						ALUTSISTA - REPUBLIK INDONESIA{" "}
					</h1>
				</aside>
			</section>
		</>
	);
};

export default HeroSection;
