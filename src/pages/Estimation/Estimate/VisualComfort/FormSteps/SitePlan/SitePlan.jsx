import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
// state
import {
	selectVisualComfortData,
	updateData,
} from "../../../../../../features/visualComfortData/VisualComfortDataSlice";
// components
import InputRange from "../../../../../../components/inputs/InputRange";

const SitePlan = ({ nextStep, prevStep }) => {
	const data = useSelector(selectVisualComfortData);

	const dispatch = useDispatch();

	const handleSouthNeighborDistValue = (v) => {
		dispatch(
			updateData({
				...data,
				south_neighbor_distance: v,
			})
		);
	};

	const handleSouthNeighborHeightValue = (v) => {
		dispatch(
			updateData({
				...data,
				south_neighbor_height: v,
			})
		);
	};

	const handleNorthNeighborDistValue = (v) => {
		dispatch(
			updateData({
				...data,
				north_neighbor_distance: v,
			})
		);
	};

	const handleNorthNeighborHeightValue = (v) => {
		dispatch(
			updateData({
				...data,
				north_neighbor_height: v,
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
				south_neighbor_distance: yup
					.number()
					.min(2, "must be between 2 and 8")
					.max(8, "must be between 2 and 8")
					.required("required"),
				south_neighbor_height: yup
					.number()
					.min(4, "must be between 4 and 10")
					.max(10, "must be between 4 and 10")
					.required("required"),
				north_neighbor_distance: yup
					.number()
					.min(2, "must be between 2 and 8")
					.max(8, "must be between 2 and 8")
					.required("required"),
				north_neighbor_height: yup
					.number()
					.min(4, "must be between 4 and 10")
					.max(10, "must be between 4 and 10")
					.required("required"),
			})}
		>
			<Form className="flex h-full flex-col">
				<fieldset className="mb-8 flex flex-col gap-y-5 pr-10">
					<legend className="mb-9 w-full border-b border-gray-500 pb-4 text-xl font-normal uppercase">
						site plan
					</legend>
					<InputRange
						name="south_neighbor_distance"
						label="South neighbor distance"
						min="2"
						max="8"
						step="0.5"
						moreInfo="فاصله از همسایه جنوبی"
						unit="m"
						handleValue={handleSouthNeighborDistValue}
						initialVal={data.south_neighbor_distance}
					/>
					<InputRange
						name="south_neighbor_height"
						label="South neighbor height"
						min="4"
						max="10"
						step="0.5"
						moreInfo="ارتفاع همسایه جنوبی"
						unit="m"
						handleValue={handleSouthNeighborHeightValue}
						initialVal={data.south_neighbor_height}
					/>
					<InputRange
						name="north_neighbor_distance"
						label="North neighbor distance"
						min="2"
						max="8"
						step="0.5"
						moreInfo="فاصله از همسایه شمالی"
						unit="m"
						handleValue={handleNorthNeighborDistValue}
						initialVal={data.north_neighbor_distance}
					/>
					<InputRange
						name="north_neighbor_height"
						label="North neighbor height"
						min="4"
						max="10"
						step="0.5"
						moreInfo="ارتفاع همسایه شمالی"
						unit="m"
						handleValue={handleNorthNeighborHeightValue}
						initialVal={data.north_neighbor_height}
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="button"
						className="flex items-center gap-x-1 rounded-md border-2 border-blue-550 bg-white px-5 py-1 font-medium uppercase text-blue-550"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(material)</span>
					</button>
					<button
						type="submit"
						className="flex items-center gap-x-1 rounded-md border-2 border-blue-550 bg-blue-550 px-5 py-1 font-medium uppercase text-white"
					>
						next <span className="text-xs lowercase">(review)</span>
					</button>
				</section>
			</Form>
		</Formik>
	);
};

export default SitePlan;
