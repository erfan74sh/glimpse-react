import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
// state
import {
	selectVisualComfortData,
	updateData,
} from "../../../../../../features/visualComfortData/VisualComfortDataSlice";
// components
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";
import InputRange from "../../../../../../components/inputs/InputRange";

const Material = ({ nextStep, prevStep }) => {
	const data = useSelector(selectVisualComfortData);

	const dispatch = useDispatch();

	const handleReflectanCeWall = (v) => {
		dispatch(
			updateData({
				...data,
				reflectanCeWall: v,
			})
		);
	};
	const handleReflectanCeCeiling = (v) => {
		dispatch(
			updateData({
				...data,
				reflectanCeCeiling: v,
			})
		);
	};
	const handleReflectanCeFloor = (v) => {
		dispatch(
			updateData({
				...data,
				reflectanCeFloor: v,
			})
		);
	};
	const handleVtGlass = (v) => {
		dispatch(
			updateData({
				...data,
				vtGlass: v,
			})
		);
	};

	const vtGlassOptions = [
		{ label: "0.58" },
		{ label: "0.72" },
		{ label: "0.80" },
		{ label: "0.90" },
	];

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit form submit
				console.log(values);
				nextStep();
			}}
			validationSchema={yup.object({
				reflectanCeWall: yup.string().required("required"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						Boundry conditions
					</legend>

					<InputRange
						name="reflectanCeWall"
						label="reflectan ce_wall"
						min="0.2"
						max="0.7"
						step="0.05"
						handleValue={handleReflectanCeWall}
						moreInfo="?"
						unit="?"
					/>
					<InputRange
						name="reflectanCeCeiling"
						label="reflectan ce_ceiling"
						min="0.2"
						max="0.7"
						step="0.05"
						handleValue={handleReflectanCeCeiling}
						moreInfo="?"
						unit="?"
					/>
					<InputRange
						name="reflectanCeFloor"
						label="reflectan ce_floor"
						min="0.2"
						max="0.7"
						step="0.05"
						handleValue={handleReflectanCeFloor}
						moreInfo="?"
						unit="?"
					/>
					<SelectField
						name="vtGlass"
						selectOptions={vtGlassOptions}
						label="Vt-glass"
						placeholder="choose ?"
						handleValue={handleVtGlass}
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
						next <span className="text-xs lowercase">(material)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Material;
