import React from "react";
// asset
import TickIcon from "../../assets/icons/tick.png";

const ProgressBar = ({ currentStep, totalSteps }) => {
	// create array from totalSteps
	const stepsArr = Array.from({ length: totalSteps }, (v, i) => i + 1);
	return (
		<div className="relative flex h-full flex-col items-center justify-between">
			{/* whole progress */}
			<div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-200"></div>
			{/* completed progress */}
			<div
				className={`absolute top-0 left-1/2 w-1 ${
					currentStep === 0
						? "h-0"
						: currentStep === totalSteps - 1 || currentStep === totalSteps
						? "h-full"
						: `h-${currentStep}/${totalSteps - 1}`
				} -translate-x-1/2 transform bg-gray-400 transition-all`}
			></div>
			{/* progress steps */}
			{stepsArr.map((stepNum, idx) => {
				return (
					<div
						key={idx}
						className="bg-blue-550 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-center"
					>
						<span className="text-xs font-light text-white">
							{currentStep > stepNum - 1 ? (
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
