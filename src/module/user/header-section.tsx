import { IoMdAdd } from "react-icons/io";
import AddUserModal from "./add-modal";

const HeaderSection = () => {
	return (
		<header className='mb-10'>
			<h1 className='mb-6 text-2xl font-bold text-slate-800'>Cari Pengguna</h1>
			<section className='flex gap-4 items-center mb-10'>
				<input
					type='text'
					placeholder='Nama Pengguna'
					className='text-sm bg-gray-100 rounded-sm px-4 py-3 outline-none w-72 shadow-sm'
				/>

				<AddUserModal />
			</section>
		</header>
	);
};

export default HeaderSection;
