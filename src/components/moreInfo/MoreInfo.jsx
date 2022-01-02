import React from "react";

const MoreInfo = ({ moreInfo }) => {
	return (
		<div>
			<span className="flex items-center justify-center w-4 h-4 text-xs border border-blue-550 rounded-full text-blue-550">
				!
			</span>
			<span>{moreInfo}</span>
		</div>
	);
};

export default MoreInfo;
