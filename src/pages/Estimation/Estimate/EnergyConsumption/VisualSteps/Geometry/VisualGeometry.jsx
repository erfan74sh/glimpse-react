import React from "react";
import { useSelector } from "react-redux";
// component
import Model3D from "../../../3D";
// state
import { selectEnergyConsumptionData } from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";

const VisualGeometry = () => {
	const inputData = useSelector(selectEnergyConsumptionData);
	return (
		<>
			<h2 className=" mx-8 mb-9 border-b border-gray-500 pb-4 text-xl font-normal uppercase">
				3D view
			</h2>
			<div className="">
				<div className="h-96 w-full px-10">
					<Model3D
						xDim={inputData.xDim}
						yDim={inputData.yDim}
						wwrNorth={inputData.wwrNorth}
						wwrSouth={inputData.wwrSouth}
						shadingType={inputData.shadingType}
						rotation={inputData.rotation}
					/>
				</div>
			</div>
		</>
	);
};

export default VisualGeometry;
