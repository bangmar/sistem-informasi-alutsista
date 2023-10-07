import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";

const LoginModule = () => {
	return (
		<main className='py-10'>
			<form action='' className='flex flex-col gap-7'>
				<Input id='NIP' type='number' placeholder='Masukan NIP Anggota' />
				<Input id='password' type='password' placeholder='Masukan Kata Sandi' />

				<Button
					text='Masuk'
					classname='text-neutral-200 grid place-items-center w-full lg:w-[460px]'
					name='masuk'
					cat='primary'
					type='submit'
				/>
				<p className='text-sm'>
					Lupa kata sandi ? Hubungi Andministrator{" "}
					<span className='font-bold text-green-700'>disini</span>
				</p>
			</form>
		</main>
	);
};

export default LoginModule;
