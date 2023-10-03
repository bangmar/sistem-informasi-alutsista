import Footer from "@/components/molecules/footer";
import Navbar from "@/components/molecules/navbar";
import { FC, Fragment, ReactNode } from "react";

type TBaseLayoutProps = {
	children: ReactNode;
};

const Baselayout: FC<TBaseLayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			<main className='px-28 min-h-[100vh]'>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Baselayout;
