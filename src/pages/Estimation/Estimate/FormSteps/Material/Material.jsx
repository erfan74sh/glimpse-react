import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const Material = () => {
	const data = useSelector(selectInput);

	const [wallMaterial, setWallMaterial] = useState("");
	const [ceilingMaterial, setCeilingMaterial] = useState("");
	const [floorMaterial, setFloorMaterial] = useState("");
	const [glassMaterial, setGlassMaterial] = useState("");

	const dispatch = useDispatch();

	const handleNextStep = (e) => {
		dispatch(
			updateData({
				...data,
				wallMaterial: wallMaterial,
				ceilingMaterial: ceilingMaterial,
				floorMaterial: floorMaterial,
				glassMaterial: glassMaterial,
			})
		);
	};

	const handleWallMaterialValue = (e) => {
		setWallMaterial(e.target.dataset.value);
	};

	const handleCeilingMaterialValue = (e) => {
		setCeilingMaterial(e.target.dataset.value);
	};

	const handleFloorMaterialValue = (e) => {
		setFloorMaterial(e.target.dataset.value);
	};

	const handleGlassMaterialValue = (e) => {
		setGlassMaterial(e.target.dataset.value);
	};

	return (
		<>
			<fieldset className="flex flex-col gap-y-9 pr-10">
				<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					material
				</legend>
				<InputSelect
					placeHolder="Wall-material"
					items={["item1", "item2", "item3"]}
				/>
				<InputSelect
					placeHolder="Ceiling-material"
					items={["item1", "item2", "item3"]}
				/>
				<InputSelect
					placeHolder="Floor-material"
					items={["item1", "item2", "item3"]}
				/>
				<InputSelect
					placeHolder="Glass-material"
					items={["item1", "item2", "item3"]}
				/>
			</fieldset>
			<section className="flex justify-center gap-x-4 mt-auto mr-8">
				<button
					type="button"
					className="flex items-center gap-x-1 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-550"
					// onClick={handleNextStep}
					value="geometry"
				>
					prev <span className="text-xs lowercase">(geometry)</span>
				</button>
				<button
					type="button"
					className="flex items-center gap-x-1 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-550"
					onClick={handleNextStep}
					value="site plan"
				>
					next <span className="text-xs lowercase">(site plan)</span>
				</button>
			</section>
		</>
	);
};

export default Material;
