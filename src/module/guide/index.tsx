import FAQSection from "./FAQ-section";
import IntroSection from "./intro-section";

const GuideModule = () => {
	return (
		<main className='w-full text-neutral-800 py-20'>
			<IntroSection />
			<FAQSection />
		</main>
	);
};

export default GuideModule;
