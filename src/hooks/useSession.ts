import { useState, useEffect } from "react";

const useSessionStorage = (name: string): string => {
	const [value, setValue] = useState<string>("");

	useEffect(() => {
		setValue(sessionStorage.getItem(name) || "");
	}, [name]);

	return value;
};

export default useSessionStorage;
