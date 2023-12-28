"use client";

import { ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { PiSpinner } from "react-icons/pi";

const ProtectedWrap = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = sessionStorage.getItem("token-lautsista");

		if (!token) {
			redirect("/auth/masuk");
		} else {
			setLoading(false);
		}
	}, []);

	return loading ? (
		<section className='w-full overflow-hidden h-screen grid place-items-center text-2xl text-slate-700'>
			<PiSpinner className='animate-spin ' />
		</section>
	) : (
		children
	);
};

export default ProtectedWrap;
