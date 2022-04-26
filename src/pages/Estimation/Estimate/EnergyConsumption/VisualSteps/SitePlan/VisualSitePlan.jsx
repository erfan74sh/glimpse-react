import React from "react";
// component
import SitePlan3D from "../SitePlan/SitePlan3D";

const VisualSitePlan = () => {
	return (
		<>
			<h2 className="mb-9 border-b border-gray-500 pb-4 text-xl font-normal uppercase">
				section
			</h2>
			<div className="">
				<div className="h-96 w-full px-10">
					<SitePlan3D />
				</div>
			</div>
		</>
	);
};

export default VisualSitePlan;
