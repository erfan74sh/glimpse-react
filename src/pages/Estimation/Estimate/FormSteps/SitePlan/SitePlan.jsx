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
import InputRange from "../../../../../components/inputs/InputRange";

const SitePlan = ({ nextStep, prevStep }) => {
	const data = useSelector(selectInput);

	const dispatch = useDispatch();

	// const [southNeighborDist, setSouthNeighborDist] = useState("");
	// const [southNeighborHeight, setSouthNeighborHeight] = useState("");
	// const [northNeighborDist, setNorthNeighborDist] = useState("");
	// const [northNeighborHeight, setNorthNeighborHeight] = useState("");

	const handleSouthNeighborDistValue = (v) => {
		// setSouthNeighborDist(e.target.value);
		dispatch(
			updateData({
				...data,
				southNeighborDist: v,
			})
		);
	};

	const handleSouthNeighborHeightValue = (v) => {
		// setSouthNeighborHeight(e.target.value);
		dispatch(
			updateData({
				...data,
				southNeighborHeight: v,
			})
		);
	};

	const handleNorthNeighborDistValue = (v) => {
		// setNorthNeighborDist(e.target.value);
		dispatch(
			updateData({
				...data,
				northNeighborDist: v,
			})
		);
	};

	const handleNorthNeighborHeightValue = (v) => {
		// setNorthNeighborHeight(e.target.value);
		dispatch(
			updateData({
				...data,
				northNeighborHeight: v,
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
				southNeighborDist: yup
					.number()
					.min(2, "must be between 2 and 8")
					.max(8, "must be between 2 and 8")
					.required("required"),
				southNeighborHeight: yup
					.number()
					.min(4, "must be between 4 and 10")
					.max(10, "must be between 4 and 10")
					.required("required"),
				northNeighborDist: yup
					.number()
					.min(2, "must be between 2 and 8")
					.max(8, "must be between 2 and 8")
					.required("required"),
				northNeighborHeight: yup
					.number()
					.min(4, "must be between 4 and 10")
					.max(10, "must be between 4 and 10")
					.required("required"),
			})}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-5 pr-10 mb-8">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						site plan
					</legend>
					<InputRange
						name="southNeighborDist"
						label="South neighbor distance"
						min="2"
						max="8"
						step="1"
						moreInfo="فاصله از همسایه جنوبی"
						unit="m"
						handleValue={handleSouthNeighborDistValue}
					/>
					<InputRange
						name="southNeighborHeight"
						label="South neighbor height"
						min="4"
						max="10"
						step="1"
						moreInfo="ارتفاع همسایه جنوبی"
						unit="m"
						handleValue={handleSouthNeighborHeightValue}
					/>
					<InputRange
						name="northNeighborDist"
						label="North neighbor distance"
						min="2"
						max="8"
						step="1"
						moreInfo="فاصله از همسایه شمالی"
						unit="m"
						handleValue={handleNorthNeighborDistValue}
					/>
					<InputRange
						name="northNeighborHeight"
						label="North neighbor height"
						min="4"
						max="10"
						step="1"
						moreInfo="ارتفاع همسایه شمالی"
						unit="m"
						handleValue={handleNorthNeighborHeightValue}
					/>
				</fieldset>
				<section className="flex justify-center gap-x-4 mt-auto pr-10">
					<button
						type="button"
						className="flex items-center gap-x-1 px-5 py-1 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
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

export default SitePlan;
