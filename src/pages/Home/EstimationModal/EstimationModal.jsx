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
					label="project name"
					placeholder="enter a name for your project"
				/>
			) : (
				<TextField
					type="text"
					name="prevProjectName"
					label="project name"
					placeholder="choose from prev projects"
				/>
			)}
		</>
	);
};

const ChooseOrCreateProject = () => {
	const { values } = useFormikContext();
	return (
		<>
			{values.estimationScale === "building" ||
			values.estimationScale === "city" ? (
				<div className="flex flex-col gap-y-1 capitalize">
					<label className="normal-case">
						Create new project or choose from previous ones
					</label>
					<div>
						<RadioBtn name="newOrPrevProject" value="newProject">
							new project
						</RadioBtn>
						<RadioBtn name="newOrPrevProject" value="prevProject">
							prev project
						</RadioBtn>
					</div>
				</div>
			) : null}
		</>
	);
};

const EstimationModal = () => {
	const estimationCategory = [
		{ label: "energy, daylight and thermal comfort" },
		{ label: "structure" },
		{ label: "fire in building" },
		{ label: "acoustic" },
	];
	const estimationScale = [
		{ label: "zone" },
		{ label: "building" },
		{ label: "city" },
	];
	return (
		<Formik
			initialValues={{
				newOrPrevProject: "newProject",
				newProjectName: "",
				prevProjectName: "",
				estimationCategory: "choose one",
				estimationScale: "choose one",
			}}
		>
			<Form className="flex flex-col gap-y-4">
				<SelectField
					selectOptions={estimationCategory}
					name="estimationCategory"
					label="estimation category"
				/>
				<SelectField
					selectOptions={estimationScale}
					name="estimationScale"
					label="estimation scale"
				/>
				<ChooseOrCreateProject />
				<ProjectName />
				<button
					type="submit"
					className="px-3 py-1 rounded-md uppercase text-white bg-blue-550"
				>
					next
				</button>
			</Form>
		</Formik>
	);
};

export default EstimationModal;
