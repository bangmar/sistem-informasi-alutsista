import Card from "@/components/molecules/card";
import { MdOndemandVideo } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
const IntroSection = () => {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 mb-28'>
			<aside className='mb-10'>
				<h2 className='text-xl mb-1'>Panduan</h2>
				<h1 className='font-bold text-4xl mb-4  w-96'>
					Panduan Penggunaan Sitem dan Pengguna
				</h1>
				<p className='text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
					voluptatum eligendi nobis nemo laboriosam, quam iste mollitia eius
					quasi. Magnam nam labore, commodi sit nemo molestiae sequi quaerat
					eligendi consequuntur. Tempora reprehenderit animi qui ullam rerum
					quaerat dolorem facilis amet.
				</p>
			</aside>
			<aside className='flex flex-wrap gap-6 lg:justify-end  items-center'>
				<Card
					buttonText='Lihat Lebih'
					isHasButton
					title='Video Panduan'
					link='panduan/video-panduan'
					icon={
						<MdOndemandVideo className='text-green-700 w-8 md:w-12 h-12 flex-shrink-0' />
					}
				/>
				<Card
					buttonText='Lihat Lebih'
					isHasButton
					link='panduan/panduan-pengguna'
					title='Panduan Pengguna'
					icon={
						<CgFileDocument className='text-green-700 w-8 md:w-12 h-12 flex-shrink-0' />
					}
				/>
			</aside>
		</section>
	);
};

export default IntroSection;
