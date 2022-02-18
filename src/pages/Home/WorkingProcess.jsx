import React from "react";
// assets
import SimulationIcon from "../../assets/icons/simulation.png";
import AnalyzingIcon from "../../assets/icons/analysing.png";
import DataSetIcon from "../../assets/icons/building-data-set.png";
import MachineLearningIcon from "../../assets/icons/machine-learning.png";
import ResultIcon from "../../assets/icons/result.png";

const WorkingProcess = () => {
	return (
		<section>
			<header className="bg-white text-center">
				<h3 className="text-gray-650 text-2xl font-bold">ساختار کلی و مراحل</h3>
			</header>
			<ul className="flex justify-between px-56 py-16">
				<li className="flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
						<img
							src={SimulationIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="font-medium">شبیه‌سازی</span>
				</li>
				<li className="flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
						<img
							src={AnalyzingIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="font-medium">تحلیل و بررسی</span>
				</li>
				<li className="flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
						<img
							src={DataSetIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="font-medium">ساخت مجموعه داده</span>
				</li>
				<li className="flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
						<img
							src={MachineLearningIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="text-center font-medium">هوش مصنوعی</span>
				</li>
				<li className="flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
						<img
							src={ResultIcon}
							alt="icon"
							className="h-3/5 w-3/5 object-contain"
						/>
					</div>
					<span className="font-medium">نتایج</span>
				</li>
			</ul>
		</section>
	);
};

export default WorkingProcess;
