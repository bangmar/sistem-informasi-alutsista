"use client";
import Link from "next/link";
import { FC } from "react";

type TButtonProps = {
	name: string;
	classname?: string;
	text: string;
	hasLink?: boolean;
	link?: string;
	type: "primary" | "secondary";
};

const Button: FC<TButtonProps> = ({
	classname,
	name,
	text,
	hasLink = false,
	link = "/",
	type = "primary",
}) => {
	return (
		<button
			name={name}
			className={`${classname} ${
				type === "primary"
					? "bg-green-800 hover:bg-green-700 ease-in-out duration-300"
					: ""
			} px-4 py-1 rounded-sm shadow-sm`}>
			{hasLink ? <Link href={link as string}>{text}</Link> : <h1>text</h1>}
		</button>
	);
};

export default Button;
