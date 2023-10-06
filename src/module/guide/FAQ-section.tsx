"use client";
import { Disclosure } from "@headlessui/react";
import { BiSolidDownArrow } from "react-icons/bi";

const FAQSection = () => {
	const dummyFAQ = [
		{
			questions: "Bagaimana Supaya saya lorem ipsum ?",
			asnwer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga est aut praesentium eveniet. Dolore dolor iste laboriosam ullam error sunt pariatur vitae voluptatibus reiciendis odioharum distinctio laborum tenetur cupiditate quos cumque velit, praesentium? Vitae neque repellat possimus exercitationem.Minus vel in praesentium laboriosam voluptatibus repellat rem quis.",
		},
		{
			questions: "Bagaimana Supaya saya lorem ipsum ?",
			asnwer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga est aut praesentium eveniet. Dolore dolor iste laboriosam ullam error sunt pariatur vitae voluptatibus reiciendis odioharum distinctio laborum tenetur cupiditate quos cumque velit, praesentium? Vitae neque repellat possimus exercitationem.Minus vel in praesentium laboriosam voluptatibus repellat rem quis.",
		},
		{
			questions: "Bagaimana Supaya saya lorem ipsum ?",
			asnwer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga est aut praesentium eveniet. Dolore dolor iste laboriosam ullam error sunt pariatur vitae voluptatibus reiciendis odioharum distinctio laborum tenetur cupiditate quos cumque velit, praesentium? Vitae neque repellat possimus exercitationem.Minus vel in praesentium laboriosam voluptatibus repellat rem quis.",
		},
	];

	return (
		<main className='bg-neutral-100  px-10 py-6 min-h-[250px]'>
			<header className='font-bold text-2xl mb-4'>
				<h1>Pertanyaan yang sering diajukan ?</h1>
			</header>
			{dummyFAQ.map((item, index) => {
				return (
					<Disclosure key={index} as={"div"} className={"mb-3"}>
						{({ open }) => (
							<>
								<Disclosure.Button className='py-2 w-full text-start flex items-center justify-between px-4 rounded-sm shadow-sm text-neutral-200 bg-green-700'>
									<h1 className='text-sm'>{item.questions}</h1>
									<BiSolidDownArrow
										className={`${
											!open ? "" : "rotate-180"
										} transition-all duration-200 ease-in-out`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className='text-neutral-700 px-6 py-4 text-sm bg-neutral-200'>
									{item.asnwer}
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				);
			})}
		</main>
	);
};

export default FAQSection;
