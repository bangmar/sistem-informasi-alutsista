"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useGetItemDetail } from "./hook";
import {
	MdHistory,
	MdOutlineCancel,
	MdOutlineDelete,
	MdOutlineEdit,
} from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { useState } from "react";

import EditModal from "./edit-modal";
import AddHistoryModal from "./add-history-modal";
import DeleteHistoryModal from "./delete-history-modal";
import EditHistoryModal from "./edit-history-modal";
import RemoveItemModal from "./remove-item-modal";

const ItemDetailModule = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useGetItemDetail(params.id as string);
	const detail = data?.data?.item;
	const relatedItem = data?.data?.relatedItem;

	const [isEdit, setEdit] = useState(false);

	return (
		<section>
			<header className='flex gap-4 items-center mb-6'>
				<Link href={"/dashboard/inventory"} passHref>
					<BsArrowRight className='text-green-700 text-xl font-bold rotate-180' />
				</Link>
				<h1
					className={`text-2xl font-bold text-slate-800  cursor-default outline-none border-none`}>
					{detail?.name}
				</h1>
			</header>
			<main className='grid grid-cols-3 gap-10'>
				<section className='col-span-2 '>
					<section className='w-full h-80  overflow-hidden mb-4'>
						{isLoading ? (
							<span className='block w-full my-4  h-80 object-cover rounded-sm shadow-md  bg-gray-50 animate-pulse '></span>
						) : (
							<Image
								height={400}
								width={400}
								priority
								src={detail?.imageURL}
								alt={detail?.name}
								className='w-full h-80 object-cover rounded-sm shadow-md '
							/>
						)}
					</section>
					<section className='mb-4'>
						<h1 className='text-green-700 font-bold text-xl mb-2'>
							Detail Alutsista
						</h1>
						<p className='text-sm text-slate-800 mb-1'>
							<span className='font-bold'>Kategori :</span>{" "}
							{detail?.category === "Gun" ? "Senjata Api" : null}
							{detail?.category === "Plane" ? "Pesawat" : null}
							{detail?.category === "Tank" ? "Tank" : null}
						</p>
						<p className='text-sm text-slate-800 mb-1'>
							<span className='font-bold'>Status :</span> {detail?.status}
						</p>
						<p className='text-sm text-slate-800 mb-1'>
							<span className='font-bold'>Pangkalan Saat ini :</span> Pangkalan{" "}
							{detail?.place}
						</p>
					</section>
					<section>
						<h1 className='text-green-700 font-bold text-xl mb-3'>Riwayat</h1>
						{detail?.history?.map((item: any, index: number) => {
							return (
								<section className='text-sm mb-2 flex gap-4' key={index}>
									<section className='flex text-xl gap-2 py-1'>
										<EditHistoryModal
											historyId={item.id as string}
											itemId={params.id as string}
											currentHistory={item.history}
										/>
										<DeleteHistoryModal
											historyId={item.id as string}
											itemId={params.id as string}
										/>
									</section>
									<section>
										<p className='text-slate-700 '>{item.history}</p>
									</section>
								</section>
							);
						})}
					</section>
				</section>
				<aside>
					<section className='mb-10'>
						<h1 className='text-green-700 font-bold text-xl mb-2'>Deskripsi</h1>
						<p className='text-sm mb-2'>{detail?.description}</p>
					</section>
					<section className='mb-2'>
						<h1 className='text-green-700 font-bold text-xl mb-2'>
							Alutsista Serupa
						</h1>
						<section className='flex flex-col gap-6'>
							{relatedItem?.map((item: any, index: number) => {
								return (
									<section
										key={index}
										className='bg-gray-50 rounded-sm shadow-md w-full overflow-hidden mb-4'>
										<span className='w-auto h-44  block  overflow-hidden '>
											<Image
												alt={item?.name}
												src={item?.imageURL as string}
												width={200}
												height={200}
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
					</section>
					{isLoading ? null : (
						<section className='flex flex-col  gap-2'>
							<EditModal detail={detail} />
							<section className='grid grid-cols-2 md:grid-cols-1 gap-1 w-full '>
								<AddHistoryModal id={params.id} />
								<RemoveItemModal id={params.id} name={detail?.name} />
							</section>
						</section>
					)}
				</aside>
			</main>
		</section>
	);
};

export default ItemDetailModule;
