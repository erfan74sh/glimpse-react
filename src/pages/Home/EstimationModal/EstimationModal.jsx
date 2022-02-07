import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";

// components
import TextField from "../../../components/inputs/TextField";
import SelectField from "../../../components/inputs/SelectField/SelectField";
import ModalMap from "./ModalMap/ModalMap";
// state
import {
	selectPrimaryData,
	updateData,
} from "../../../features/estimationPrimData/EstimationPrimDataSlice";
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
		{ label: "IEQ", value: "IEQ" },
		{ label: "structure", value: "structure" },
		{ label: "energy and water", value: "energy_and_water" },
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
			<Form className="w-84 flex flex-col gap-y-4">
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
					className="bg-blue-550 mt-4 rounded-md px-3 py-1 uppercase text-white"
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
				projectName: yup
					.string()
					.min(2, "project name must be more than 2 characters")
					.max(40, "project name must be less than 40 characters")
					.required("project name is required"),
				zoneName: yup
					.string()
					.min(2, "zone name must be more than 2 characters")
					.max(40, "zone name must be less than 40 characters")
					.required("zone name is required"),
				alternativeName: yup
					.string()
					.min(2, "alternative name must be more than 2 characters")
					.max(40, "alternative name must be less than 40 characters")
					.required("alternative name is required"),
			})}
		>
			<Form className="w-84 flex flex-col gap-y-4">
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
				<div className="mt-4 flex gap-x-4">
					<button
						type="submit"
						className=" text-blue-550 border-blue-550 flex-grow rounded-md border bg-white px-3 py-1 uppercase"
						onClick={prevStep}
					>
						prev
					</button>
					<button
						type="submit"
						className="bg-blue-550 flex-grow rounded-md px-3 py-1 uppercase text-white"
					>
						next
					</button>
				</div>
			</Form>
		</Formik>
	);
};

const StepThree = ({ prevStep, formData }) => {
	const dispatch = useDispatch();
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
				dispatch(updateData({ ...values }));
				navigate("/estimation");
				console.log(values);
			}}
			validationSchema={yup.object({
				location: yup.string().required("you should pick a location"),
			})}
		>
			<div className="estimation-modal__map-container">
				<Form>
					<div className="mb-8 flex items-end gap-x-7">
						<div className="w-7/12">
							<SelectField
								selectOptions={locationOptions}
								name="location"
								label="location"
								placeholder="choose location"
								handleValue={() => null}
							/>
						</div>
						<div className="flex w-5/12 gap-x-3">
							<button
								type="button"
								className="border-blue-550 text-blue-550 w-1/2 rounded-md border bg-white px-3 py-2 uppercase"
								onClick={prevStep}
							>
								prev
							</button>
							<button
								type="submit"
								className="bg-blue-550 w-1/2 rounded-md px-3 py-2 uppercase text-white"
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
	const primaryData = useSelector(selectPrimaryData);
	console.log(primaryData);
	const [formData, setFormData] = useState({
		highPerformanceBuildings: "",
		subset: "",
		buildingProgram: "",
		projectName: "",
		zoneName: "",
		alternativeName: "",
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
