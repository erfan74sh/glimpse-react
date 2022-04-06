import React, { useState } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
// components
import ProgressBar from "../../../../components/progress-bar";
import Geometry from "./FormSteps/Geometry";
import Material from "./FormSteps/Material/Material";
import SitePlan from "./FormSteps/SitePlan";
import Review from "./FormSteps/Review";
import VisualMaterial from "./VisualSteps/Material";
import VisualGeometry from "./VisualSteps/Geometry";
import VisualSitePlan from "./VisualSteps/SitePlan";
import VisualReview from "./VisualSteps/Review/VisualReview";
// services
import visualComfortServices from "../../../../services/estimations/visualComfort.service";

const ThermalComfort = ({ inputData, primData }) => {
	const params = useParams();

	const navigate = useNavigate();

	const { subset, project_name, zone_name } = primData;

	const [step, setStep] = useState(0);

	const handleNextStep = () => {
		setStep((prev) => prev + 1);
	};

	const handlePrevStep = () => {
		setStep((prev) => prev - 1);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// todo: edit error handling
		if (params && params.subset && params.simulationId) {
			try {
				const response = await visualComfortServices.editEstimation(
					params.simulationId,
					{ ...inputData, ...primData }
				);
				console.log(response.data);
				navigate({
					pathname: "/result",
					search: `?${createSearchParams({
						subset,
						project_name,
						zone_name,
					})}`,
				});
			} catch (err) {
				console.log("errore from edit visual comfort service", err);
			}
		} else {
			try {
				const response = await visualComfortServices.estimate({
					...inputData,
					...primData,
				});
				console.log(response.data);
				navigate({
					pathname: "/result",
					search: `?${createSearchParams({
						subset,
						project_name,
						zone_name,
					})}`,
				});
			} catch (err) {
				console.log("errore from visual comfort service", err);
			}
		}
	};

	const steps = [
		<Geometry nextStep={handleNextStep} data={inputData} />,
		<Material nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<SitePlan nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Review prevStep={handlePrevStep} />,
	];

	const visualSteps = [
		<VisualGeometry />,
		<VisualMaterial />,
		<VisualSitePlan />,
		<VisualReview />,
	];
	return (
		<>
			<section className="relative w-2/5 pr-10">
				{steps[step]}
				<div className="absolute right-0 top-1/2 h-3/4 -translate-y-1/2 transform">
					<ProgressBar currentStep={step} totalSteps={3} />
				</div>
			</section>
			<section className="flex w-3/5 flex-col pl-24">
				{visualSteps[step]}
				<button
					type="submit"
					form="energy-and-comfort"
					onClick={(e) => handleSubmit(e)}
					className={`bg-blue-550 mt-16 self-center rounded-md px-10 py-2 font-medium uppercase text-white ${
						step !== 3 && "pointer-events-none opacity-25"
					}`}
				>
					{params && params.simulationId ? "update" : "start estimate"}
				</button>
			</section>
		</>
	);
};

export default ThermalComfort;
