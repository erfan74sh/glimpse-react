import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputSelect from "../../../../../components/inputs/InputSelect";
import InputRange from "../../../../../components/inputs/InputRange";

const Material = ({ nextStep, prevStep }) => {
	const data = useSelector(selectInput);

	// const [wallMaterial, setWallMaterial] = useState("");
	// const [ceilingMaterial, setCeilingMaterial] = useState("");
	// const [floorMaterial, setFloorMaterial] = useState("");
	// const [glassMaterial, setGlassMaterial] = useState("");

	const dispatch = useDispatch();

	const handleWallMaterialValue = (e) => {
		// setWallMaterial(e.target.value);
		dispatch(
			updateData({
				...data,
				wallMaterial: e.target.value,
			})
		);
	};

	const handleCeilingMaterialValue = (e) => {
		// setCeilingMaterial(e.target.value);
		dispatch(
			updateData({
				...data,
				ceilingMaterial: e.target.value,
			})
		);
	};

	const handleFloorMaterialValue = (e) => {
		// setFloorMaterial(e.target.value);
		dispatch(
			updateData({
				...data,
				floorMaterial: e.target.value,
			})
		);
	};

	const handleGlassMaterialValue = (e) => {
		// setGlassMaterial(e.target.dataset.value);
		dispatch(
			updateData({
				...data,
				glassMaterial: e.target.dataset.value,
			})
		);
	};

	return (
		<>
			<Formik initialValues={data}>
				<Form>
					<fieldset className="flex flex-col gap-y-9 pr-10">
						<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
							material
						</legend>
						<InputRange
							name="wallMaterial"
							label="Wall-material"
							min=".2"
							max=".7"
							step=".05"
							handleValue={(e) => {
								handleWallMaterialValue(e);
							}}
						/>

						<InputRange
							name="ceilingMaterial"
							label="Ceiling-material"
							min=".2"
							max=".7"
							step=".05"
							handleValue={(e) => {
								handleCeilingMaterialValue(e);
							}}
						/>
						<InputRange
							name="floorMaterial"
							label="Floor-material"
							min=".2"
							max=".7"
							step=".05"
							handleValue={(e) => {
								handleFloorMaterialValue(e);
							}}
						/>
						<InputSelect
							name="glassMaterial"
							placeHolder="Glass-material"
							items={["0.58", "0.72", "0.8", "0.9"]}
							handleValue={(e) => {
								handleGlassMaterialValue(e);
							}}
						/>
					</fieldset>
				</Form>
			</Formik>
			<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
				<button
					type="button"
					className="flex items-center gap-x-1 px-5 py-1 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
					value="geometry"
					onClick={prevStep}
				>
					prev <span className="text-xs lowercase">(geometry)</span>
				</button>
				<button
					type="button"
					className="flex items-center gap-x-1 px-5 py-1 text-white font-medium uppercase rounded-md bg-blue-550 border-2 border-blue-550"
					value="site plan"
					onClick={nextStep}
				>
					next <span className="text-xs lowercase">(site plan)</span>
				</button>
			</section>
		</>
	);
};

export default Material;
