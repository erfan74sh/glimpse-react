import React from "react";
import { useSelector } from "react-redux";
// state
import { selectInput } from "../../../../../../features/data/inputDataSlice";

const VisualReview = () => {
	const data = useSelector(selectInput);

	return (
		<div className="h-full flex flex-col">
			<section className="flex flex-col pr-10">
				<h2 className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							east wall boundry condition:
						</span>
						<span>{data.eastWallCondition}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							west wall boundry condition:
						</span>
						<span>{data.westWallCondition}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							south wall boundry condition:
						</span>
						<span>{data.southWallCondition}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							north wall boundry condition:
						</span>
						<span>{data.northWallCondition}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							roof boundry condition:
						</span>
						<span>{data.roofCondition}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							floor boundry condition:
						</span>
						<span>{data.floorCondition}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							south neighbor distance:
						</span>
						<span>{data.southNeighborDist}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							south neighbor height:
						</span>
						<span>{data.southNeighborHeight}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							north neighbor distance:
						</span>
						<span>{data.northNeighborDist}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							north neighbor height:
						</span>
						<span>{data.northNeighborHeight}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							HVAC system:
						</span>
						<span>{data.HVAC}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							natural ventilation:
						</span>
						<span>{data.naturalVent}</span>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default VisualReview;
