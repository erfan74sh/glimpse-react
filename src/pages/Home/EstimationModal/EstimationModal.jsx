import React, { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";
// components
import RadioBtn from "../../../components/inputs/RadioBtn";
import TextField from "../../../components/inputs/TextField";
import SelectField from "../../../components/inputs/SelectField/SelectField";
// style
import "./EstimationModal.scss";

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

const StepOne = ({ nextStep, formData }) => {
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
			initialValues={formData}
			onSubmit={(values) => {
				nextStep(values);
			}}
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

const StepTwo = ({ prevStep, formData }) => {
	return (
		<Formik
			initialValues={formData}
			onSubmit={(values) => {
				// todo: send data to server and delete console.log
				console.log(values);
			}}
			validationSchema={yup.object({
				location: yup.string().required("you should pick a location"),
			})}
		>
			<div className="estimation-modal__map-container">
				<Form>
					<TextField
						type="text"
						name="location"
						label="location"
						placeholder="enter location of your project"
					/>
					<div className="flex justify-center gap-x-2 mt-8">
						<button
							type="button"
							className="px-3 py-1 rounded-md uppercase border border-blue-550 text-blue-550 bg-white"
							onClick={prevStep}
						>
							prev
						</button>
						<button
							type="submit"
							className="px-3 py-1 rounded-md uppercase text-white bg-blue-550"
						>
							start estimation
						</button>
					</div>
				</Form>
			</div>
		</Formik>
	);
};

const EstimationModal = () => {
	const [formData, setFormData] = useState({
		estimationCategory: "",
		estimationScale: "",
		newOrPrevProject: "newProject",
		newProjectName: "",
		prevProjectName: "",
		location: "",
	});

	const [currentStep, setCurrentStep] = useState(0);

	const handleNextStep = (newData) => {
		setFormData((prev) => ({ ...prev, ...newData }));
		setCurrentStep((prev) => prev + 1);
	};
	const handlePrevStep = () => {
		setCurrentStep((prev) => prev - 1);
	};

	const steps = [
		<StepOne nextStep={handleNextStep} formData={formData} />,
		<StepTwo prevStep={handlePrevStep} formData={formData} />,
	];
	return <>{steps[currentStep]}</>;
};

export default EstimationModal;
