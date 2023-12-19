"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

export const category = [
	{ name: "Semua Kategori", value: "" },
	{ name: "Senjata Api", value: "Gun" },
	{ name: "Pesawat", value: "Plane" },
	{ name: "Tank", value: "Tank" },
];

const HeaderSection = () => {
	const [selected, setSelected] = useState(category[0]);

	return (
		<header className='mb-10'>
			<h1 className='mb-6 text-lg font-medium text-slate-800'>
				Cari Lautsista
			</h1>
			<section className='flex gap-4 items-center mb-10'>
				<input
					type='text'
					placeholder='Nama Perlengkapan'
					className='text-sm bg-gray-100 rounded-sm px-4 py-3 outline-none w-72 shadow-sm'
				/>
				<section className=' w-72'>
					<Listbox value={selected} onChange={setSelected}>
						<div className='relative mt-1'>
							<Listbox.Button className='relative flex w-72 items-center justify-between cursor-pointer rounded-md bg-gray-100 px-4 py-3 shadow-sm text-sm'>
								<span className='block truncate '> {selected.name}</span>
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

				<span className='grid place-items-center text-neutral-100 text-lg hover:bg-green-700 transition-all ease-in-out duration-300 cursor-pointer w-10 h-10  bg-green-600 rounded-md shadow-sm'>
					<IoMdAdd />
				</span>
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
