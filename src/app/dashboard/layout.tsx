import Sidebar from "@/components/molecules/sidebar";
import "../globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dashbaord",
	description:
		"Sistem Informasi Alutsista oleh PT Lautsista untuk Kementrian Pertahanan RI",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={playfairDisplay.className}>
				<section className='flex'>
					<Sidebar />
					<section className='px-10 py-10 flex-1'>{children}</section>
				</section>
			</body>
		</html>
	);
}
