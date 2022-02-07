import React from "react";

const EnergyConsumptionGrades = () => {
	return (
		<>
			<li className="flex gap-x-1">
				<span className="text-blue-550 font-medium capitalize">{`cooling load >`}</span>
				<span>
					your Alternative can earn{" "}
					<span className="text-blue-550 font-medium">EC++</span> from 19th
					topic of National Building Regulations of Iran
				</span>
			</li>
			<li className="flex gap-x-1">
				<span className="text-blue-550 font-medium capitalize">{`heating load >`}</span>
				<span>
					your Alternative can earn{" "}
					<span className="text-blue-550 font-medium">EC++</span> from 19th
					topic of National Building Regulations of Iran
				</span>
			</li>
		</>
	);
};

export default EnergyConsumptionGrades;
