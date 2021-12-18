import React from "react";
import { Formik, Form, useFormikContext } from "formik";
// components
import RadioBtn from "../../../components/inputs/RadioBtn";
import TextField from "../../../components/inputs/TextField";
import SelectField from "../../../components/inputs/SelectField/SelectField";

const ProjectName = () => {
	const { values } = useFormikContext();
	return (
		<>
			{values.newOrPrevProject === "newProject" ? (
				<TextField
					type="text"
					name="newProjectName"
					placeholder="enter a name for your project"
				/>
			) : (
				<TextField
					type="text"
					name="prevProjectName"
					placeholder="choose from prev projects"
				/>
			)}
		</>
	);
};

const EstimationModal = () => {
	const estimationCategory = [
		{ name: "category", label: "first" },
		{ name: "category", label: "second" },
		{ name: "category", label: "third" },
	];
	return (
		<Formik
			initialValues={{
				newOrPrevProject: "newProject",
				newProjectName: "",
				prevProjectName: "",
				category: "choose one",
			}}
		>
			<Form className="flex flex-col gap-y-2">
				<SelectField selectOptions={estimationCategory} name="category" />
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
