import React, { useEffect, useState } from "react";
import PointAndGrade from "./PointAndGrade";

const VisualComfortGrades = ({ alternatives }) => {
	const [outputData, setOutputData] = useState([]);
	useEffect(() => {
		const tempOutput = [];
		alternatives.forEach((alter) => {
			let tempData = {};
			const data = alter.data.filter(
				(v) =>
					v.name === "udi" ||
					v.name === "sda" ||
					v.name === "ase" ||
					v.name === "svd"
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
		console.log(tempOutput);
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

export default VisualComfortGrades;
