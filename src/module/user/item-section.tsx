import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const dummyUser = [
	{
		name: "Capt Aenun Zidane",
		nip: "92347394",
		email: "92347394@lautsista.org",
		role: "User",
	},
	{
		name: "Capt Andi Firmanstyah",
		nip: "2445456",
		email: "2445456@lautsista.org",
		role: "User",
	},
	{
		name: "Capt Franklin D Grap",
		nip: "08975858",
		email: "08975858@lautsista.org",
		role: "User",
	},
	{
		name: "Letnal Siti Jubaedah",
		nip: "2345667",
		email: "2345667@lautsista.org",
		role: "User",
	},
];

const ItemSection = () => {
	return (
		<section>
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
						{dummyUser.map(({ email, name, nip, role }, index) => {
							return (
								<tr
									key={index}
									className='bg-white border-b text-sm  hover:bg-green-200 hover:text-neutral-800'>
									<th
										scope='row'
										className='px-6 py-6 font-medium  whitespace-nowrap '>
										{index + 1}
									</th>
									<td className='px-6 py-6'>{name}</td>
									<td className='px-6 py-6'>{nip}</td>
									<td className='px-6 py-6'>{email}</td>
									<td className='px-6 py-6'>{role}</td>
									<td className='px-6 text-xl py-6 flex gap-2'>
										<MdOutlineEdit className='text-green-700 cursor-pointer hover:bg-gray-100 hover:rounded-md hover:shadow-sm hover:p-0.5 transition-all duration-200 ease-in-out' />
										<MdOutlineDelete className='text-red-700 cursor-pointer  hover:bg-gray-100 hover:rounded-md hover:shadow-sm hover:p-0.5 transition-all duration-200 ease-in-out' />
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
