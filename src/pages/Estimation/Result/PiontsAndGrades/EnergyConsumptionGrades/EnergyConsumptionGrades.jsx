import React, { useState, useEffect } from "react";
// components
import PointAndGrade from "./PointAndGrade";

const EnergyConsumptionGrades = ({ alternatives }) => {
	const [outputData, setOutputData] = useState([]);
	useEffect(() => {
		const tempOutput = [];
		alternatives.forEach((alter) => {
			let tempData = {};
			const data = alter.data.filter(
				(v) =>
					v.name === "coolingload" ||
					v.name === "heatingload" ||
					v.name === "electriclight" ||
					v.name === "fanger20" ||
					v.name === "fanger10" ||
					v.name === "adaptiveashrae80" ||
					v.name === "adaptiveashrae90" ||
					v.name === "adaptiveencalss2por" ||
					v.name === "overheatot_occupied_hours" ||
					v.name === "underheatot_occupied_hours" ||
					v.name === "verheatdbt_occupied_hours" ||
					v.name === "underheatdbt_occupied_hours" ||
					v.name === "primary_energy" ||
					v.name === "total_energy"
			);
			data.forEach((element) => {
				tempData[element.name] = element.amt;
			});
			tempOutput.push({
				name: alter.name,
				id: alter.id,
				stroke: alter.stroke,
				outputs: tempData,
			});
		});
		setOutputData(tempOutput);
	}, [alternatives]);

	return (
		<>
			{outputData.map((alt, idx) => {
				return (
					<article key={idx}>
						<PointAndGrade alt={alt} />
					</article>
				);
			})}
		</>
	);
};

export default EnergyConsumptionGrades;
