import React from "react";

const MoreInfo = ({ moreInfo }) => {
	return (
		<div className="relative flex items-center">
			<span className="flex items-center justify-center w-4 h-4 text-xs border border-blue-550 rounded-full text-blue-550">
				!
			</span>
			<span className="w-max px-1 absolute left-full transform translate-x-1 rounded-md text-white text-sm bg-gray-650 bg-opacity-75">
				{moreInfo}
			</span>
		</div>
	);
};

export default MoreInfo;
