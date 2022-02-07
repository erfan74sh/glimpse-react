import React from "react";

const VisualComfortGrades = ({ alternatives }) => {
	return (
		<>
			{alternatives.map((alt) => {
				return (
					<article>
						<h4 className="border-blue-550 border-b py-1">{alt.name}</h4>
						<ul>
							<li className="flex gap-x-1">
								<span className="text-blue-550 font-medium capitalize">{`cooling load >`}</span>
								<span>
									your Alternative can earn{" "}
									<span className="text-blue-550 font-medium">EC++</span> from
									19th topic of National Building Regulations of Iran
								</span>
							</li>
							<li className="flex gap-x-1">
								<span className="text-blue-550 font-medium capitalize">{`heating load >`}</span>
								<span>
									your Alternative can earn{" "}
									<span className="text-blue-550 font-medium">EC++</span> from
									19th topic of National Building Regulations of Iran
								</span>
							</li>
						</ul>
					</article>
				);
			})}
		</>
	);
};

export default VisualComfortGrades;
