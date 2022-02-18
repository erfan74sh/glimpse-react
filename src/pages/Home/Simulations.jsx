import React from "react";

const Simulations = () => {
	return (
		<section className="pt-20 pb-28">
			<ul className="flex justify-center gap-x-24">
				<li
					id="structure-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-bold">آسایش حرارتی</span>
				</li>
				<li
					id="energy-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-bold">مصرف انرژی</span>
				</li>
				<li
					id="ieq-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="text-gray-650 font-bold">سازه</span>
				</li>
			</ul>
		</section>
	);
};

export default Simulations;
