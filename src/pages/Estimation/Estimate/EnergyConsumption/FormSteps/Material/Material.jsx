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

const Material = ({ nextStep, prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);

	const dispatch = useDispatch();

	const handleWallMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				wall_uvalue: v,
			})
		);
	};

	const handleCeilingMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				roof_uvalue: v,
			})
		);
	};

	const handleFloorMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				floor_uvalue: v,
			})
		);
	};

	const handleGlassMaterialValue = (v) => {
		dispatch(
			updateData({
				...data,
				window_uvalue: v,
			})
		);
	};

	const wallMaterialOptions = [
		{ label: "1.719" },
		{ label: "1.649" },
		{ label: "0.979" },
		{ label: "0.225" },
	];
	const floorMaterialOptions = [
		{ label: "0.37" },
		{ label: "0.47" },
		{ label: "0.65" },
	];
	const roofMaterialOptions = [
		{ label: "0.878" },
		{ label: "0.211" },
		{ label: "0.393" },
		{ label: "0.386" },
		{ label: "1.092" },
	];
	const glassMaterialOptions = [
		{ label: "1.7" },
		{ label: "2.6" },
		{ label: "3.1" },
		{ label: "5.7" },
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
				wall_uvalue: yup
					.string()
					.oneOf(["1.719", "1.649", "0.979", "0.225"], "choose from list")
					.required("required"),
				roof_uvalue: yup
					.string()
					.oneOf(
						["0.878", "0.211", "0.393", "0.386", "1.092"],
						"choose from list"
					)
					.required("required"),
				floor_uvalue: yup
					.string()
					.oneOf(["0.37", "0.47", "0.65"], "choose from list")
					.required("required"),
				window_uvalue: yup
					.string()
					.oneOf(["5.7", "3.1", "2.6", "1.7"], "choose one")
					.required("required"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						material
					</legend>
					<SelectField
						name="wall_uvalue"
						label="Wall material"
						selectOptions={wallMaterialOptions}
						placeholder="select type"
						moreInfo="ضریب هدایتی دیوار"
						unit="w/m.k"
						handleValue={handleWallMaterialValue}
					/>
					<SelectField
						name="roof_uvalue"
						label="roof material"
						selectOptions={roofMaterialOptions}
						placeholder="select type"
						moreInfo="ضریب هدایتی بام"
						unit="w/m.k"
						handleValue={handleCeilingMaterialValue}
					/>
					<SelectField
						name="floor_uvalue"
						label="Floor material"
						selectOptions={floorMaterialOptions}
						placeholder="select type"
						moreInfo="ضریب هدایتی کف"
						unit="w/m.k"
						handleValue={handleFloorMaterialValue}
					/>
					<SelectField
						name="window_uvalue"
						selectOptions={glassMaterialOptions}
						label="window material"
						placeholder="select type"
						moreInfo="ضریب هدایتی پنجره"
						unit="w/m.k"
						handleValue={handleGlassMaterialValue}
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="button"
						className="text-blue-550 border-blue-550 flex items-center gap-x-1 rounded-md border-2 bg-white px-5 py-1 font-medium uppercase"
						value="geometry"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(geometry)</span>
					</button>
					<button
						type="submit"
						className="bg-blue-550 border-blue-550 flex items-center gap-x-1 rounded-md border-2 px-5 py-1 font-medium uppercase text-white"
					>
						next <span className="text-xs lowercase">(site plan)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Material;
