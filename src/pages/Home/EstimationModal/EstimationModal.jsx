import React, { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";
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

const ChooseLocation = () => {
	return <span>google map here</span>;
};

const EstimationModal = () => {
	const [step, setStep] = useState("basic-informations");

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
				estimationCategory: "",
				estimationScale: "",
				newOrPrevProject: "newProject",
				newProjectName: "",
				prevProjectName: "",
			}}
			onSubmit={
				// todo: edit handle submit
				(values) => {
					console.log(values);
					setStep("choose-location");
				}
			}
			validationSchema={yup.object({
				estimationCategory: yup
					.string()
					.required("please select one")
					.oneOf(
						[
							"energy, daylight and thermal comfort",
							"structure",
							"fire in building",
							"acoustic",
						],
						"pick from provided list"
					),
				estimationScale: yup
					.string()
					.required("choose scale")
					.oneOf(["zone", "building", "city"], "pick from provided list"),
				newProjectName: yup.string().when("newOrPrevProject", {
					is: "newProject",
					then: yup.string().required("new projec name is required"),
					otherwise: yup.string(),
				}),
				prevProjectName: yup.string().when("newOrPrevProject", {
					is: "prevProject",
					then: yup.string().required("pev [roject name is required"),
					otherwise: yup.string(),
				}),
			})}
		>
			<Form className="flex flex-col gap-y-4">
				{step === "basic-informations" ? (
					<>
						<SelectField
							selectOptions={estimationCategory}
							name="estimationCategory"
							label="estimation category"
							placeholder="choose category"
						/>
						<SelectField
							selectOptions={estimationScale}
							name="estimationScale"
							label="estimation scale"
							placeholder="choose scale"
						/>
						<ChooseOrCreateProject />
						<ProjectName />
					</>
				) : (
					<ChooseLocation />
				)}
				<button
					type="submit"
					className="mt-4 px-3 py-1 rounded-md uppercase text-white bg-blue-550"
				>
					next
				</button>
			</Form>
		</Formik>
	);
};

export default EstimationModal;
