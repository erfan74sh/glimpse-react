import React from "react";
import { useSelector } from "react-redux";
// state
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";

const Review = ({ prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);
	const fullData = [
		{
			name: "number_of_floor",
			label: "floor level",
			unit: "",
			value: data.number_of_floor,
		},
		{
			name: "rotation_angle",
			label: "rotation angle",
			unit: "degree",
			value: data.rotation_angle,
		},
		{ name: "x_dim", label: "width", unit: "m", value: data.x_dim },
		{ name: "y_dim", label: "length", unit: "m", value: data.y_dim },
		{ name: "wwr_north", label: "wwr_north", unit: "%", value: data.wwr_north },
		{ name: "wwr_south", label: "wwr_south", unit: "%", value: data.wwr_south },
		{
			name: "shading_type",
			label: "shading type",
			unit: "",
			value: {
				1: "vertical",
				2: "horizontal",
				3: "horizontal louvers",
				4: "all modes",
			},
		},
		{
			name: "wall_uvalue",
			label: "wall U value",
			unit: "",
			value: data.wall_uvalue,
		},
		{
			name: "floor_uvalue",
			label: "floor U value",
			unit: "",
			value: data.floor_uvalue,
		},
		{
			name: "roof_uvalue",
			label: "roof U value",
			unit: "",
			value: data.roof_uvalue,
		},
		{
			name: "window_uvalue",
			label: "window U value",
			unit: "",
			value: data.window_uvalue,
		},
	];

	return (
		<div className="flex h-full flex-col">
			<section className="flex flex-col pr-10">
				<h2 className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							floor:
						</span>
						<span>{data.number_of_floor}</span>
					</li>
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
							wall u-value:
						</span>
						<span>{data.wall_uvalue}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							roof u-value:
						</span>
						<span>{data.roof_uvalue}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							floor u-value:
						</span>
						<span>{data.floor_uvalue}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							window u-value:
						</span>
						<span>{data.window_uvalue}</span>
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
					prev <span className="text-xs lowercase">(ventilation)</span>
				</button>
			</section>
		</div>
	);
};

export default Review;
