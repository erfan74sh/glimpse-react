import React from "react";
// components
import VisualComfortGrades from "./VisualComfortGrades/VisualComfortGrades";
import EnergyConsumptionGrades from "./EnergyConsumptionGrades/EnergyConsumptionGrades";
const PointsAndGrades = ({ subset, alternatives }) => {
	return (
		<>
			{subset && subset !== "thermal comfort" && (
				<section className="mt-18">
					<h2 className="mb-4 px-8 text-xl font-normal uppercase">
						points and grades
					</h2>
					<div className="shadow-full rounded-md bg-white px-8 py-7">
						<ul className="flex flex-col gap-y-3">
							{subset === "energy consumption" && (
								<EnergyConsumptionGrades alternatives={alternatives} />
							)}
							{subset === "visual comfort" && (
								<VisualComfortGrades alternatives={alternatives} />
							)}
						</ul>
					</div>
				</section>
			)}
		</>
	);
};

export default PointsAndGrades;
