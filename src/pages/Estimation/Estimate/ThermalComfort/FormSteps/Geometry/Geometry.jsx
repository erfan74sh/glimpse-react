import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
// state
import {
	selectInput,
	updateData,
} from "../../../../../../features/data/inputDataSlice";
// components
import InputRange from "../../../../../../components/inputs/InputRange";
import SelectField from "../../../../../../components/inputs/SelectField/SelectField";

const Geometry = ({ nextStep }) => {
	// const [xDim, setXDim] = useState("");
	// const [yDim, setYDim] = useState("");
	// const [wwrNorth, setWwrNorth] = useState("");
	// const [wwrSouth, setWwrSouth] = useState("");
	// const [shadingType, setShadingType] = useState("");

	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	const handleFloorLevelValue = (v) => {
		dispatch(
			updateData({
				...data,
				floorLevel: v,
			})
		);
	};
	const handleXDimValue = (v) => {
		// setXDim(e.target.value);
		dispatch(
			updateData({
				...data,
				xDim: v,
			})
		);
	};
	const handleYDimValue = (v) => {
		// setYDim(e.target.value);
		dispatch(
			updateData({
				...data,
				yDim: v,
			})
		);
	};
	const handleRotationValue = (v) => {
		dispatch(
			updateData({
				...data,
				rotation: v,
			})
		);
	};
	const handleWwrNorthValue = (v) => {
		// setWwrNorth(e.target.value);
		dispatch(
			updateData({
				...data,
				wwrNorth: v,
			})
		);
	};
	const handleWwrSouthValue = (v) => {
		// setWwrSouth(e.target.value);
		dispatch(
			updateData({
				...data,
				wwrSouth: v,
			})
		);
	};
	const handleShadingTypeValue = (v) => {
		// setShadingType(e.target.dataset.value);
		dispatch(
			updateData({
				...data,
				shadingType: v,
			})
		);
	};

	const shadingOptions = [
		{ label: "vertical" },
		{ label: "horizontal" },
		{ label: "horizontal louvre" },
		{ label: "all modes" },
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
				floorLevel: yup
					.string()
					.oneOf(["0", "1", "2", "3", "4", "5"], "pick from list")
					.required("floor level is required"),
				rotation: yup
					.number()
					.min(-40, "must be more than -40")
					.max(40, "must be less than 40")
					.required("required"),
				xDim: yup
					.number()
					.min(3, "x-dimention must be equal or greater than 8")
					.max(10, "x-dimention must be equal or less than 24")
					.required("required"),
				yDim: yup
					.number()
					.min(8, "y-dimention must be between 3 and 10")
					.max(24, "y-dimention must be between 3 and 10")
					.required("required"),
				wwrNorth: yup
					.number()
					.min(0, "wwr-north must be between 0 and 80")
					.max(80, "wwr-north must be between 0 and 80")
					.required("required"),
				wwrSouth: yup
					.number()
					.min(0, "wwr-south must be between 0 and 80")
					.max(80, "wwr-south must be between 0 and 80")
					.required("required"),
				shadingType: yup
					.string()
					.oneOf(["vertical", "horizontal", "horizontal louvre", "all modes"])
					.required("pick one"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						geometry
					</legend>
					<SelectField
						name="floorLevel"
						selectOptions={floorLevelOptions}
						label="floor level"
						placeholder="choose level"
						moreInfo="طبقه"
						handleValue={handleFloorLevelValue}
					/>
					<InputRange
						name="rotation"
						label="rotation angle"
						min="-40"
						max="40"
						step="10"
						handleValue={handleRotationValue}
						moreInfo="جهت‌گیری بنا"
						unit="degree"
					/>
					<InputRange
						name="xDim"
						label="width"
						min="3"
						max="10"
						step="0.5"
						handleValue={handleXDimValue}
						moreInfo="عرض بنا"
						unit="m"
					/>

					<InputRange
						name="yDim"
						label="length"
						min="8"
						max="24"
						step="0.5"
						handleValue={handleYDimValue}
						moreInfo="طول بنا"
						unit="m"
					/>
					<InputRange
						name="wwrSouth"
						label="WWR-South"
						min="0"
						max="80"
						step="10"
						handleValue={handleWwrSouthValue}
						moreInfo="نسبت مساحت پنجره به دیوار جنوبی"
						unit="%"
					/>
					<InputRange
						name="wwrNorth"
						label="WWR-North"
						min="0"
						max="80"
						step="10"
						handleValue={handleWwrNorthValue}
						moreInfo="نسبت مساحت پنجره به دیوار شمالی"
						unit="%"
					/>
					<SelectField
						name="shadingType"
						selectOptions={shadingOptions}
						label="shading type"
						placeholder="choose one type"
						handleValue={handleShadingTypeValue}
						moreInfo="نوع سایبان"
					/>
				</fieldset>
				<section className="flex justify-center gap-x-4 mt-auto pr-10">
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

export default Geometry;