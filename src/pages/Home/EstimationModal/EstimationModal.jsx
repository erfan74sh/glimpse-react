import React from "react";
import { Formik, Form, useFormikContext } from "formik";
// components
import RadioBtn from "../../../components/inputs/RadioBtn";

const ProjectName = () => {
	const { values } = useFormikContext();
	return (
		<>
			{values.newOrPrevProject === "newProject"
				? "new project"
				: "prev project"}
		</>
	);
};

const EstimationModal = () => {
	return (
		<Formik initialValues={{ newOrPrevProject: "newProject" }}>
			<Form className="flex flex-col gap-y-2">
				<RadioBtn name="newOrPrevProject" value="newProject">
					new project
				</RadioBtn>
				<RadioBtn name="newOrPrevProject" value="prevProject">
					prev project
				</RadioBtn>
				<ProjectName />
				<button type="submit">next</button>
			</Form>
		</Formik>
	);
};

export default EstimationModal;
