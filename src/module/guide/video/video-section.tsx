"use client";
const VideoSection = () => {
	return (
		<main className='mb-20'>
			<iframe
				src='https://www.youtube.com/embed/KrLj6nc516A?si=4JHOgWS9UF3TBAKP'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
				className='w-full mb-4 min-h-[18rem] md:min-h-[25rem]'></iframe>
			<section className='bg-neutral-100 px-10 md:px-14 lg:px-20 py-6'>
				<h1 className='font-bold text-lg mb-2'>Panduan Pengunaan System</h1>
				<p className='text-sm mb-2'>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim
				</p>
				<p className='text-sm mb-2'>
					consectetur, adipisci velit, sed quia non numquam eius modi tempora
					incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
					enim ad minima veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
				</p>
				<p className='text-sm mb-2'>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim consectetur, adipisci velit, sed quia non
					numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
					quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur?
				</p>
			</section>
		</main>
	);
};

export default VideoSection;
