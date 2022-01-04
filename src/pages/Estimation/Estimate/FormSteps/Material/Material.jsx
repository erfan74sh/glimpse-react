import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import InputRange from "../../../../../components/inputs/InputRange";
import SelectField from "../../../../../components/inputs/SelectField/SelectField";

const Material = ({ nextStep, prevStep }) => {
	const data = useSelector(selectInput);

	// const [wallMaterial, setWallMaterial] = useState("");
	// const [ceilingMaterial, setCeilingMaterial] = useState("");
	// const [floorMaterial, setFloorMaterial] = useState("");
	// const [glassMaterial, setGlassMaterial] = useState("");

	const dispatch = useDispatch();

	const handleWallMaterialValue = (v) => {
		// setWallMaterial(e.target.value);
		dispatch(
			updateData({
				...data,
				wallMaterial: v,
			})
		);
	};

	const handleCeilingMaterialValue = (v) => {
		// setCeilingMaterial(e.target.value);
		dispatch(
			updateData({
				...data,
				ceilingMaterial: v,
			})
		);
	};

	const handleFloorMaterialValue = (v) => {
		// setFloorMaterial(e.target.value);
		dispatch(
			updateData({
				...data,
				floorMaterial: v,
			})
		);
	};

	const handleGlassMaterialValue = (v) => {
		// setGlassMaterial(e.target.dataset.value);
		dispatch(
			updateData({
				...data,
				glassMaterial: v,
			})
		);
	};

	const glassMaterialOptions = [
		{ label: 0.58 },
		{ label: 0.72 },
		{ label: 0.8 },
		{ label: 0.9 },
	];

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit submit function
				console.log(values);
				nextStep();
			}}
			validationSchema={yup.object({
				wallMaterial: yup
					.number()
					.min(0.2, "must be between 0.2 and 0.7")
					.max(0.7, "")
					.required("required"),
				ceilingMaterial: yup
					.number()
					.min(0.2, "must be between 0.2 and 0.7")
					.max(0.7, "")
					.required("required"),
				floorMaterial: yup
					.number()
					.min(0.2, "must be between 0.2 and 0.7")
					.max(0.7, "")
					.required("required"),
				glassMaterial: yup
					.number()
					.oneOf([0.58, 0.72, 0.8, 0.9], "choose one")
					.required("required"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						material
					</legend>
					<InputRange
						name="wallMaterial"
						label="Wall-material"
						min=".2"
						max=".7"
						step=".05"
						handleValue={handleWallMaterialValue}
					/>
					<InputRange
						name="ceilingMaterial"
						label="Ceiling-material"
						min=".2"
						max=".7"
						step=".05"
						handleValue={handleCeilingMaterialValue}
					/>
					<InputRange
						name="floorMaterial"
						label="Floor-material"
						min=".2"
						max=".7"
						step=".05"
						handleValue={handleFloorMaterialValue}
					/>
					<SelectField
						name="glassMaterial"
						selectOptions={glassMaterialOptions}
						label="Glass-material"
						placeholder="choose one type"
						handleValue={handleGlassMaterialValue}
					/>
				</fieldset>
				<section className="flex justify-center gap-x-4 mt-auto pr-10">
					<button
						type="button"
						className="flex items-center gap-x-1 px-5 py-1 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
						value="geometry"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(geometry)</span>
					</button>
					<button
						type="submit"
						className="flex items-center gap-x-1 px-5 py-1 text-white font-medium uppercase rounded-md bg-blue-550 border-2 border-blue-550"
					>
						next <span className="text-xs lowercase">(site plan)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Material;
