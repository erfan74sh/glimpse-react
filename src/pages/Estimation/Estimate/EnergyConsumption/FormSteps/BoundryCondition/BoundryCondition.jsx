import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
// state
import {
	selectEnergyConsumptionData,
	updateData,
} from "../../../../../../features/energyConsumptionData/energyConsumptionsDataSlice";
// components
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";

const BoundryCondition = ({ nextStep, prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);

	const dispatch = useDispatch();

	const handleEastWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				east_wall_bc: v,
			})
		);
	};
	const handleWestWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				west_wall_bc: v,
			})
		);
	};
	const handleNorthWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				north_wall_bc: v,
			})
		);
	};
	const handleSouthWallConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				south_wall_bc: v,
			})
		);
	};
	const handleRoofConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				roof_bc: v,
			})
		);
	};
	const handleFloorConditionValue = (v) => {
		dispatch(
			updateData({
				...data,
				floor_bc: v,
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
				east_wall_bc: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				west_wall_bc: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				north_wall_bc: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				south_wall_bc: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				roof_bc: yup
					.string()
					.oneOf(["adiabatic", "outdoor"], "choose from list")
					.required("required"),
				floor_bc: yup
					.string()
					.oneOf(["adiabatic", "outdoor", "ground"], "choose from list")
					.required("required"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						Boundry conditions
					</legend>
					<SelectField
						name="east_wall_bc"
						selectOptions={WallOptions}
						label="Boundry condition east wall"
						placeholder="choose condition"
						handleValue={handleEastWallConditionValue}
					/>
					<SelectField
						name="west_wall_bc"
						selectOptions={WallOptions}
						label="Boundry condition west wall"
						placeholder="choose condition"
						handleValue={handleWestWallConditionValue}
					/>
					<SelectField
						name="north_wall_bc"
						selectOptions={WallOptions}
						label="Boundry condition north wall"
						placeholder="choose condition"
						handleValue={handleNorthWallConditionValue}
					/>
					<SelectField
						name="south_wall_bc"
						selectOptions={WallOptions}
						label="Boundry condition south wall"
						placeholder="choose condition"
						handleValue={handleSouthWallConditionValue}
					/>
					<SelectField
						name="roof_bc"
						selectOptions={WallOptions}
						label="Boundry condition roof"
						placeholder="choose condition"
						handleValue={handleRoofConditionValue}
					/>
					<SelectField
						name="floor_bc"
						selectOptions={floorOptions}
						label="Boundry condition floor"
						placeholder="choose condition"
						handleValue={handleFloorConditionValue}
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
						next <span className="text-xs lowercase">(material)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default BoundryCondition;
