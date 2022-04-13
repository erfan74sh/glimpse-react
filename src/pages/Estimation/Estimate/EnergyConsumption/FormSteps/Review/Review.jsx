import React from "react";
import { useSelector } from "react-redux";
// state
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";

const Review = ({ prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);
	const fullData = [
		{
			name: "number_of_floor",
			label: "Floor Level",
			unit: "",
			value: {
				0: "ground floor",
				1: "1st floor",
				2: "2nd floor",
				3: "3rd floor",
				4: "4th floor",
				5: "5th floor",
			},
		},
		{
			name: "rotation_angle",
			label: "Rotation Angle",
			unit: "degree",
			value: data.rotation_angle,
		},
		{ name: "x_dim", label: "length", unit: "m", value: data.x_dim },
		{ name: "y_dim", label: "width", unit: "m", value: data.y_dim },
		{ name: "wwr_north", label: "WWR_north", unit: "", value: data.wwr_north },
		{ name: "wwr_south", label: "WWR_south", unit: "", value: data.wwr_south },
		{
			name: "shading_type",
			label: "Shading Type",
			unit: "",
			value: {
				1: "horizontal",
				2: "horizontal louvre",
				3: "vertical",
				4: "all modes",
			},
		},
		{
			name: "north_neighbor_distance",
			label: "North Neighbor Distance",
			unit: "m",
			value: data.north_neighbor_distance,
		},
		{
			name: "north_neighbor_height",
			label: "North Neighbor Height",
			unit: "m",
			value: data.north_neighbor_height,
		},
		{
			name: "south_neighbor_distance",
			label: "South Neighbor Distance",
			unit: "m",
			value: data.south_neighbor_distance,
		},
		{
			name: "south_neighbor_height",
			label: "South Neighbor Height",
			unit: "m",
			value: data.south_neighbor_height,
		},
	];

	return (
		<div className="flex h-full flex-col">
			<section className="flex flex-col pr-10">
				<h2 className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					{fullData.map((item, idx) => {
						return (
							<li
								className="flex justify-between border-b border-gray-400 text-gray-650"
								key={idx}
							>
								<span className="font-semibold text-gray-900">
									{item.label}:
								</span>
								<div>
									<span>
										{typeof item.value !== "object"
											? item.value
											: item.value[data[item.name]]}
									</span>
									<span className="text-sm normal-case text-gray-800">
										{item.unit && ` ${item.unit}`}
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="mt-auto flex justify-center gap-x-4 pr-10">
				<button
					type="button"
					className="flex items-center justify-between rounded-md border-2 border-blue-550 bg-white px-5 py-1 font-medium uppercase text-blue-550"
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
