"use client";

import { Bar } from "react-chartjs-2";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
	Chart as ChartJS,
	BarElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
} from "chart.js";
import { GiBrokenBone } from "react-icons/gi";
ChartJS.register(
	BarElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler
);
const data = {
	labels: ["Aktif", "Rusak", "Dalam Perawatan"],
	datasets: [
		{
			label: "Pesawat",
			backgroundColor: "rgb(19, 131, 123)",
			borderColor: "white",
			borderWidth: 1,
			data: [12, 27, 8],
		},
		{
			label: "Senjata Api",
			backgroundColor: "rgb(74, 193, 162)",
			borderColor: "white",
			borderWidth: 1,
			data: [20, 7, 10],
		},
		{
			label: "Tank",
			backgroundColor: "rgb(253, 230, 138)",
			borderColor: "white",
			borderWidth: 1,
			data: [1, 2, 3],
		},
	],
};

const StatusChart = () => {
	return (
		<section className='pt-4 pb-6  bg-slate-50/60 rounded-md shadow-md '>
			<h1 className='text-xl text-center font-medium mb-2 text-slate-700'>
				Statistik Ketersediaan Lautsista
			</h1>
			<p className='text-sm mb-6 text-center px-10'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, dolorum
				amet repellat fuga expedita quis necessitatibus accusamus voluptatum
				rerum dolorem aliquid in ea, nihius dignissimos et officia ea aliquam!
			</p>
			<section className='h-[440px] overflow-hidden  relative grid place-items-center pt-4  '>
				<Bar
					data={data}
					options={{
						plugins: {
							legend: { display: true, position: "right" },
						},
					}}
				/>
			</section>
		</section>
	);
};

export default StatusChart;
