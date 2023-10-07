"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";

type TButtonProps = {
	name: string;
	classname?: string;
	text: string;
	hasLink?: boolean;
	link?: string;
	cat: "primary" | "secondary";
	hasIcon?: boolean;
	icon?: ReactNode;
	type?: "button" | "submit" | "reset";
};

const Button: FC<TButtonProps> = ({
	classname,
	name,
	text,
	hasLink = false,
	link = "/",
	cat = "primary",
	hasIcon,
	icon,
	type = "button",
}) => {
	return (
		<button
			name={name}
			type={type}
			className={`${classname} ${
				cat === "primary"
					? "bg-green-800 hover:bg-green-700 ease-in-out duration-300"
					: ""
			} px-4 py-1.5 rounded-sm shadow-sm`}>
			<section className='flex items-center gap-2'>
				{hasLink ? <Link href={link as string}>{text}</Link> : <h1>{text}</h1>}
				{hasIcon ? icon : null}
			</section>
		</button>
	);
};

export default Button;
