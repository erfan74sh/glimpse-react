import React from "react";

const Simulations = () => {
	return (
		<section className="pt-20 pb-28">
			<ul className="flex flex-col items-center justify-center gap-y-5 gap-x-3 sm:flex-row md:gap-x-10 lg:gap-x-24">
				<li
					id="structure-simulations"
					className="shadow-neo flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-bold">سازه</span>
				</li>
				<li
					id="energy-simulations"
					className="shadow-neo flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-bold">مصرف انرژی</span>
				</li>
				<li
					id="ieq-simulations"
					className="shadow-neo flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-bold">آسایش حرارتی</span>
				</li>
			</ul>
		</section>
	);
};

export default Simulations;
