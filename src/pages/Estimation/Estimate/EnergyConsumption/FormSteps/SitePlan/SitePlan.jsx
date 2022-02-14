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
import InputRange from "../../../../../../components/inputs/InputRange";

const SitePlan = ({ nextStep, prevStep }) => {
	const data = useSelector(selectEnergyConsumptionData);

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
						step="1"
						moreInfo="فاصله از همسایه جنوبی"
						unit="m"
						handleValue={handleSouthNeighborDistValue}
					/>
					<InputRange
						name="south_neighbor_height"
						label="South neighbor height"
						min="4"
						max="10"
						step="1"
						moreInfo="ارتفاع همسایه جنوبی"
						unit="m"
						handleValue={handleSouthNeighborHeightValue}
					/>
					<InputRange
						name="north_neighbor_distance"
						label="North neighbor distance"
						min="2"
						max="8"
						step="1"
						moreInfo="فاصله از همسایه شمالی"
						unit="m"
						handleValue={handleNorthNeighborDistValue}
					/>
					<InputRange
						name="north_neighbor_height"
						label="North neighbor height"
						min="4"
						max="10"
						step="1"
						moreInfo="ارتفاع همسایه شمالی"
						unit="m"
						handleValue={handleNorthNeighborHeightValue}
					/>
				</fieldset>
				<section className="mt-auto flex justify-center gap-x-4 pr-10">
					<button
						type="button"
						className="text-blue-550 border-blue-550 flex items-center gap-x-1 rounded-md border-2 bg-white px-5 py-1 font-medium uppercase"
						onClick={prevStep}
					>
						prev <span className="text-xs lowercase">(boundry condition)</span>
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

export default SitePlan;
