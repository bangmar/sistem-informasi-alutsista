import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const exampleItem = [
	{
		name: "Night Hawk Costum",
		link: "/testid",
		image:
			"https://res.cloudinary.com/dehrqyxo1/image/upload/v1702867616/lautsista/m5meimk9vui5tgl6o99e.png",
	},
	{
		name: "M-4",
		link: "/testid",
		image:
			"https://res.cloudinary.com/dehrqyxo1/image/upload/v1702867616/lautsista/t4u4sajugok5wu7ydmky.png",
	},
	{
		name: "Magnum Revolver",
		link: "/testid",
		image:
			"https://res.cloudinary.com/dehrqyxo1/image/upload/v1702867616/lautsista/m5meimk9vui5tgl6o99e.png",
	},
	{
		name: "Abrams M1",
		link: "/testid",
		image:
			"https://res.cloudinary.com/dehrqyxo1/image/upload/v1702867616/lautsista/t4u4sajugok5wu7ydmky.png",
	},
	{
		name: "Challenger 2",
		link: "/testid",
		image:
			"https://res.cloudinary.com/dehrqyxo1/image/upload/v1702867616/lautsista/ap4qauwbmcc3grdbe7rw.png",
	},
];

const ItemSection = () => {
	return (
		<section className='flex gap-8 flex-wrap'>
			{exampleItem.map(({ image, link, name }, index) => {
				return (
					<section
						key={index}
						className='bg-gray-50 rounded-sm shadow-md w-60 overflow-hidden '>
						<span className='w-60 h-44  block  overflow-hidden '>
							<Image
								alt='test'
								src={image}
								width={200}
								height={200}
								className='object-cover w-full px-4 pt-4 h-full hover:scale-105 transition-all ease-in-out duration-150'></Image>
						</span>
						<section className=' px-6  py-4'>
							<h1 className='text-slate-800 text-lg font-bold'>{name}</h1>
							<Link
								href={`/dashboard/inventory${link}`}
								className='group flex gap-2 text-green-700 items-center text-sm '>
								<p>Informasi Lebih</p>
								<BsArrowRight className='group-hover:ml-1 ease-in-out duration-150 transition-all' />
							</Link>
						</section>
					</section>
				);
			})}
		</section>
	);
};

export default ItemSection;
