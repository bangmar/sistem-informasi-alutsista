import HeroSection from "./hero-section";
import InfoSection from "./info-section";
import MoreInfoSection from "./more-info-section";
import QuoteSection from "./quote-section";

const HomeModule = () => {
	return (
		<main className='w-full text-neutral-200'>
			<HeroSection />
			<InfoSection />
			<QuoteSection />
			<MoreInfoSection />
		</main>
	);
};

export default HomeModule;
