"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allItems, filteredItem } from "./store";
import AddModal from "./add-modal";
import { userRole } from "@/components/molecules/sidebar/store";

export const category = [
	{ name: "Semua Kategori", value: "" },
	{ name: "Senjata Api", value: "Gun" },
	{ name: "Pesawat", value: "Plane" },
	{ name: "Tank", value: "Tank" },
];

const HeaderSection = () => {
	const [getAllItems] = useRecoilState(allItems);
	const setFilteredItems = useSetRecoilState(filteredItem);
	const [categories, setCategory] = useState(category[0]);
	const [name, setName] = useState("");

	const getRole = useRecoilValue(userRole);

	const filterItemsHandler = (name?: string, cat?: any) => {
		setName(name as string);
		const filterItems: any = getAllItems
			.filter((item: any): any => {
				return item?.name?.toLowerCase().includes(name);
			})
			.filter((item: any): any => {
				if (cat === "") {
					return item;
				} else {
					return item?.category === cat;
				}
			});
		setFilteredItems(filterItems);
	};

	return (
		<header className='mb-10'>
			<h1 className='mb-6 text-2xl font-bold text-slate-800'>Cari Lautsista</h1>
			<section className='flex gap-4 items-center mb-10'>
				<input
					type='text'
					placeholder='Nama Perlengkapan'
					className='text-sm bg-gray-100 rounded-sm px-4 py-3 outline-none w-72 shadow-sm'
					onChange={(e) => {
						filterItemsHandler(e.target.value as string, categories.value);
					}}
				/>
				<section className=' w-72'>
					<Listbox
						value={categories}
						onChange={(e): any => {
							setCategory(e);
							filterItemsHandler(name, e.value);
						}}>
						<div className='relative mt-1'>
							<Listbox.Button className='relative flex w-72 items-center justify-between cursor-pointer rounded-md bg-gray-100 px-4 py-3 shadow-sm text-sm'>
								<span className='block truncate '> {categories.name}</span>
								<FaAngleDown />
							</Listbox.Button>
							<Transition
								as={Fragment}
								leave='transition ease-in duration-100'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'>
								<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black/5 focus:outline-none text-sm'>
									{category.map((cat, index) => (
										<Listbox.Option
											key={index}
											className={({ active }) =>
												`relative cursor-pointer select-none py-2 px-4 ${
													active
														? "bg-green-400 text-green-900"
														: "text-gray-900"
												}`
											}
											value={cat}>
											{({ selected }) => (
												<>
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}>
														{cat.name}
													</span>
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</Listbox>
				</section>
				{getRole === "ADMIN" ? <AddModal /> : null}
			</section>
			<p className='text-sm text-neutral-800'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint
				explicabo numquam tempora possimus officia nam blanditiis magnam
				adipisci quos reiciendis quis, quod officiis cupiditate ipsum aperiam.
			</p>
		</header>
	);
};

export default HeaderSection;
