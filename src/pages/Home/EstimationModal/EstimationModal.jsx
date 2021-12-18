import React from "react";
import { Formik, Form } from "formik";
// components
import RadioBtn from "../../../components/inputs/RadioBtn";

const EstimationModal = () => {
	return (
		<Formik>
			<Form className="flex flex-col gap-y-2">
				<label>category</label>
				<input type="text" />
				<label>type</label>
				<input type="text" />
				<RadioBtn name="newOrPrevProject">new project</RadioBtn>
				<RadioBtn name="newOrPrevProject">prev project</RadioBtn>
				<button type="submit">next</button>
			</Form>
		</Formik>
	);
};

export default EstimationModal;
