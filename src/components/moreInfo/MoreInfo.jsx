import React from "react";

const MoreInfo = ({ moreInfo }) => {
	return (
		<div className="relative flex items-center group">
			<span className="flex items-center justify-center w-4 h-4 text-xs font-bold border border-blue-550 rounded-full text-blue-550 cursor-help">
				!
			</span>
			<span className="hidden w-max px-2 py-1.5 absolute left-full transform translate-x-1 rounded-md text-white text-xs font-medium bg-gray-650 bg-opacity-90 group-hover:block z-10">
				{moreInfo}
			</span>
		</div>
	);
};

export default MoreInfo;
