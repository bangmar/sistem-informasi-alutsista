"use client";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useGetAll } from "./hook";
import AddUserModal from "./add-modal";
import { useState } from "react";
import UpdateUserModal from "./update-modal";
import RemoveModal from "./remove-modal";

const ItemSection = () => {
	const { data } = useGetAll();
	const users = data?.data;

	const [filteredName, setFilteredName] = useState("");

	return (
		<section>
			<header className='mb-10'>
				<h1 className='mb-6 text-2xl font-bold text-slate-800'>
					Cari Pengguna
				</h1>
				<section className='flex gap-2 items-center mb-10'>
					<input
						type='text'
						placeholder='Nama Pengguna'
						className='text-sm bg-gray-100 rounded-sm px-4 py-3 outline-none w-72 shadow-sm'
						onChange={(e) => setFilteredName(e.target.value)}
					/>
					<AddUserModal />
				</section>
			</header>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
					<thead className='text-sm text-gray-700  bg-gray-50 '>
						<tr>
							<th scope='col' className='px-6 py-3'>
								No
							</th>
							<th scope='col' className='px-6 py-3'>
								Nama Lengkap
							</th>
							<th scope='col' className='px-6 py-3'>
								Nomor Anggota
							</th>
							<th scope='col' className='px-6 py-3'>
								Email
							</th>
							<th scope='col' className='px-6 py-3'>
								Role
							</th>
							<th scope='col' className='px-6 py-3'>
								Aksi
							</th>
						</tr>
					</thead>

					<tbody>
						{users
							?.filter((item: any) => {
								return item.fullname
									.toLowerCase()
									.includes(filteredName.toLowerCase());
							})
							.map(({ email, fullname, nip, role, id }: any, index: number) => {
								return (
									<tr
										key={index}
										className='bg-white border-b text-sm  hover:bg-green-200 hover:text-neutral-800'>
										<th
											scope='row'
											className='px-6 py-6 font-medium  whitespace-nowrap '>
											{index + 1}
										</th>
										<td className='px-6 py-6'>{fullname}</td>
										<td className='px-6 py-6'>{nip}</td>
										<td className='px-6 py-6'>{email}</td>
										<td className='px-6 py-6'>{role?.name}</td>
										<td className='px-6 text-xl py-6 flex gap-2'>
											<UpdateUserModal data={{ email, fullname, nip, id }} />
											<RemoveModal data={{ fullname, id }} />
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ItemSection;
