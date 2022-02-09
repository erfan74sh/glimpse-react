import React, { useEffect, useState } from "react";

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
				const { svd, sda, udi, ase } = alt.outputs;
				return (
					<article key={idx}>
						<h4
							className=" border-b-2 py-1 font-medium"
							style={{ color: alt.stroke, borderColor: alt.stroke }}
						>
							{alt.name}
						</h4>
						<ul className=" mt-1 flex flex-col gap-y-1.5">
							<li className="flex gap-x-1">
								<span className="text-blue-550 font-medium">{`UDI >`}</span>
								{udi < 75 ? (
									<span>
										your Alternative is{" "}
										<span className="font-medium text-red-500">
											not acceptable
										</span>{" "}
										from LEED V.4
									</span>
								) : (
									<span>
										your Alternative can earn{" "}
										<span className="text-blue-550 font-medium">
											{udi < 90 ? "2 points" : "3 points"}{" "}
										</span>
										from LEED V.4
									</span>
								)}
							</li>
							<li className="flex gap-x-1">
								<span className="text-blue-550 font-medium">{`sVD >`}</span>
								<span>
									your Alternative is{" "}
									<span
										className={`font-medium ${
											svd <= 10 ? "text-blue-550" : "text-red-500"
										}`}
									>
										{svd <= 10 ? "acceptabe" : "not acceptable"}
									</span>{" "}
									from "LEED" and "19th topic of National Building Regulations
									of Iran"
								</span>
							</li>
							<li className="flex gap-x-1">
								<span className="text-blue-550 font-medium">{`ASE >`}</span>
								<span>
									your Alternative is{" "}
									<span
										className={`font-medium ${
											ase <= 10 ? "text-blue-550" : "text-red-500"
										}`}
									>
										{ase <= 10 ? "acceptabe" : "not acceptable"}
									</span>{" "}
									from "LEED" and "19th topic of National Building Regulations
									of Iran"
								</span>
							</li>
							<li className="flex gap-x-1">
								<span className="text-blue-550 font-medium">{`sDA >`}</span>
								{sda < 55 ? (
									<span>
										your Alternative is{" "}
										<span className="font-medium text-red-500">
											not acceptable
										</span>{" "}
										from 19th topic of National Building Regulations of Iran
									</span>
								) : (
									<span>
										your Alternative can earn{" "}
										<span className="text-blue-550 font-medium">
											{sda < 75 ? "EC" : sda < 85 ? "EC+" : "EC++"}
										</span>{" "}
										from 19th topic of National Building Regulations of Iran and{" "}
										<span className="text-blue-550 font-medium">
											{sda < 75 ? "2 points" : "3 points"}{" "}
										</span>
										from LEED V.4
									</span>
								)}
							</li>
						</ul>
					</article>
				);
			})}
		</>
	);
};

export default VisualComfortGrades;
