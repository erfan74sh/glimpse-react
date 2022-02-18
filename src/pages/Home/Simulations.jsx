import React from "react";

const Simulations = () => {
	return (
		<section className="pt-20 pb-28">
			<header className="pb-6">
				<h3 className="text-blue-550 text-center text-2xl font-bold">
					Number of Simulations
				</h3>
			</header>
			<ul className="flex justify-center gap-x-24">
				<li
					id="structure-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-medium">Structure</span>
					<span className="text-xl font-bold text-gray-600">+7500</span>
				</li>
				<li
					id="energy-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-medium">Energy</span>
					<span className="text-xl font-bold text-gray-600">+5800</span>
				</li>
				<li
					id="ieq-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-medium">IEQ</span>
					<span className="text-xl font-bold text-gray-600">+5900</span>
				</li>
			</ul>
		</section>
	);
};

export default Simulations;
