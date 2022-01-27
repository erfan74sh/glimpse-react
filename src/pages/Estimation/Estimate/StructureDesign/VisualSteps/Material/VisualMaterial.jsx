import React from "react";
import { useSelector } from "react-redux";
// component
import Model3D from "../../../3D";
// state
import { selectVisualComfortData } from "../../../../../../features/visualComfortData/VisualComfortDataSlice";
import MoreInfo from "../../../../../../components/moreInfo/MoreInfo";

const VisualMaterial = () => {
	const inputData = useSelector(selectVisualComfortData);
	return (
		<>
			<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				3D view
			</h2>
			<div className="">
				<div className="w-full px-10 h-96">
					<Model3D
						xDim={inputData.xDim}
						yDim={inputData.yDim}
						wwrNorth={inputData.wwrNorth}
						wwrSouth={inputData.wwrSouth}
						shadingType={inputData.shadingType}
					/>
				</div>
				<section className="pt-2">
					<ul className="flex gap-x-12 justify-center">
						<li className="flex items-center gap-x-4">
							<span className="inline-block w-7 h-7 rounded-lg bg-pink-250"></span>
							<div className="flex gap-x-1">
								<span>adiabatic</span>
								<MoreInfo moreInfo="فاقد تبادل حرارتی با فضای بیرون" />
							</div>
						</li>
						<li className="flex items-center gap-x-4">
							<span className="inline-block w-7 h-7 rounded-lg bg-blue-400"></span>
							<div className="flex gap-x-1">
								<span>outdoor</span>
								<MoreInfo moreInfo="دارای تبادل حرارتی با فضای بیرون" />
							</div>
						</li>
						<li className="flex items-center gap-x-4">
							<span className="inline-block w-7 h-7 rounded-lg bg-yellow-250"></span>
							<div className="flex gap-x-1">
								<span>ground</span>
								<MoreInfo moreInfo="؟؟؟؟؟؟" />
							</div>
						</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default VisualMaterial;
