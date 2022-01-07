import React from "react";
// component
import SitePlan3D from "../SitePlan/SitePlan3D";

const VisualSitePlan = () => {
	return (
		<>
			<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				details
			</h2>
			<div className="">
				<div className="w-full px-10 h-96">
					<SitePlan3D />
				</div>
			</div>
		</>
	);
};

export default VisualSitePlan;
