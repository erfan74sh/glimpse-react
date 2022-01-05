import React from "react";
import { useSelector } from "react-redux";
// component
import Model3D from "../../3D";
// state
import { selectInput } from "../../../../../features/data/inputDataSlice";

const VisualGeometry = () => {
	const inputData = useSelector(selectInput);
	return (
		<Model3D
			xDim={inputData.xDim}
			yDim={inputData.yDim}
			wwrNorth={inputData.wwrNorth}
			wwrSouth={inputData.wwrSouth}
			shadingType={inputData.shadingType}
		/>
	);
};

export default VisualGeometry;
