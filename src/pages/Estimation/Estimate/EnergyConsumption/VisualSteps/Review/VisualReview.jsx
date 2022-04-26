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
			name: "wall_uvalue",
			label: "wall U value",
			unit: "",
			value: {
				1.719: "Brick wall + Brick facade",
				1.649: "Cement Block + Stone facade",
				0.979: "Cement Block + Cement facade",
				0.225:
					"Two layer Brick wall with Insulation in the middle + Brick facade",
			},
		},
		{
			name: "floor_uvalue",
			label: "floor U value",
			unit: "",
			value: {
				0.37: "Reinforced Concrete with air gap + Terrazzo",
				0.47: "Beam Block + Parquet flooring",
				0.65: "Reinforced concrete + Parquet flooring",
			},
		},
		{
			name: "roof_uvalue",
			label: "roof U value",
			unit: "",
			value: {
				0.878: "Gypsum Board + Reinforced Concrete + Terrazzo",
				0.211: "Reinforced Concrete with thermal insullation + Terrazzo",
				0.393: "Beam block + terrazzo",
				0.386: "Beam Block with out terrazzo",
				1.092: "Gypsum Plaster + Reinforced Concrete + Terrazzo",
			},
		},
		{
			name: "window_uvalue",
			label: "window U value",
			unit: "",
			value: {
				1.7: "Triple glazed windows",
				2.6: "Double low-E glazed windows",
				3.1: "Double glazed windows",
				5.7: "Single glazed windows",
			},
		},
		{
			name: "hvac",
			label: "HVAC system",
			unit: "",
			value: {
				0: "ideal air loads",
				1: "PTAC | residential",
				2: "PTHP | residential",
				7: "VAV w/reheat",
				8: "VAV w/PFP boxes",
				11: "fan coil units + DOAS",
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
								className="text-gray-650 flex flex-wrap justify-between border-b border-gray-400"
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
											? "on"
											: data[item.name] === "false"
											? "off"
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
