import React, { useState } from "react";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const Geometry = () => {
	const [xDim, setXDim] = useState("");
	const [yDim, setYDim] = useState("");
	const [wwrNorth, setWwrNorth] = useState("");
	const [wwrSouth, setWwrSouth] = useState("");
	const [shadingType, setShadingType] = useState("");

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
		</fieldset>
	);
};

export default Geometry;
