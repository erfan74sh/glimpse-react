import React from "react";
// asset
import TickIcon from "../../assets/icons/tick.png";

const ProgressBar = ({ step }) => {
	return (
		<div className="flex h-full flex-col items-center justify-between relative">
			<div className="absolute top-0 left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
			<div
				className={`absolute top-0 left-1/2 w-1 ${
					step === "geometry" ? "h-0" : step === "material" ? "h-1/2" : "h-full"
				} bg-gray-400 transform -translate-x-1/2 transition-all`}
			></div>
			<div className="w-6 h-6 flex items-center justify-center bg-blue-550 rounded-full text-center border-2 border-white z-10">
				<span className="text-xs font-light text-white">1</span>
			</div>
			<div className="w-6 h-6 flex items-center justify-center bg-blue-550 rounded-full text-center border-2 border-white z-10">
				<span className="text-xs font-light text-white">
					<img src={TickIcon} alt="tick icon" />
				</span>
			</div>
			<div className="w-6 h-6 flex items-center justify-center bg-blue-550 rounded-full text-center border-2 border-white z-10">
				<span className="text-xs font-light text-white">3</span>
			</div>
		</div>
	);
};

export default ProgressBar;
