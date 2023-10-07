import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";

const ResgiterModule = () => {
	return (
		<main className='py-10'>
			<form action='' className='flex flex-col gap-7'>
				<Input id='NIP' type='number' placeholder='Nomor NIP Anggota' />
				<Input id='fullName' type='text' placeholder='Nama Lengkap' />
				<Input id='email' type='email' placeholder='Alamat Email' />
				<Input id='password' type='password' placeholder='Kata Sandi' />
				<Input
					id='confirmPassword'
					type='password'
					placeholder='Konfirmasi Kata Sandi'
				/>

				<Button
					text='Masuk'
					classname='text-neutral-200 grid place-items-center w-full lg:w-[460px]'
					name='masuk'
					cat='primary'
					type='submit'
				/>
			</form>
		</main>
	);
};

export default ResgiterModule;
