import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
// import * as yup from "yup";
// // state
import {
	selectInput,
	updateData,
} from "../../../../../features/data/inputDataSlice";
// // components
// import SelectField from "../../../../../components/inputs/SelectField/SelectField";

const BoundryCondition = ({ nextStep, prevStep }) => {
	const data = useSelector(selectInput);

	// const dispatch = useDispatch();

	return (
		<Formik
			initialValues={data}
			onSubmit={(values) => {
				// todo: edit form submit
				console.log(values);
				nextStep();
			}}
			// validationSchema={yup.object({

			// })}
		>
			<Form className="h-full flex flex-col">
				<fieldset className="flex flex-col gap-y-9 pr-10">
					<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						Boundry conditions
					</legend>
					{/* <SelectField
						name="floorLevel"
						selectOptions={floorLevelOptions}
						label="floor level"
						placeholder="choose level"
						handleValue={() => null}
					/> */}
				</fieldset>
			</Form>
		</Formik>
	);
};

export default BoundryCondition;
