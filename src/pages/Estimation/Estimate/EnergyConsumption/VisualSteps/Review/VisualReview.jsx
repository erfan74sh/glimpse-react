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
			value: {
				0: "adiabatic",
				1: "external",
				2: "ground",
			},
		},
		{
			name: "west_wall_bc",
			label: "west wall boundry condition",
			unit: "",
			value: {
				0: "adiabatic",
				1: "external",
				2: "ground",
			},
		},
		{
			name: "south_wall_bc",
			label: "south wall boundry condition",
			unit: "",
			value: {
				0: "adiabatic",
				1: "external",
				2: "ground",
			},
		},
		{
			name: "north_wall_bc",
			label: "north wall boundry condition",
			unit: "",
			value: {
				0: "adiabatic",
				1: "external",
				2: "ground",
			},
		},
		{
			name: "roof_bc",
			label: "roof boundry condition",
			unit: "",
			value: {
				0: "adiabatic",
				1: "external",
				2: "ground",
			},
		},
		{
			name: "floor_bc",
			label: "floor boundry condition",
			unit: "",
			value: {
				0: "adiabatic",
				1: "external",
				2: "ground",
			},
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
			value: {
				1: "ideal air loads",
				2: "PTAC | residential",
				3: "PTHP | residential",
				4: "VAV w/reheat",
				5: "VAV w/PFP boxes",
				6: "fan coil units + DOAS",
			},
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
					{fullData.map((item, idx) => {
						return (
							<li
								className="text-gray-650 flex justify-between border-b border-gray-400"
								key={idx}
							>
								<span className="font-semibold capitalize text-gray-900">
									{item.label}:
								</span>
								<div>
									<span>
										{typeof item.value === "object"
											? item.value[data[item.name]]
											: data[item.name] === "true"
											? "yes"
											: data[item.name] === "false"
											? "no"
											: item.value}
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
		</div>
	);
};

export default VisualReview;
