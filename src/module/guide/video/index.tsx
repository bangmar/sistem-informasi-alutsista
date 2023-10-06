import FAQSection from "../FAQ-section";
import VideoSection from "./video-section";

const VideoGuideModule = () => {
	return (
		<main className=' mb-28 py-16'>
			<header className='flex flex-col gap-1 items-center mb-10 text-neutral-900'>
				<h2 className='text-xl mb-1'>Video Panduan Sistem</h2>
				<h1 className='font-bold  text-4xl w-[40rem] text-center'>
					Simak dan Ikuti Langkah-langkah Panduan Penggunaan Sistem
				</h1>
			</header>
			<VideoSection />
			<FAQSection />
		</main>
	);
};

export default VideoGuideModule;
