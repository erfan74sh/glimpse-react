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
import InputRange from "../../../../../components/inputs/InputRange";
import SelectField from "../../../../../components/inputs/SelectField/SelectField";

const Geometry = ({ nextStep }) => {
	// const [xDim, setXDim] = useState("");
	// const [yDim, setYDim] = useState("");
	// const [wwrNorth, setWwrNorth] = useState("");
	// const [wwrSouth, setWwrSouth] = useState("");
	// const [shadingType, setShadingType] = useState("");

	const data = useSelector(selectInput);

	const dispatch = useDispatch();

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
		{ label: "horizantal" },
		{ label: "louver" },
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
				xDim: yup
					.number()
					.min(8, "x-dimention must be equal or greater than 8")
					.max(24, "x-dimention must be equal or less than 24")
					.required("required"),
				yDim: yup
					.number()
					.min(3, "y-dimention must be between 3 and 10")
					.max(10, "y-dimention must be between 3 and 10")
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
					.oneOf(["vertical", "horizantal", "louver"])
					.required("pick one"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-9 pr-10">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						geometry
					</legend>
					<InputRange
						name="xDim"
						label="X-Dimention"
						min="8"
						max="24"
						step="0.5"
						handleValue={handleXDimValue}
					/>
					<InputRange
						name="yDim"
						label="Y-Dimention"
						min="3"
						max="10"
						step="0.5"
						handleValue={handleYDimValue}
					/>
					<InputRange
						name="wwrNorth"
						label="WWR-North"
						min="10"
						max="80"
						step="10"
						handleValue={handleWwrNorthValue}
					/>
					<InputRange
						name="wwrSouth"
						label="WWR-South"
						min="10"
						max="80"
						step="10"
						handleValue={handleWwrSouthValue}
					/>
					<SelectField
						name="shadingType"
						selectOptions={shadingOptions}
						label="shading type"
						placeholder="choose one type"
						handleValue={handleShadingTypeValue}
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
