import CategoryChart from "./category-chart";
import StatusChart from "./status-chart";

const StatisticModule = () => {
	return (
		<section>
			<header className='mb-6'>
				<h1 className='mb-2 text-2xl font-bold text-slate-800'>
					Laporan Analisis Alutsista
				</h1>
				<p className='text-sm text-slate-700'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias
					incidunt fugit voluptas sunt dolorum eligendi esse tempore iure magni
					ducimus earum corporis rem vitae accusamus exercitationem, facilis
					consequatur magnam enim neque quia, inventore ut, perspiciatis
					similique! Perferendis voluptas consequuntur itaque aspernatur!
					Facere, sit eveniet.
				</p>
			</header>
			<CategoryChart />
			<section className='py-10'>
				<h1 className='text-xl font-medium mb-1 text-slate-700'>
					Sebaran Pangkalan Lautsista
				</h1>
				<p className='text-sm mb-6'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quos
					natus perspiciatis aut eligendi est totam velit adipisci cum!
				</p>
				<iframe
					src='https://www.google.com/maps/d/embed?mid=1VgCvNvXYIEaOFnqoiFP2eFcOjLE&hl=en&ehbc=2E312F'
					width='640'
					height='480'
					className='w-full'></iframe>
			</section>
			<StatusChart />
		</section>
	);
};

export default StatisticModule;
