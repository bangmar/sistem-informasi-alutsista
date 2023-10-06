import Button from "@/components/atoms/button";
import { FC, ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

type TCardProps = {
	icon: ReactNode;
	title: string;
	isHasButton?: boolean;
	buttonText: string;
	link?: string;
};

const Card: FC<TCardProps> = ({
	buttonText,
	icon,
	title,
	isHasButton,
	link = "",
}) => {
	return (
		<section className='bg-neutral-100  rounded-sm shadow-sm w-full lg:w-52 px-10 h-56 md:h-64 flex gap-4 flex-col justify-between py-10 items-start'>
			{icon}
			<h1 className='text-neutral-600 text-xl font-bold'>{title}</h1>
			{isHasButton ? (
				<Button
					name='informasi-senjata-api'
					text={buttonText}
					hasLink={true}
					link={link}
					type='secondary'
					classname='text-green-700 font-bold !p-0 group hover:text-green-600'
					hasIcon
					icon={
						<BsArrowRight className='group-hover:ml-2 ease-in-out duration-150 transition-all' />
					}
				/>
			) : null}
		</section>
	);
};

export default Card;
