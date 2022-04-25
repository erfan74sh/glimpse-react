import React from "react";
// components
import VisualComfortGrades from "./VisualComfortGrades/VisualComfortGrades";
import EnergyConsumptionGrades from "./EnergyConsumptionGrades/EnergyConsumptionGrades";
const PointsAndGrades = ({ subset, alternatives }) => {
	return (
		<>
			{subset && subset !== "thermal_comfort" && (
				<section className="mt-18">
					<h2 className="mb-4 px-1 text-xl font-normal uppercase">
						points and grades
					</h2>
					<div className="shadow-full flex flex-col gap-y-5 rounded-md bg-white p-3 md:px-8  md:py-7">
						<div className="flex flex-col gap-y-3">
							{subset === "energy_consumption" && (
								<EnergyConsumptionGrades alternatives={alternatives} />
							)}
							{subset === "visual_comfort" && (
								<VisualComfortGrades alternatives={alternatives} />
							)}
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default PointsAndGrades;
