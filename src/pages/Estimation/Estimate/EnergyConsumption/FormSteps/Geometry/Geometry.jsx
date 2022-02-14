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
import InputRange from "../../../../../../components/inputs/InputRange";
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";

const Geometry = ({ nextStep }) => {
	const data = useSelector(selectEnergyConsumptionData);

	const dispatch = useDispatch();

	const handleFloorLevelValue = (v) => {
		dispatch(
			updateData({
				...data,
				number_of_floor: v,
			})
		);
	};
	const handleXDimValue = (v) => {
		dispatch(
			updateData({
				...data,
				x_dim: v,
			})
		);
	};
	const handleYDimValue = (v) => {
		dispatch(
			updateData({
				...data,
				y_dim: v,
			})
		);
	};
	const handleRotationValue = (v) => {
		dispatch(
			updateData({
				...data,
				rotation_angle: v,
			})
		);
	};
	const handleWwrNorthValue = (v) => {
		dispatch(
			updateData({
				...data,
				wwr_north: v,
			})
		);
	};
	const handleWwrSouthValue = (v) => {
		dispatch(
			updateData({
				...data,
				wwr_south: v,
			})
		);
	};
	const handleShadingTypeValue = (v) => {
		dispatch(
			updateData({
				...data,
				shading_type: v,
			})
		);
	};

	const shadingOptions = [
		{ label: "vertical", value: "3" },
		{ label: "horizontal", value: "1" },
		{ label: "horizontal louvre", value: "2" },
		{ label: "all modes", value: "4" },
	];

	const floorLevelOptions = [
		{ label: "0" },
		{ label: "1" },
		{ label: "2" },
		{ label: "3" },
		{ label: "4" },
		{ label: "5" },
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
				number_of_floor: yup
					.string()
					.oneOf(["0", "1", "2", "3", "4", "5"], "pick from list")
					.required("floor level is required"),
				rotation_angle: yup
					.number()
					.min(-40, "must be more than -40")
					.max(40, "must be less than 40")
					.required("required"),
				x_dim: yup
					.number()
					.min(8, "x-dimention must be equal or greater than 8")
					.max(24, "x-dimention must be equal or less than 24")
					.required("required"),
				y_dim: yup
					.number()
					.min(3, "y-dimention must be between 3 and 10")
					.max(10, "y-dimention must be between 3 and 10")
					.required("required"),
				wwr_north: yup
					.number()
					.min(0, "wwr-north must be between 0 and 80")
					.max(80, "wwr-north must be between 0 and 80")
					.required("required"),
				wwr_south: yup
					.number()
					.min(0, "wwr-south must be between 0 and 80")
					.max(80, "wwr-south must be between 0 and 80")
					.required("required"),
				shading_type: yup
					.string()
					.oneOf(["1", "2", "3", "4"])
					.required("pick one"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						geometry
					</legend>
					<SelectField
						name="number_of_floor"
						selectOptions={floorLevelOptions}
						label="floor level"
						placeholder="choose level"
						moreInfo="طبقه"
						handleValue={handleFloorLevelValue}
					/>
					<InputRange
						name="rotation_angle"
						label="rotation angle"
						min="-40"
						max="40"
						step="10"
						handleValue={handleRotationValue}
						moreInfo="جهت‌گیری بنا"
						unit="degree"
					/>
					<InputRange
						name="x_dim"
						label="width"
						min="8"
						max="24"
						step="0.5"
						handleValue={handleXDimValue}
						moreInfo="عرض بنا"
						unit="m"
					/>

					<InputRange
						name="y_dim"
						label="length"
						min="3"
						max="10"
						step="0.5"
						handleValue={handleYDimValue}
						moreInfo="طول بنا"
						unit="m"
					/>
					<InputRange
						name="wwr_south"
						label="WWR-South"
						min="0"
						max="80"
						step="10"
						handleValue={handleWwrSouthValue}
						moreInfo="نسبت مساحت پنجره به دیوار جنوبی"
						unit="%"
					/>
					<InputRange
						name="wwr_north"
						label="WWR-North"
						min="0"
						max="80"
						step="10"
						handleValue={handleWwrNorthValue}
						moreInfo="نسبت مساحت پنجره به دیوار شمالی"
						unit="%"
					/>
					<SelectField
						name="shading_type"
						selectOptions={shadingOptions}
						label="shading type"
						placeholder="choose one type"
						handleValue={handleShadingTypeValue}
						moreInfo="نوع سایبان"
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="submit"
						className="bg-blue-550 border-blue-550 flex items-center gap-x-1 rounded-md border-2 px-5 py-1 font-medium uppercase text-white"
					>
						next <span className="text-xs lowercase">(boundry condition)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default Geometry;
