import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";

const SitePlan = ({ handleStep }) => {
	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	const [southNeighborDist, setSouthNeighborDist] = useState("");
	const [southNeighborHeight, setSouthNeighborHeight] = useState("");
	const [northNeighborDist, setNorthNeighborDist] = useState("");
	const [northNeighborHeight, setNorthNeighborHeight] = useState("");

	const handleSouthNeighborDistValue = (e) => {
		setSouthNeighborDist(e.target.dataset.value);
	};

	const handleSouthNeighborHeightValue = (e) => {
		setSouthNeighborHeight(e.target.dataset.value);
	};

	const handleNorthNeighborDistValue = (e) => {
		setNorthNeighborDist(e.target.dataset.value);
	};

	const handleNorthNeighborHeightValue = (e) => {
		setNorthNeighborHeight(e.target.dataset.value);
	};

	const handlePrevStep = (e) => {
		handleStep(e);
	};

	const handleNextStep = (e) => {
		dispatch(
			updateData({
				...data,
				southNeighborDist: southNeighborDist,
				southNeighborHeight: southNeighborHeight,
				northNeighborDist: northNeighborDist,
				northNeighborHeight: northNeighborHeight,
			})
		);
		handleStep(e);
	};

	return (
		<>
			<fieldset className="flex flex-col gap-y-9 pr-10">
				<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					site plan
				</legend>
				<InputSelect
					placeHolder="South neighbor distance"
					items={["item1", "item2", "item3"]}
					handleValue={(e) => handleSouthNeighborDistValue(e)}
				/>
				<InputSelect
					placeHolder="South neighbor height"
					items={["item1", "item2", "item3"]}
					handleValue={(e) => handleSouthNeighborHeightValue(e)}
				/>
				<InputSelect
					placeHolder="North neighbor distance"
					items={["item1", "item2", "item3"]}
					handleValue={(e) => handleNorthNeighborDistValue(e)}
				/>
				<InputSelect
					placeHolder="North neighbor height"
					items={["item1", "item2", "item3"]}
					handleValue={(e) => handleNorthNeighborHeightValue(e)}
				/>
			</fieldset>
			<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
				<button
					type="button"
					className="flex items-center gap-x-1 px-5 py-1 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
					value="material"
					onClick={handlePrevStep}
				>
					prev <span className="text-xs lowercase">(material)</span>
				</button>
				<button
					type="button"
					className="flex items-center gap-x-1 px-5 py-1 text-white font-medium uppercase rounded-md bg-blue-550 border-2 border-blue-550"
					onClick={handleNextStep}
					value="review"
				>
					next <span className="text-xs lowercase">(review)</span>
				</button>
			</section>
		</>
	);
};

export default SitePlan;
