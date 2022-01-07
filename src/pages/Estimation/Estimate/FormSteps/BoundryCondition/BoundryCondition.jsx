import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
// state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// components
import SelectField from "../../../../../components/inputs/SelectField/SelectField";

const BoundryCondition = ({ nextStep, prevStep }) => {
	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	const handleEastWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				eastWallCondition: v,
			})
		);
	};
	const handleWestWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				westWallCondition: v,
			})
		);
	};
	const handleNorthWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				northWallCondition: v,
			})
		);
	};
	const handleSouthWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				southWallCondition: v,
			})
		);
	};
	const handleRoofConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				roofCondition: v,
			})
		);
	};
	const handleFloorConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				floorCondition: v,
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
				eastWallCondition: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				westWallCondition: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				northWallCondition: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				southWallCondition: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				roofCondition: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				floorCondition: yup
					.string()
					.oneOf(["adiabatic", "outdoor", "ground"], "choose from list")
					.required("required"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						Boundry conditions
					</legend>
					<SelectField
						name="eastWallCondition"
						selectOptions={WallOptions}
						label="Boundry condition east wall"
						placeholder="choose condition"
						handleValue={handleEastWallConditionValue}
					/>
					<SelectField
						name="westWallCondition"
						selectOptions={WallOptions}
						label="Boundry condition west wall"
						placeholder="choose condition"
						handleValue={handleWestWallConditionValue}
					/>
					<SelectField
						name="northWallCondition"
						selectOptions={WallOptions}
						label="Boundry condition north wall"
						placeholder="choose condition"
						handleValue={handleNorthWallConditionValue}
					/>
					<SelectField
						name="southWallCondition"
						selectOptions={WallOptions}
						label="Boundry condition south wall"
						placeholder="choose condition"
						handleValue={handleSouthWallConditionValue}
					/>
					<SelectField
						name="roofCondition"
						selectOptions={WallOptions}
						label="Boundry condition roof"
						placeholder="choose condition"
						handleValue={handleRoofConditionValue}
					/>
					<SelectField
						name="floorCondition"
						selectOptions={floorOptions}
						label="Boundry condition floor"
						placeholder="choose condition"
						handleValue={handleFloorConditionValue}
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

export default BoundryCondition;
