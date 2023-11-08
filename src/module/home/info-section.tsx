import Image from "next/image";
import about from "@/assets/home/about.svg";

const InfoSection = () => {
	return (
		<aside className='text-neutral-900 mb-20 mt-10'>
			<h2 className='text-3xl lg:text-4xl font-bold mb-1'>
				Penyedia Informasi Alutsista
			</h2>
			<h2 className='text-3xl lg:text-4xl font-bold mb-10'>
				Kementrian Pertahanan RI
			</h2>
			<article className='grid grid-cols-1 md:grid-cols-2 gap-16'>
				<section className='flex flex-col gap-10'>
					<section className='flex gap-6 flex-wrap md:flex-nowrap'>
						<section className='flex items-center  flex-shrink-0 justify-center flex-col border-b-2 pb-1 border-neutral-400'>
							<h1 className='font-bold text-5xl mb-1'>100+</h1>
							<p>Total Alutsista</p>
						</section>
						<section className='flex  flex-shrink-0 items-center justify-center flex-col border-b-2 pb-1 border-neutral-400'>
							<h1 className='font-bold text-5xl mb-1'>80</h1>
							<p>Alutsista Aktif</p>
						</section>
						<section className='flex items-center  flex-shrink-0 justify-center flex-col border-b-2 pb-1 border-neutral-400'>
							<h1 className='font-bold text-5xl mb-1'>10</h1>
							<p>Alutsista terbaru</p>
						</section>
					</section>
					<section className='text-sm flex flex-col gap-4'>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim{" "}
						</p>
						<p>
							consectetur, adipisci velit, sed quia non numquam eius modi
							tempora incidunt ut labore et dolore magnam aliquam quaerat
							voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
							ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
							consequatur?
						</p>
					</section>
				</section>
				<figure className=' grid place-items-center'>
					<Image
						src={about}
						alt='info-image'
						width={80}
						height={80}
						className='w-[30rem] object-cover'
						draggable={false}
						loading='lazy'
					/>
				</figure>
			</article>
		</aside>
	);
};

export default InfoSection;
