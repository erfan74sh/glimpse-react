import React from "react";
import { useDispatch, useSelector } from "react-redux";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputRange from "../../../../../components/inputs/InputRange";

const SitePlan = ({ handleStep }) => {
	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	// const [southNeighborDist, setSouthNeighborDist] = useState("");
	// const [southNeighborHeight, setSouthNeighborHeight] = useState("");
	// const [northNeighborDist, setNorthNeighborDist] = useState("");
	// const [northNeighborHeight, setNorthNeighborHeight] = useState("");

	const handleSouthNeighborDistValue = (e) => {
		// setSouthNeighborDist(e.target.value);
		dispatch(
			updateData({
				...data,
				southNeighborDist: e.target.value,
			})
		);
	};

	const handleSouthNeighborHeightValue = (e) => {
		// setSouthNeighborHeight(e.target.value);
		dispatch(
			updateData({
				...data,
				southNeighborHeight: e.target.value,
			})
		);
	};

	const handleNorthNeighborDistValue = (e) => {
		// setNorthNeighborDist(e.target.value);
		dispatch(
			updateData({
				...data,
				northNeighborDist: e.target.value,
			})
		);
	};

	const handleNorthNeighborHeightValue = (e) => {
		// setNorthNeighborHeight(e.target.value);
		dispatch(
			updateData({
				...data,
				northNeighborHeight: e.target.value,
			})
		);
	};

	const handlePrevStep = (e) => {
		handleStep(e);
	};

	const handleNextStep = (e) => {
		handleStep(e);
	};

	return (
		<>
			<fieldset className="flex flex-col gap-y-9 pr-10">
				<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
					site plan
				</legend>
				<InputRange
					label="South neighbor distance"
					min="2"
					max="8"
					step="1"
					handleValue={(e) => handleSouthNeighborDistValue(e)}
				/>
				<InputRange
					label="South neighbor height"
					min="4"
					max="10"
					step="1"
					handleValue={(e) => handleSouthNeighborHeightValue(e)}
				/>
				<InputRange
					label="North neighbor distance"
					min="2"
					max="8"
					step="1"
					handleValue={(e) => handleNorthNeighborDistValue(e)}
				/>
				<InputRange
					label="North neighbor height"
					min="4"
					max="10"
					step="1"
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
