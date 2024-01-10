import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { filteredItem } from "./store";

const ItemSection = () => {
	const items: any = useRecoilValue(filteredItem);

	return (
		<section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{items &&
				items?.map((item: any, index: number) => {
					return (
						<section
							key={index}
							className='bg-gray-50 rounded-sm shadow-m p-2 overflow-hidden '>
							<span className='w-full  h-44  block  overflow-hidden '>
								<Image
									alt='test'
									src={item?.imageURL}
									width={200}
									height={200}
									loading='lazy'
									className='object-cover w-full px-4 pt-4 h-full hover:scale-105 transition-all ease-in-out duration-150'></Image>
							</span>
							<section className=' px-6  py-4 '>
								<section className='flex    justify-between'>
									<h1 className='overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible md:overflow-hidden md:whitespace-nowrap lg:whitespace-nowrap w-20 lg:overflow-visible'>
										{(item?.name as string).length > 11
											? item?.name.substring(0, 12) + ".."
											: item?.name}
									</h1>
									<span className='flex justify-end'>
										<p
											className={`${
												item.status === "Aktif"
													? "bg-green-600"
													: item.status === "Perawatan"
													? "bg-gray-600"
													: "bg-red-500"
											} w-fit h-fit text-xs py-1 px-4 rounded-md text-slate-200`}>
											{item.status}
										</p>
									</span>
								</section>
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
