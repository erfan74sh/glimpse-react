import React from "react";
import { useSelector } from "react-redux";
// state
import { selectInput } from "../../../../../features/data/inputDataSlice";

const Review = ({ handleStep }) => {
	const data = useSelector(selectInput);

	const handlePrevStep = (e) => {
		handleStep(e);
	};

	return (
		<>
			<section className="flex flex-col pr-10">
				<h2 className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					review
				</h2>
				<ul className="flex flex-col gap-y-2">
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							X-dimention:
						</span>
						<span>{data.xDim}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							Y-dimention:
						</span>
						<span>{data.yDim}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							WWR-north:
						</span>
						<span>{data.wwrNorth}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							WWR-south:
						</span>
						<span>{data.wwrSouth}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							shading type:
						</span>
						<span>{data.shadingType}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							wall material:
						</span>
						<span>{data.wallMaterial}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							ceiling material:
						</span>
						<span>{data.ceilingMaterial}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							floor material:
						</span>
						<span>{data.floorMaterial}</span>
					</li>
					<li className="flex justify-between border-b border-gray-400 text-gray-650">
						<span className="text-gray-900 font-semibold capitalize">
							glass material:
						</span>
						<span>{data.glassMaterial}</span>
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
				</ul>
			</section>
			<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
				<button
					type="button"
					className="flex items-center justify-between px-5 py-1 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
					onClick={handlePrevStep}
					value="site plan"
				>
					prev <span className="text-xs lowercase">(SitePlan)</span>
				</button>
			</section>
		</>
	);
};

export default Review;
