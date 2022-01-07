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

	const naturalVentilationOptions = [{ label: "yes" }, { label: "no" }];

	const dispatch = useDispatch();

	const handleHvacValue = (v) => {
		dispatch(
			updateData({
				...data,
				HVAC: v,
			})
		);
	};

	const handleNaturalVentValue = (v) => {
		dispatch(
			updateData({
				...data,
				naturalVent: v,
			})
		);
	};

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit submit function
				console.log(values);
				nextStep();
			}}
			validationSchema={yup.object({
				HVAC: yup
					.string()
					.oneOf(
						[
							"ideal air loads",
							"PTAC | residential",
							"PTHP | residential",
							"VAV w/reheat",
							"VAV w/PFP boxes",
							"fan coil units + DOAS",
						],
						"choose from list"
					)
					.required("required"),
				naturalVent: yup
					.string()
					.oneOf(["yes", "no"], "choose from list")
					.required("required"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						hvac & natural ventilation
					</legend>
					<SelectField
						name="HVAC"
						label="HVAC system"
						selectOptions={hvacOptions}
						placeholder="select type"
						handleValue={handleHvacValue}
					/>
					<SelectField
						name="naturalVent"
						label="natural ventilation"
						selectOptions={naturalVentilationOptions}
						placeholder="select type"
						handleValue={handleNaturalVentValue}
					/>
				</fieldset>
				<section className="flex justify-center gap-x-4 mt-auto pr-10">
					<button
						type="button"
						className="flex items-center gap-x-1 px-5 py-1 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
						value="geometry"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(material)</span>
					</button>
					<button
						type="submit"
						className="flex items-center gap-x-1 px-5 py-1 text-white font-medium uppercase rounded-md bg-blue-550 border-2 border-blue-550"
					>
						next <span className="text-xs lowercase">(review)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Hvac;
