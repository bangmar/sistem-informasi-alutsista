import { ChangeEvent, FC } from "react";

type TInputProps = {
	id: string;
	type: string;
	classname?: string;
	placeholder?: string;
	value?: string;
};

const Input: FC<TInputProps> = ({
	id,
	type,
	classname,
	placeholder = "",
	value,
}) => {
	return (
		<input
			id={id}
			type={type}
			className={`${classname} w-full remove-arrow border-b-2 border-green-700/40 outline-none focus:border-green-700 transition-all duration-300 ease-in-out px-2 py-1 placeholder:text-neutral-400 text-sm lg:w-[460px]`}
			placeholder={placeholder}
			value={value}
		/>
	);
};

export default Input;
