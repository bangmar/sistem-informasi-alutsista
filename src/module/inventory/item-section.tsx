import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { filteredItem } from "./store";

const ItemSection = () => {
	const items: any = useRecoilValue(filteredItem);

	return (
		<section className='flex gap-8 flex-wrap'>
			{items &&
				items?.map((item: any, index: number) => {
					return (
						<section
							key={index}
							className='bg-gray-50 rounded-sm shadow-md w-60 overflow-hidden '>
							<span className='w-60 h-44  block  overflow-hidden '>
								<Image
									alt='test'
									src={item?.imageURL}
									width={200}
									height={200}
									loading='lazy'
									className='object-cover w-full px-4 pt-4 h-full hover:scale-105 transition-all ease-in-out duration-150'></Image>
							</span>
							<section className=' px-6  py-4'>
								<h1 className='text-slate-800 text-lg font-bold'>
									{item?.name}
								</h1>
								<Link
									href={`/dashboard/inventory/${item?.id}`}
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
