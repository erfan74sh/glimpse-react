import React from "react";

const Simulations = () => {
	return (
		<section className="pt-20 pb-28">
			<ul className="flex justify-center gap-x-24">
				<li
					id="structure-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="font-bold text-gray-650">سازه</span>
				</li>
				<li
					id="energy-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="font-bold text-gray-650">مصرف انرژی</span>
				</li>
				<li
					id="ieq-simulations"
					className="flex h-56 w-40 flex-col items-center gap-y-4 rounded-lg pt-4 text-lg"
				>
					<span className="font-bold text-gray-650">آسایش حرارتی</span>
				</li>
			</ul>
		</section>
	);
};

export default Simulations;
