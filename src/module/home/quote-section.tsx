import Image from "next/image";
import ministry from "@/assets/home/ministry.svg";

const QuoteSection = () => {
	return (
		<section className='bg-green-700 w-full px-8 py-8 mb-20 flex flex-col md:flex-row gap-10 md:items-center'>
			<Image
				src={ministry}
				alt='ministry-lautsista'
				width={200}
				height={700}
				className='md:w-60 w-full'
				priority
			/>
			<section className='flex flex-col gap-4 text-base md:text-lg'>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo, oloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore.
				</p>
				<p className='text-base'>
					<span className='font-bold'>Bung Zidane</span> - Head Of Ministry
				</p>
			</section>
		</section>
	);
};

export default QuoteSection;
