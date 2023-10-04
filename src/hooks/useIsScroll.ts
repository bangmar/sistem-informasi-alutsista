import { useEffect, useState } from "react";

export const useIsScroll = () => {
	const [isSticky, setIsSticky] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return { isSticky, setIsSticky };
};
