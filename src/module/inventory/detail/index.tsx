import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { exampleItem } from "../item-section";

const ItemDetailModule = () => {
	return (
		<section>
			<header className='flex gap-4 items-center mb-6'>
				<Link href={"/dashboard/inventory"} passHref>
					<BsArrowRight className='text-green-700 text-xl font-bold rotate-180' />
				</Link>
				<h1 className='text-2xl font-bold text-slate-600'>Abrams M1</h1>
			</header>
			<main className='grid grid-cols-3 gap-10'>
				<section className='col-span-2'>
					<Image
						height={400}
						width={400}
						priority
						src={
							"https://res.cloudinary.com/dehrqyxo1/image/upload/v1702867616/lautsista/t4u4sajugok5wu7ydmky.png"
						}
						alt='example'
						className='w-full h-80 object-cover rounded-sm shadow-md mb-4'
					/>
					<section className='mb-4'>
						<h1 className='text-green-700 font-bold text-xl mb-2'>
							Detail Alutsista
						</h1>
						<p className='text-sm text-slate-800'>
							<span className='font-bold'>Kategori :</span> Pesawat
						</p>
						<p className='text-sm text-slate-800'>
							<span className='font-bold'>Status :</span> Dalam Perawatan
						</p>
						<p className='text-sm text-slate-800'>
							<span className='font-bold'>Pangkalan Saat ini :</span> Pangkalan
							Militer Sumbang
						</p>
					</section>
					<section>
						<h1 className='text-green-700 font-bold text-xl mb-2'>Riwayat</h1>
						<p className='text-sm mb-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							doloremque cumque dolores distinctio tempore sunt illum quo saepe
							temporibus? Laboriosam officia consectetur modi odit excepturi,
							omnis voluptatum impedit ex! Sint, unde laboriosam! Deserunt
							nostrum obcaecati quos deleniti. Rem, suscipit necessitatibus!
						</p>
						<p className='text-sm mb-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							doloremque cumque dolores distinctio tempore sunt illum quo saepe
							temporibus? Laboriosam officia consectetur modi odit excepturi,
							omnis voluptatum impedit ex! Sint, unde laboriosam! Deserunt
							nostrum obcaecati quos deleniti. Rem, suscipit necessitatibus!
						</p>
					</section>
				</section>
				<aside>
					<section className='mb-10'>
						<h1 className='text-green-700 font-bold text-xl mb-2'>Deskripsi</h1>
						<p className='text-sm mb-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							doloremque cumque dolores distinctio tempore sunt illum quo saepe
							temporibus? Laboriosam officia consectetur modi odit
						</p>
					</section>
					<section>
						<h1 className='text-green-700 font-bold text-xl mb-2'>
							Alutsista Serupa
						</h1>
						<section className='flex flex-col grap-6'>
							{exampleItem.slice(0, 3).map(({ image, link, name }, index) => {
								return (
									<section
										key={index}
										className='bg-gray-50 rounded-sm shadow-md w-full overflow-hidden mb-4'>
										<span className='w-auto h-44  block  overflow-hidden '>
											<Image
												alt='test'
												src={image}
												width={200}
												height={200}
												className='object-cover w-full px-4 pt-4 h-full hover:scale-105 transition-all ease-in-out duration-150'></Image>
										</span>
										<section className=' px-6  py-4'>
											<h1 className='text-slate-800 text-lg font-bold'>
												{name}
											</h1>
											<Link
												href={`/dashboard/inventory/${link}`}
												className='group flex gap-2 text-green-700 items-center text-sm '>
												<p>Informasi Lebih</p>
												<BsArrowRight className='group-hover:ml-1 ease-in-out duration-150 transition-all' />
											</Link>
										</section>
									</section>
								);
							})}
						</section>
					</section>
				</aside>
			</main>
		</section>
	);
};

export default ItemDetailModule;
