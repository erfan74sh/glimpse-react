import React from "react";
// asset
import TickIcon from "../../assets/icons/tick.png";

const ProgressBar = ({ step, totalSteps }) => {
	// create array from totalSteps
	const stepsArr = Array.from({ length: totalSteps }, (v, i) => i + 1);
	return (
		<div className="flex h-full flex-col items-center justify-between relative">
			{/* <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
			<div
				className={`absolute top-0 left-1/2 w-1 ${
					step === 0 ? "h-0" : step === 1 ? "h-1/2" : "h-full"
				} bg-gray-400 transform -translate-x-1/2 transition-all`}
			></div> */}
			{stepsArr.map((stepNum) => {
				return (
					<div className="w-6 h-6 flex items-center justify-center bg-blue-550 rounded-full text-center border-2 border-white z-10">
						<span className="text-xs font-light text-white">
							{step > stepNum - 1 ? (
								<img src={TickIcon} alt="tick icon" />
							) : (
								stepNum
							)}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default ProgressBar;
