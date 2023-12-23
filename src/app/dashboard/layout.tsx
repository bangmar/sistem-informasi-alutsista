import Sidebar from "@/components/molecules/sidebar";
import "../globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dashboard",
	description:
		"Sistem Informasi Alutsista oleh PT Lautsista untuk Kementrian Pertahanan RI",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={playfairDisplay.className}>
			<section className='flex'>
				<Sidebar />
				<section className='ml-80 px-10 py-10 flex-1'>{children}</section>
			</section>
		</section>
	);
}
