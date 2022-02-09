import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormikContext } from "formik";
import * as yup from "yup";

// components
import TextField from "../../../components/inputs/TextField";
import SelectField from "../../../components/inputs/SelectField/SelectField";
import ModalMap from "./ModalMap/ModalMap";
// state
import { updateData } from "../../../features/estimationPrimData/EstimationPrimDataSlice";
// style
import "./EstimationModal.scss";

const Subset = () => {
	const { high_performance_building_index } = useFormikContext().values;
	const ieqSubset = [
		{ label: "visual comfort", value: "visual_comfort" },
		{ label: "thermal comfort", value: "thermal_comfort" },
	];
	const energyWaterSubset = [
		{ label: "energy consumption", value: "energy_consumption" },
	];
	const structureSubset = [
		{ label: "structure design", value: "structure_design" },
	];
	return (
		<SelectField
			selectOptions={
				high_performance_building_index === "IEQ"
					? ieqSubset
					: high_performance_building_index === "structure"
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
	const highPerformanceBuildingsOptions = [
		{ label: "IEQ", value: "IEQ" },
		{ label: "structure", value: "structure" },
		{ label: "energy and water", value: "energy_and_water" },
	];
	const buildingProgramOptions = [
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
				high_performance_building_index: yup
					.string()
					.required("please select one")
					.oneOf(
						["IEQ", "structure", "energy_and_water"],
						"pick from provided list"
					),
				subset: yup
					.string()
					.required("choose subset")
					.oneOf(
						[
							"visual_comfort",
							"thermal_comfort",
							"energy_consumption",
							"structure_design",
						],
						"pick from provided list"
					),
				building_program: yup
					.string()
					.oneOf(["office", "residential", "school", "hotel"])
					.required("required"),
			})}
		>
			<Form className="w-84 flex flex-col gap-y-4">
				<SelectField
					selectOptions={highPerformanceBuildingsOptions}
					name="high_performance_building_index"
					label="High performance buildings"
					placeholder="choose category"
					handleValue={() => null}
				/>
				<Subset />
				<SelectField
					selectOptions={buildingProgramOptions}
					name="building_program"
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
				project_name: yup
					.string()
					.min(2, "project name must be more than 2 characters")
					.max(40, "project name must be less than 40 characters")
					.required("project name is required"),
				zone_name: yup
					.string()
					.min(2, "zone name must be more than 2 characters")
					.max(40, "zone name must be less than 40 characters")
					.required("zone name is required"),
				alternative_name: yup
					.string()
					.min(2, "alternative name must be more than 2 characters")
					.max(40, "alternative name must be less than 40 characters")
					.required("alternative name is required"),
			})}
		>
			<Form className="w-84 flex flex-col gap-y-4">
				<TextField
					type="text"
					name="project_name"
					label="project name"
					placeholder="enter a name for your project"
				/>
				<TextField
					type="text"
					name="zone_name"
					label="zone name"
					placeholder="enter a name for your zone"
				/>
				<TextField
					type="text"
					name="alternative_name"
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
	const [formData, setFormData] = useState({
		high_performance_building_index: "",
		subset: "",
		building_program: "",
		project_name: "",
		alternative_name: "",
		zone_name: "",
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
