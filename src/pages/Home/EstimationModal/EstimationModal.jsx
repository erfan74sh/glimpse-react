import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";

// components
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
				projectName: yup.string().required("new projec name is required"),
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
