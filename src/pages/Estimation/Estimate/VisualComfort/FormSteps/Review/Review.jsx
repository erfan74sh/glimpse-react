import React from "react";
import { useSelector } from "react-redux";
// state
import { selectVisualComfortData } from "../../../../../../features/visualComfortData/VisualComfortDataSlice";

const Review = ({ prevStep }) => {
	const data = useSelector(selectVisualComfortData);

	return (
		<div className="flex h-full flex-col">
			<section className="mb-8 flex flex-col pr-10 ">
				<h2 className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							rotation:
						</span>
						<span>{data.rotation_angle}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							width:
						</span>
						<span>{data.x_dim}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							length:
						</span>
						<span>{data.y_dim}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							WWR-north:
						</span>
						<span>{data.wwr_north}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							WWR-south:
						</span>
						<span>{data.wwr_south}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							shading type:
						</span>
						<span>{data.shading_type}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							reflectance wall:
						</span>
						<span>{data.reflectance_wall}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							reflectance ceiling:
						</span>
						<span>{data.reflectance_celing}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							reflectance floor:
						</span>
						<span>{data.reflectance_floor}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							VT glass:
						</span>
						<span>{data.vt_glass}</span>
					</li>
				</ul>
			</section>
			<section className="mt-auto flex justify-center gap-x-4 pr-10">
				<button
					type="button"
					className="text-blue-550 border-blue-550 flex items-center justify-between rounded-md border-2 bg-white px-5 py-1 font-medium uppercase"
					onClick={prevStep}
					value="site plan"
				>
					prev <span className="text-xs lowercase">(SitePlan)</span>
				</button>
			</section>
		</div>
	);
};

export default Review;
