import React from "react";
import { useSelector } from "react-redux";
// component
import Model3D from "../../../3D";
// state
import { selectInput } from "../../../../../../features/data/inputDataSlice";

const VisualGeometry = () => {
	const inputData = useSelector(selectInput);
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
			</div>
		</>
	);
};

export default VisualGeometry;