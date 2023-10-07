"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { BiSolidDownArrow } from "react-icons/bi";

const TutorialSection = () => {
	return (
		<section>
			<Disclosure as={"div"} className={"mb-3"} defaultOpen>
				{({ open }) => (
					<>
						<Disclosure.Button className='py-2 gap-1 flex-wrap w-full text-start flex items-center justify-between px-4 rounded-sm shadow-sm text-neutral-200 bg-green-700'>
							<h1 className='text-sm'>Panduan Pembuatan Akun</h1>
							<BiSolidDownArrow
								className={`${
									!open ? "" : "rotate-180"
								} transition-all duration-200 ease-in-out`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='text-neutral-700 px-6 py-4 text-sm flex flex-col gap-3 bg-neutral-100'>
							<section className='flex gap-2 items-center'>
								<span className='bg-green-700 text-neutral-100 h-7 w-7 rounded-md shadow-sm grid place-items-center'>
									1
								</span>
								<section>
									<h1>
										Klik opsi Daftar pada Navigasi diatas, atau bisa klik{" "}
										<Link
											href={"/auth/daftar"}
											className='font-bold underline text-green-700'>
											dinisi
										</Link>
									</h1>
								</section>
							</section>
							<section className='flex gap-2 items-center'>
								<span className='bg-green-700 text-neutral-100 h-7 w-7 rounded-md shadow-sm grid place-items-center'>
									2
								</span>
								<section>
									<h1 className=''>Masukan data diri yang dibutuhkan</h1>
								</section>
							</section>
							<section className='flex gap-2 items-center'>
								<span className='bg-green-700 text-neutral-100 h-7 w-7 rounded-md shadow-sm grid place-items-center'>
									3
								</span>
								<section>
									<h1>Tekan Tombol Daftar</h1>
								</section>
							</section>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as={"div"} className={"mb-3"} defaultOpen>
				{({ open }) => (
					<>
						<Disclosure.Button className='py-2 gap-1 flex-wrap w-full text-start flex items-center justify-between px-4 rounded-sm shadow-sm text-neutral-200 bg-green-700'>
							<h1 className='text-sm'>Panduan Masuk Sistem</h1>
							<BiSolidDownArrow
								className={`${
									!open ? "" : "rotate-180"
								} transition-all duration-200 ease-in-out`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='text-neutral-700 px-6 py-4 text-sm flex flex-col gap-3 bg-neutral-100'>
							<section className='flex gap-2 items-center'>
								<span className='bg-green-700 text-neutral-100 h-7 w-7 rounded-md shadow-sm grid place-items-center'>
									1
								</span>
								<section>
									<h1>
										Klik opsi masuk pada Navigasi diatas, atau bisa klik{" "}
										<Link
											href={"/auth/masuk"}
											className='font-bold underline text-green-700'>
											dinisi
										</Link>
									</h1>
								</section>
							</section>
							<section className='flex gap-2 items-center'>
								<span className='bg-green-700 text-neutral-100 h-7 w-7 rounded-md shadow-sm grid place-items-center'>
									2
								</span>
								<section>
									<h1 className=''>
										Masukan NIP Anggota dan Kata sandi yang terdaftar
									</h1>
								</section>
							</section>
							<section className='flex gap-2 items-center'>
								<span className='bg-green-700 text-neutral-100 h-7 w-7 rounded-md shadow-sm grid place-items-center'>
									3
								</span>
								<section>
									<h1>Tekan Tombol masuk</h1>
								</section>
							</section>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</section>
	);
};

export default TutorialSection;
