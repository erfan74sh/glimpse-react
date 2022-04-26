import React from "react";
import { useSelector } from "react-redux";
// component
import Model3D from "../../../3D";
import MoreInfo from "../../../../../../components/moreInfo/MoreInfo";
// state
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";

const VisualBoundryCondition = () => {
	const inputData = useSelector(selectEnergyConsumptionData);
	return (
		<>
			<h2 className="mb-9 border-b border-gray-500 pb-4 text-xl font-normal uppercase">
				3D view
			</h2>
			<div className="">
				<div className="h-96 w-full px-10">
					<Model3D
						xDim={inputData.x_dim}
						yDim={inputData.y_dim}
						wwrNorth={inputData.wwr_north}
						wwrSouth={inputData.wwr_south}
						shadingType={inputData.shading_type}
					/>
				</div>
				<section className="pt-2">
					<ul className="flex flex-col  justify-center gap-y-3 gap-x-12 md:flex-row">
						<li className="flex items-center gap-x-4">
							<span className="bg-pink-250 inline-block h-7 w-7 rounded-lg"></span>
							<div className="flex gap-x-1">
								<span>adiabatic</span>
								<MoreInfo moreInfo="فاقد تبادل حرارتی با فضای بیرون" />
							</div>
						</li>
						<li className="flex items-center gap-x-4">
							<span className="inline-block h-7 w-7 rounded-lg bg-blue-400"></span>
							<div className="flex gap-x-1">
								<span>external</span>
								<MoreInfo moreInfo="دارای تبادل حرارتی با فضای بیرون" />
							</div>
						</li>
						<li className="flex items-center gap-x-4">
							<span className="bg-yellow-250 inline-block h-7 w-7 rounded-lg"></span>
							<div className="flex gap-x-1">
								<span>ground</span>
								<MoreInfo moreInfo="کف بیرونی" />
							</div>
						</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default VisualBoundryCondition;
