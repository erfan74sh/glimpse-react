import React from "react";

const PointsAndGrades = () => {
	return (
		<div className="px-8 py-7 rounded-md shadow-full bg-white">
			<ul className="flex flex-col gap-y-3">
				<li className="flex gap-x-1">
					<span className="font-medium text-blue-550 capitalize">{`cooling load >`}</span>
					<span>
						your Alternative can earn{" "}
						<span className="font-medium text-blue-550">EC++</span> from 19th
						topic of National Building Regulations of Iran
					</span>
				</li>
				<li className="flex gap-x-1">
					<span className="font-medium text-blue-550 capitalize">{`heating load >`}</span>
					<span>
						your Alternative can earn{" "}
						<span className="font-medium text-blue-550">EC++</span> from 19th
						topic of National Building Regulations of Iran
					</span>
				</li>
			</ul>
		</div>
	);
};

export default PointsAndGrades;
