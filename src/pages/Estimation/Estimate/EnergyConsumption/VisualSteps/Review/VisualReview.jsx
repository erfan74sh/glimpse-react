import React from "react";
import { useSelector } from "react-redux";
// state
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";

const VisualReview = () => {
	const data = useSelector(selectEnergyConsumptionData);
	const fullData = [
		{
			name: "east_wall_bc",
			label: "east wall boundry condition",
			unit: "",
			value: data.east_wall_bc,
		},
		{
			name: "west_wall_bc",
			label: "west wall boundry condition",
			unit: "",
			value: data.west_wall_bc,
		},
		{
			name: "south_wall_bc",
			label: "south wall boundry condition",
			unit: "",
			value: data.south_wall_bc,
		},
		{
			name: "north_wall_bc",
			label: "north wall boundry condition",
			unit: "",
			value: data.north_wall_bc,
		},
		{
			name: "roof_bc",
			label: "roof boundry condition",
			unit: "",
			value: data.roof_bc,
		},
		{
			name: "floor_bc",
			label: "floor boundry condition",
			unit: "",
			value: data.floor_bc,
		},
		{
			name: "north_neighbor_distance",
			label: "north neighbor distance",
			unit: "m",
			value: data.north_neighbor_distance,
		},
		{
			name: "north_neighbor_height",
			label: "north neighbor height",
			unit: "m",
			value: data.north_neighbor_height,
		},
		{
			name: "south_neighbor_distance",
			label: "south neighbor distance",
			unit: "m",
			value: data.south_neighbor_distance,
		},
		{
			name: "south_neighbor_height",
			label: "south neighbor height",
			unit: "m",
			value: data.south_neighbor_height,
		},
		{
			name: "hvac",
			label: "HVAC system",
			unit: "",
			value: data.hvac,
		},
		{
			name: "natural_ventilation",
			label: "natural ventilation",
			unit: "",
			value: data.natural_ventilation,
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
							east wall boundry condition:
						</span>
						<span>{data.east_wall_bc}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							west wall boundry condition:
						</span>
						<span>{data.west_wall_bc}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							south wall boundry condition:
						</span>
						<span>{data.south_wall_bc}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							north wall boundry condition:
						</span>
						<span>{data.north_wall_bc}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							roof boundry condition:
						</span>
						<span>{data.roof_bc}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							floor boundry condition:
						</span>
						<span>{data.floor_bc}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							south neighbor distance:
						</span>
						<span>{data.south_neighbor_distance}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							south neighbor height:
						</span>
						<span>{data.south_neighbor_height}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							north neighbor distance:
						</span>
						<span>{data.north_neighbor_distance}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							north neighbor height:
						</span>
						<span>{data.north_neighbor_height}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							HVAC system:
						</span>
						<span>{data.hvac}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							natural ventilation:
						</span>
						<span>{data.natural_ventilation}</span>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default VisualReview;
