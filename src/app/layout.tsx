import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	);
}
