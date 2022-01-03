import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";

// components
import RadioBtn from "../../../components/inputs/RadioBtn";
import TextField from "../../../components/inputs/TextField";
import SelectField from "../../../components/inputs/SelectField/SelectField";
import ModalMap from "./ModalMap/ModalMap";
// import SearchPlacesField from "./SearchPLacesField/SearchPlacesField";
// style
import "./EstimationModal.scss";

const Subset = () => {
	const { highPerformanceBuildings } = useFormikContext().values;
	const ieqSubset = [{ label: "visual comfort" }, { label: "thermal comfort" }];
	const energyWaterSubset = [{ label: "energy consumption" }];
	const structureSubset = [{ label: "structure design" }];
	return (
		<SelectField
			selectOptions={
				highPerformanceBuildings === "IEQ"
					? ieqSubset
					: highPerformanceBuildings === "structure"
					? structureSubset
					: energyWaterSubset
			}
			name="subset"
			label="Subset"
			placeholder="choose category"
			handleValue={() => null}
		/>
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
	const highPerformanceBuildings = [
		{ label: "IEQ" },
		{ label: "structure" },
		{ label: "energy and water" },
	];
	const buildingProgram = [
		{ label: "office" },
		{ label: "residential" },
		{ label: "school" },
		{ label: "hotel" },
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
			<Form className="flex flex-col gap-y-4 w-100">
				<SelectField
					selectOptions={highPerformanceBuildings}
					name="highPerformanceBuildings"
					label="High performance buildings"
					placeholder="choose category"
					handleValue={() => null}
				/>

				{/* <ChooseOrCreateProject /> */}
				{/* <ProjectName /> */}
				<Subset />
				<SelectField
					selectOptions={buildingProgram}
					name="buildingProgram"
					label="Building Program"
					placeholder="choose program"
					handleValue={() => null}
				/>
				<TextField
					type="text"
					name="projectName"
					label="project name"
					placeholder="enter a name for your project"
				/>
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
	let navigate = useNavigate();
	return (
		<Formik
			initialValues={formData}
			onSubmit={(values) => {
				// todo: send data to server and delete console.log
				navigate("/estimation");
				console.log(values);
			}}
			validationSchema={yup.object({
				location: yup.string().required("you should pick a location"),
			})}
		>
			<div className="estimation-modal__map-container">
				<Form>
					<div className=" mb-5">
						<TextField
							type="text"
							name="location"
							label="location"
							placeholder="enter location of your project"
						/>
					</div>
					{/* <SearchPlacesField /> */}
					<ModalMap />
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
		highPerformanceBuildings: "",
		subset: "",
		buildingProgram: "",
		projectName: "",
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
