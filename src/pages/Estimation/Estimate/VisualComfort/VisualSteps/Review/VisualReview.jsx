import React from "react";
import { useSelector } from "react-redux";
// state
import { selectVisualComfortData } from "../../../../../../features/visualComfortData/VisualComfortDataSlice";

const VisualReview = () => {
	const data = useSelector(selectVisualComfortData);

	return (
		<div className="flex h-full flex-col">
			<section className="flex flex-col pr-10">
				<h2 className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							south neighbor distance:
						</span>
						<span>{data.south_neighbor_distance}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							south neighbor height:
						</span>
						<span>{data.south_neighbor_height}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							north neighbor distance:
						</span>
						<span>{data.north_neighbor_distance}</span>
					</li>
					<li className="text-gray-650 flex justify-between border-b border-gray-400">
						<span className="font-semibold capitalize text-gray-900">
							north neighbor height:
						</span>
						<span>{data.north_neighbor_height}</span>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default VisualReview;
