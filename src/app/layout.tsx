import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import ReactQueryPovider from "./reactQueryPovider";
import RecoilProvider from "./recoilProvider";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sistem Informasi Alutsista",
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
			<ReactQueryPovider>
				<RecoilProvider>
					<body className={playfairDisplay.className}>{children}</body>
				</RecoilProvider>
			</ReactQueryPovider>
		</html>
	);
}
