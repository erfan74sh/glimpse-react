import React from "react";
import { useSelector } from "react-redux";
// component
import Model3D from "../../../3D";
// state
import { selectVisualComfortData } from "../../../../../../features/visualComfortData/VisualComfortDataSlice";

const VisualMaterial = () => {
	const inputData = useSelector(selectVisualComfortData);
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
			</div>
		</>
	);
};

export default VisualMaterial;
