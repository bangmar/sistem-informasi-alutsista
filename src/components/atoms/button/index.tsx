"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";

type TButtonProps = {
	name: string;
	classname?: string;
	text: string;
	hasLink?: boolean;
	link?: string;
	type: "primary" | "secondary";
	hasIcon?: boolean;
	icon?: ReactNode;
};

const Button: FC<TButtonProps> = ({
	classname,
	name,
	text,
	hasLink = false,
	link = "/",
	type = "primary",
	hasIcon,
	icon,
}) => {
	return (
		<button
			name={name}
			className={`${classname} ${
				type === "primary"
					? "bg-green-800 hover:bg-green-700 ease-in-out duration-300"
					: ""
			} px-4 py-1.5 rounded-sm shadow-sm`}>
			<section className='flex items-center gap-2'>
				{hasLink ? <Link href={link as string}>{text}</Link> : <h1>text</h1>}
				{hasIcon ? icon : null}
			</section>
		</button>
	);
};

export default Button;
