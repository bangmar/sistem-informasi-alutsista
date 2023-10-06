import TutorialSection from "./tutorial-section";

const UserGuideModule = () => {
	return (
		<main className=' mb-28 py-16'>
			<header className='flex flex-col gap-1  mb-10 text-neutral-900'>
				<h2 className=' text-lg md:text-xl mb-1'>Panduan Pengguna</h2>
				<h1 className='font-bold text-3xl md:text-4xl w-full md:w-[40rem]'>
					Panduan Buat dan Masuk akun
				</h1>
			</header>
			<TutorialSection />
		</main>
	);
};

export default UserGuideModule;
