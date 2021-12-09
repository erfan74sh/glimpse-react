import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

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
		setXDim(e.target.dataset.value);
	};
	const handleYDimValue = (e) => {
		setYDim(e.target.dataset.value);
	};
	const handleWwrNorthValue = (e) => {
		setWwrNorth(e.target.dataset.value);
	};
	const handleWwrSouthValue = (e) => {
		setWwrSouth(e.target.dataset.value);
	};
	const handleShadingTypeValue = (e) => {
		setShadingType(e.target.dataset.value);
	};

	return (
		<fieldset className="flex flex-col gap-y-9 pr-10">
			<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
				geometry
			</legend>
			<InputSelect
				placeHolder="X-Dimention"
				items={["item1", "item2", "item3"]}
				handleValue={(e) => handleXDimValue(e)}
			/>
			<InputSelect
				placeHolder="Y-Dimention"
				items={["item1", "item2", "item3"]}
				handleValue={(e) => handleYDimValue(e)}
			/>
			<InputSelect
				placeHolder="WWR-North"
				items={["item1", "item2", "item3"]}
				handleValue={(e) => handleWwrNorthValue(e)}
			/>
			<InputSelect
				placeHolder="WWR-South"
				items={["item1", "item2", "item3"]}
				handleValue={(e) => handleWwrSouthValue(e)}
			/>
			<InputSelect
				placeHolder="Shading Type"
				items={["item1", "item2", "item3"]}
				handleValue={(e) => handleShadingTypeValue(e)}
			/>
			<button
				type="button"
				className="flex items-center gap-x-1 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-550"
				onClick={handleNextStep}
				value="material"
			>
				next <span className="text-xs lowercase">(material)</span>
			</button>
		</fieldset>
	);
};

export default Geometry;
