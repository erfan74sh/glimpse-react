import React from "react";
import { Formik, Form } from "formik";
// components
import RadioBtn from "../../../components/inputs/RadioBtn";

const EstimationModal = () => {
	return (
		<Formik>
			<Form className="flex flex-col gap-y-2">
				<RadioBtn name="newOrPrevProject" value="newProject">
					new project
				</RadioBtn>
				<RadioBtn name="newOrPrevProject" value="prevProject">
					prev project
				</RadioBtn>
				<button type="submit">next</button>
			</Form>
		</Formik>
	);
};

export default EstimationModal;
