import React from "react";

const ItemLoading = () => {
	return (
		<div>
			<section className='flex gap-8 flex-wrap'>
				{[1, 2, 3, 4]?.map((item: any, index: number) => {
					return (
						<section
							key={index}
							className='bg-gray-50 animate-pulse rounded-sm shadow-md w-60 overflow-hidden '>
							<span className='w-60 h-44  block  overflow-hidden '></span>
							<section className=' px-6  py-4'>
								<h1 className='text-slate-800 text-lg font-bold'>
									{item?.name}
								</h1>
								<span className='group flex gap-2 text-green-700 items-center text-sm '>
									<span className='h-10 block'></span>
								</span>
							</section>
						</section>
					);
				})}
			</section>
		</div>
	);
};

export default ItemLoading;
