import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";

// components
import TextField from "../../../components/inputs/TextField";
import SelectField from "../../../components/inputs/SelectField/SelectField";
import ModalMap from "./ModalMap/ModalMap";
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
				highPerformanceBuildings: yup
					.string()
					.required("please select one")
					.oneOf(
						["IEQ", "structure", "energy and water"],
						"pick from provided list"
					),
				subset: yup
					.string()
					.required("choose subset")
					.oneOf(
						[
							"visual comfort",
							"thermal comfort",
							"energy consumption",
							"structure design",
						],
						"pick from provided list"
					),
				buildingProgram: yup
					.string()
					.oneOf(["office", "residential", "school", "hotel"])
					.required("required"),
			})}
		>
			<Form className="flex flex-col gap-y-4 w-84">
				<SelectField
					selectOptions={highPerformanceBuildings}
					name="highPerformanceBuildings"
					label="High performance buildings"
					placeholder="choose category"
					handleValue={() => null}
				/>
				<Subset />
				<SelectField
					selectOptions={buildingProgram}
					name="buildingProgram"
					label="Building Program"
					placeholder="choose program"
					handleValue={() => null}
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

const StepTwo = ({ nextStep, prevStep, formData }) => {
	return (
		<Formik
			initialValues={formData}
			onSubmit={(values) => {
				nextStep(values);
			}}
			validationSchema={yup.object({
				projectName: yup.string().required("new projec name is required"),
			})}
		>
			<Form className="flex flex-col gap-y-4 w-84">
				<TextField
					type="text"
					name="projectName"
					label="project name"
					placeholder="enter a name for your project"
				/>
				<TextField
					type="text"
					name="zoneName"
					label="zone name"
					placeholder="enter a name for your zone"
				/>
				<TextField
					type="text"
					name="alternativeName"
					label="alternative name"
					placeholder="enter a name for your alternative"
				/>
				<div className="flex gap-x-4 mt-4">
					<button
						type="submit"
						className=" px-3 py-1 rounded-md uppercase text-blue-550 bg-white border border-blue-550 flex-grow"
						onClick={prevStep}
					>
						prev
					</button>
					<button
						type="submit"
						className="px-3 py-1 rounded-md uppercase text-white bg-blue-550 flex-grow"
					>
						next
					</button>
				</div>
			</Form>
		</Formik>
	);
};

const StepThree = ({ prevStep, formData }) => {
	let navigate = useNavigate();
	const locationOptions = [
		{ label: "tehran" },
		{ label: "yazd" },
		{ label: "bushehr" },
		{ label: "sari" },
	];
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
					<div className="flex items-end gap-x-10 mb-8">
						<div className="w-3/5">
							<SelectField
								selectOptions={locationOptions}
								name="location"
								label="location"
								placeholder="choose location"
								handleValue={() => null}
							/>
						</div>
						<div className="flex gap-x-3 w-2/5">
							<button
								type="button"
								className="w-1/2 px-3 py-2 rounded-md uppercase border border-blue-550 text-blue-550 bg-white"
								onClick={prevStep}
							>
								prev
							</button>
							<button
								type="submit"
								className="w-1/2 px-3 py-2 rounded-md uppercase text-white bg-blue-550"
							>
								start estimation
							</button>
						</div>
					</div>
					<ModalMap />
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
		<StepTwo
			prevStep={handlePrevStep}
			nextStep={handleNextStep}
			formData={formData}
		/>,
		<StepThree prevStep={handlePrevStep} formData={formData} />,
	];
	return <>{steps[currentStep]}</>;
};

export default EstimationModal;
