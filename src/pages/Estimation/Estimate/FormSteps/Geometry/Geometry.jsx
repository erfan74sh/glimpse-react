import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";
import InputRange from "../../../../../components/inputs/InputRange";

const Geometry = ({ handleStep }) => {
	const [xDim, setXDim] = useState("");
	const [yDim, setYDim] = useState("");
	const [wwrNorth, setWwrNorth] = useState("");
	const [wwrSouth, setWwrSouth] = useState("");
	const [shadingType, setShadingType] = useState("");

	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	const handleNextStep = (e) => {
		dispatch(
			updateData({
				...data,
				xDim: xDim,
				yDim: yDim,
				wwrNorth: wwrNorth,
				wwrSouth: wwrSouth,
				shadingType: shadingType,
			})
		);
		handleStep(e);
	};

	const handleXDimValue = (e) => {
		setXDim(e.target.value);
	};
	const handleYDimValue = (e) => {
		setYDim(e.target.value);
	};
	const handleWwrNorthValue = (e) => {
		setWwrNorth(e.target.value);
	};
	const handleWwrSouthValue = (e) => {
		setWwrSouth(e.target.value);
	};
	const handleShadingTypeValue = (e) => {
		setShadingType(e.target.dataset.value);
	};

	return (
		<>
			<fieldset className="flex flex-col gap-y-9 pr-10">
				<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					geometry
				</legend>
				<InputRange
					label="X-Dimention"
					min="8"
					max="24"
					step="0.5"
					handleValue={(e) => handleXDimValue(e)}
				/>
				<InputRange
					label="Y-Dimention"
					min="3"
					max="10"
					step="0.5"
					handleValue={(e) => handleYDimValue(e)}
				/>
				<InputRange
					label="WWR-North"
					min="10"
					max="80"
					step="10"
					handleValue={(e) => handleWwrNorthValue(e)}
				/>
				<InputRange
					label="WWR-South"
					min="10"
					max="80"
					step="10"
					handleValue={(e) => handleWwrSouthValue(e)}
				/>

				<InputSelect
					placeHolder="Shading Type"
					items={["Horizontal", "Horizontal Louvre", "Vertical", "All modes"]}
					handleValue={(e) => handleShadingTypeValue(e)}
				/>
			</fieldset>
			<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
				<button
					type="button"
					className="flex items-center gap-x-1 px-5 py-1 text-white font-medium uppercase rounded-md bg-blue-550 border-2 border-blue-550"
					onClick={handleNextStep}
					value="material"
				>
					next <span className="text-xs lowercase">(material)</span>
				</button>
			</section>
		</>
	);
};

export default Geometry;
