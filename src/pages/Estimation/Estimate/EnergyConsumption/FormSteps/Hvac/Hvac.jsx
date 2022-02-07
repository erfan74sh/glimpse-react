import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
// state
import {
	selectEnergyConsumptionData,
	updateData,
} from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";
// components
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";

const Hvac = ({ nextStep, prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);

	const hvacOptions = [
		{ label: "ideal air loads", value: "1" },
		{ label: "PTAC | residential", value: "2" },
		{ label: "PTHP | residential", value: "3" },
		{ label: "VAV w/reheat", value: "4" },
		{ label: "VAV w/PFP boxes", value: "5" },
		{ label: "fan coil units + DOAS", value: "6" },
	];

	const naturalVentilationOptions = [
		{ label: "yes", value: "true" },
		{ label: "no", value: "false" },
	];

	const dispatch = useDispatch();

	const handleHvacValue = (v) => {
		dispatch(
			updateData({
				...data,
				hvac: v,
			})
		);
	};

	const handleNaturalVentValue = (v) => {
		dispatch(
			updateData({
				...data,
				natural_ventilation: v,
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
				hvac: yup
					.string()
					.oneOf(["1", "2", "3", "4", "5", "6"], "choose from list")
					.required("required"),
				// natural_ventilation: yup.boolean().required("required"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						hvac & natural ventilation
					</legend>
					<SelectField
						name="hvac"
						label="HVAC system"
						selectOptions={hvacOptions}
						placeholder="select type"
						moreInfo="نوع سیستم تأسیسات مکانیکی مطبوع"
						handleValue={handleHvacValue}
					/>
					<SelectField
						name="natural_ventilation"
						label="natural ventilation"
						selectOptions={naturalVentilationOptions}
						placeholder="select type"
						moreInfo="تهویه طبیعی"
						handleValue={handleNaturalVentValue}
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="button"
						className="text-blue-550 border-blue-550 flex items-center gap-x-1 rounded-md border-2 bg-white px-5 py-1 font-medium uppercase"
						value="geometry"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(material)</span>
					</button>
					<button
						type="submit"
						className="bg-blue-550 border-blue-550 flex items-center gap-x-1 rounded-md border-2 px-5 py-1 font-medium uppercase text-white"
					>
						next <span className="text-xs lowercase">(review)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Hvac;
