import React from "react";
// components
import VisualComfortGrades from "./VisualComfortGrades/VisualComfortGrades";
import EnergyConsumptionGrades from "./EnergyConsumptionGrades/EnergyConsumptionGrades";
const PointsAndGrades = ({ subset }) => {
	return (
		<>
			{subset !== "thermal comfort" && (
				<div className="shadow-full rounded-md bg-white px-8 py-7">
					<ul className="flex flex-col gap-y-3">
						{subset === "energy consumption" && <EnergyConsumptionGrades />}
						{subset === "visual comfort" && <VisualComfortGrades />}
					</ul>
				</div>
			)}
		</>
	);
};

export default PointsAndGrades;
