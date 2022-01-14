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

	const WallOptions = [{ label: "adiabatic" }, { label: "outdoor" }];
	const floorOptions = [
		{ label: "adiabatic" },
		{ label: "outdoor" },
		{ label: "ground" },
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
					{/* <SelectField
						name="reflectanCeWall"
						selectOptions={WallOptions}
						label="Boundry condition east wall"
						placeholder="choose condition"
						handleValue={handleEastWallConditionValue}
					/> */}
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
