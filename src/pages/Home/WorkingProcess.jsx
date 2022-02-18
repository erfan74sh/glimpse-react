import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// assets
import SimulationIcon from "../../assets/icons/simulation.png";
import AnalyzingIcon from "../../assets/icons/analysing.png";
import DataSetIcon from "../../assets/icons/building-data-set.png";
import MachineLearningIcon from "../../assets/icons/machine-learning.png";
import ResultIcon from "../../assets/icons/result.png";
// icons
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const WorkingProcess = () => {
	return (
		<section>
			<header className="relative text-center">
				<span className="bg-blue-550 absolute left-1/2 top-1/2 z-0 block h-0.5 w-2/3 translate-y-1/2 -translate-x-1/2 transform"></span>
				<h3 className="text-blue-550 relative z-10 inline-block bg-white px-5 text-2xl font-bold">
					ساختار کلی و مراحل
				</h3>
			</header>
			<ul className="flex items-center justify-evenly  px-56 py-16">
				<li className="relative flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-white">
						<img
							src={SimulationIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="absolute top-full min-w-full pt-1 text-center font-medium">
						شبیه‌سازی
					</span>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faAngleLeft}
						className="text-4xl text-gray-400"
					/>
				</li>
				<li className="relative flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-white">
						<img
							src={AnalyzingIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="absolute top-full min-w-full pt-1 text-center font-medium">
						تحلیل و بررسی
					</span>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faAngleLeft}
						className="text-4xl text-gray-400"
					/>
				</li>
				<li className="relative flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-white">
						<img
							src={DataSetIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className="absolute top-full min-w-full pt-1 text-center font-medium">
						ساخت مجموعه داده
					</span>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faAngleLeft}
						className="text-4xl text-gray-400"
					/>
				</li>
				<li className="relative flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-white">
						<img
							src={MachineLearningIcon}
							alt="icon"
							className="h-1/2 w-1/2 object-contain"
						/>
					</div>
					<span className=" absolute top-full min-w-full pt-1 text-center font-medium">
						هوش مصنوعی
					</span>
				</li>
				<li>
					<FontAwesomeIcon
						icon={faAngleLeft}
						className="text-4xl text-gray-400"
					/>
				</li>
				<li className="relative flex flex-col items-center">
					<div className="shadow-neo flex h-32 w-32 items-center justify-center rounded-full bg-white">
						<img
							src={ResultIcon}
							alt="icon"
							className="h-3/5 w-3/5 object-contain"
						/>
					</div>
					<span className="absolute top-full min-w-full pt-1 text-center font-medium">
						نتایج
					</span>
				</li>
			</ul>
		</section>
	);
};

export default WorkingProcess;
