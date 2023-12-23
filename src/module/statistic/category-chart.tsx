"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { CgAirplane } from "react-icons/cg";
import { FaGun } from "react-icons/fa6";
import { GiTank } from "react-icons/gi";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ["Pesawat", "Senjata Api", "Tank"],
	datasets: [
		{
			data: [90, 60, 40],
			backgroundColor: [
				"rgb(19, 131, 123)",
				"rgb(74, 193, 162)",
				"rgb(253, 230, 138)",
			],
			borderColor: [
				"rgb(19, 131, 123)",
				"rgb(74, 193, 162)",
				"rgb(253, 230, 138)",
			],
			borderWidth: 1,
		},
	],
};

const CategoryChart = () => {
	return (
		<main className=' gap-10 grid grid-cols-2 bg-slate-50/60   rounded-md shadow-md '>
			<aside className='w-full py-12  px-10'>
				<div className='h-[420px] overflow-hidden -mt-4 relative grid place-items-center  '>
					<Doughnut
						data={data}
						options={{
							cutout: "70%",
							radius: "80%",
							plugins: {
								legend: { display: false },
							},
						}}
					/>
					<section className='absolute grid place-items-center '>
						<p className=' text-5xl mb-1 font-bold'>192</p>
						<p className=' text-base '>Units</p>
					</section>
				</div>
				<div className=' grid place-items-center'>
					<section className='flex  pt-2 items-center'>
						<span className='block h-8 w-8 bg-[#13837b] rounded-full'></span>
						<span className='block h-8 w-8 bg-[#4ac1a2] -ml-2 rounded-full'></span>
						<span className='block h-8 w-8 bg-[#fde68a] -ml-2 rounded-full'></span>
						<section className='font-bold text-lg ml-2'>
							<p className='text-base font-medium -mb-3'>Terakhir Update</p>
							<span className='font-normal text-sm'>23 Jan 2023</span>
						</section>
					</section>
				</div>
			</aside>
			<aside className=' grid place-items-center bg-slate-100/70 px-10'>
				<section>
					<h1 className='text-xl font-medium mb-4 text-slate-700'>
						Statistik Katogori Lautsista
					</h1>
					<section className='flex gap-3 flex-wrap'>
						<span className='flex items-center gap-3 bg-[#13837b] text-slate-100 rounded-md shadow-sm w-40 px-4 py-1.5 text-sm'>
							<CgAirplane />
							<p className='font-bold'>20 Pesawat </p>
						</span>
						<span className='flex items-center gap-3 bg-[#4ac1a2] text-slate-100 rounded-md shadow-sm w-40 px-4 py-1.5 text-sm'>
							<FaGun />
							<p className='font-bold'>40 Senjata Api </p>
						</span>

						<span className='flex items-center gap-3 bg-[#fde68a] text-slate-800 rounded-md shadow-sm w-40 px-4 py-1.5 text-sm'>
							<GiTank />
							<p className='font-bold'>25 Tank </p>
						</span>
					</section>
					<section className='text-sm pt-4 flex flex-col gap-2'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							odit possimus dolorum quae et molestiae recusandae accusantium
							dicta ex atque tempore quo itaque error incidunt expedita magni!
							Atque, iste ut.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							odit possimus empore quo itaque error incidunt expedita magni!
							Atque, iste ut.
						</p>
					</section>
				</section>
			</aside>
		</main>
	);
};

export default CategoryChart;
