import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputRange from "../../../../../components/inputs/InputRange";
import SelectField from "../../../../../components/inputs/SelectField/SelectField";

const Geometry = ({ nextStep }) => {
	// const [xDim, setXDim] = useState("");
	// const [yDim, setYDim] = useState("");
	// const [wwrNorth, setWwrNorth] = useState("");
	// const [wwrSouth, setWwrSouth] = useState("");
	// const [shadingType, setShadingType] = useState("");

	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	const handleXDimValue = (v) => {
		// setXDim(e.target.value);
		dispatch(
			updateData({
				...data,
				xDim: v,
			})
		);
	};
	const handleYDimValue = (v) => {
		// setYDim(e.target.value);
		dispatch(
			updateData({
				...data,
				yDim: v,
			})
		);
	};
	const handleWwrNorthValue = (v) => {
		// setWwrNorth(e.target.value);
		dispatch(
			updateData({
				...data,
				wwrNorth: v,
			})
		);
	};
	const handleWwrSouthValue = (v) => {
		// setWwrSouth(e.target.value);
		dispatch(
			updateData({
				...data,
				wwrSouth: v,
			})
		);
	};
	// const handleShadingTypeValue = (e) => {
	// 	// setShadingType(e.target.dataset.value);
	// 	dispatch(
	// 		updateData({
	// 			...data,
	// 			shadingType: e.target.dataset.value,
	// 		})
	// 	);
	// };

	const shadingOptions = [
		{ label: "vertical" },
		{ label: "horizantal" },
		{ label: "louver" },
	];

	return (
		<>
			<Formik initialValues={data}>
				<Form>
					<fieldset className="flex flex-col gap-y-9 pr-10">
						<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
							site plan
						</legend>
						<InputRange
							name="xDim"
							label="X-Dimention"
							min="8"
							max="24"
							step="0.5"
							handleValue={handleXDimValue}
						/>
						<InputRange
							name="yDim"
							label="Y-Dimention"
							min="3"
							max="10"
							step="0.5"
							handleValue={handleYDimValue}
						/>
						<InputRange
							name="wwrNorth"
							label="WWR-North"
							min="10"
							max="80"
							step="10"
							handleValue={handleWwrNorthValue}
						/>
						<InputRange
							name="wwrSouth"
							label="WWR-South"
							min="10"
							max="80"
							step="10"
							handleValue={handleWwrSouthValue}
						/>
						<SelectField
							name="shadingType"
							selectOptions={shadingOptions}
							label="shading type"
							placeholder="choose one type"
						/>
					</fieldset>
				</Form>
			</Formik>
			{/* <fieldset className="flex flex-col gap-y-9 pr-10">
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
			</fieldset> */}
			<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
				<button
					type="button"
					className="flex items-center gap-x-1 px-5 py-1 text-white font-medium uppercase rounded-md bg-blue-550 border-2 border-blue-550"
					onClick={nextStep}
					value="material"
				>
					next <span className="text-xs lowercase">(material)</span>
				</button>
			</section>
		</>
	);
};

export default Geometry;
