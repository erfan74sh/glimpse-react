import React from "react";
import { useSelector } from "react-redux";
// state
import { selectVisualComfortData } from "../../../../../../features/visualComfortData/VisualComfortDataSlice";

const VisualReview = () => {
	const data = useSelector(selectVisualComfortData);

	const fullData = [
		{
			name: "north_neighbor_distance",
			label: "north neighbor distance",
			unit: "m",
			value: data.north_neighbor_distance,
		},
		{
			name: "north_neighbor_height",
			label: "north neighbor height",
			unit: "m",
			value: data.north_neighbor_height,
		},
		{
			name: "south_neighbor_distance",
			label: "south neighbor distance",
			unit: "m",
			value: data.south_neighbor_distance,
		},
		{
			name: "south_neighbor_height",
			label: "south neighbor height",
			unit: "m",
			value: data.south_neighbor_height,
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
								className="text-gray-650 flex justify-between border-b border-gray-400"
								key={idx}
							>
								<span className="font-semibold capitalize text-gray-900">
									{item.label}:
								</span>
								<div>
									<span>
										{typeof item.value !== "object"
											? item.value
											: item.value[data[item.name]]}
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
