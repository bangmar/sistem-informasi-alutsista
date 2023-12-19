import { IoMdAdd } from "react-icons/io";

const HeaderSection = () => {
	return (
		<header className='mb-10'>
			<h1 className='mb-6 text-lg font-medium text-slate-800'>Cari Pengguna</h1>
			<section className='flex gap-4 items-center mb-10'>
				<input
					type='text'
					placeholder='Nama Pengguna'
					className='text-sm bg-gray-100 rounded-sm px-4 py-3 outline-none w-72 shadow-sm'
				/>

				<span className='grid place-items-center text-neutral-100 text-lg hover:bg-green-700 transition-all ease-in-out duration-300 cursor-pointer w-10 h-10  bg-green-600 rounded-md shadow-sm'>
					<IoMdAdd />
				</span>
			</section>
		</header>
	);
};

export default HeaderSection;
