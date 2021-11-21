import React from "react";
// asset
// import TickIcon from "../../assets/icons/tick.png";

const ProgressBar = () => {
	return (
		<div className="flex h-full flex-col items-center pt-9">
			<div className="w-6 h-6 flex items-center content-center bg-blue-550 rounded-full text-center border-2 border-white">
				<span className="mx-auto p-1 text-xs font-light text-white">1</span>
			</div>
			<span className="h-1/2 w-1 bg-gray-400"></span>
			<div className="w-6 h-6 flex items-center content-center bg-blue-550 rounded-full text-center border-2 border-white">
				<span className="mx-auto p-1 text-xs font-light text-white">2</span>
			</div>
			<span className="h-1/2 w-1 bg-gray-200"></span>
			<div className="w-6 h-6 flex items-center content-center bg-blue-550 rounded-full text-center border-2 border-white">
				<span className="mx-auto p-1 text-xs font-light text-white">3</span>
			</div>
		</div>
	);
};

export default ProgressBar;
