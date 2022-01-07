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
import SelectField from "../../../../../components/inputs/SelectField/SelectField";

const Hvac = ({ nextStep, prevStep }) => {
	const data = useSelector(selectInput);

	const hvacOptions = [
		{ label: "ideal air loads" },
		{ label: "PTAC | residential" },
		{ label: "PTHP | residential" },
		{ label: "VAV w/reheat" },
		{ label: "VAV w/PFP boxes" },
		{ label: "fan coil units + DOAS" },
	];

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit submit function
				console.log(values);
				nextStep();
			}}
			// validationSchema={yup.object({
			// 	wallMaterial: yup
			// 		.string()
			// 		.oneOf(["1.719", "1.649", "0.979", "0.225"], "choose from list")
			// 		.required("required"),
			// 	ceilingMaterial: yup
			// 		.string()
			// 		.oneOf(
			// 			["0.878", "0.211", "0.393", "0.386", "1.092"],
			// 			"choose from list"
			// 		)
			// 		.required("required"),
			// 	floorMaterial: yup
			// 		.string()
			// 		.oneOf(["0.37", "0.47", "0.65"], "choose from list")
			// 		.required("required"),
			// 	glassMaterial: yup
			// 		.string()
			// 		.oneOf(["0.58", "0.72", "0.8", "0.9"], "choose one")
			// 		.required("required"),
			// })}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						hvac & natural ventilation
					</legend>
					{/* <SelectField
						name="wallMaterial"
						label="Wall material"
						selectOptions={wallMaterialOptions}
						placeholder="select type"
						handleValue={handleWallMaterialValue}
					/>
					<SelectField
						name="ceilingMaterial"
						label="roof material"
						selectOptions={roofMaterialOptions}
						placeholder="select type"
						handleValue={handleCeilingMaterialValue}
					/>
					<SelectField
						name="floorMaterial"
						label="Floor material"
						selectOptions={floorMaterialOptions}
						placeholder="select type"
						handleValue={handleFloorMaterialValue}
					/>
					<SelectField
						name="glassMaterial"
						selectOptions={glassMaterialOptions}
						label="window material"
						placeholder="select type"
						handleValue={handleGlassMaterialValue}
					/> */}
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

export default Hvac;
