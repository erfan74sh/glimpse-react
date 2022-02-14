import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import ProgressBar from "../../../../components/progress-bar";
import Geometry from "./FormSteps/Geometry";
import BoundryCondition from "./FormSteps/BoundryCondition/BoundryCondition";
import SitePlan from "./FormSteps/SitePlan";
import Material from "./FormSteps/Material";
import Hvac from "./FormSteps/Hvac/Hvac";
import Review from "./FormSteps/Review";
import VisualBoundryCondition from "./VisualSteps/BoundryCondition";
import VisualGeometry from "./VisualSteps/Geometry";
import VisualMaterial from "./VisualSteps/Material";
import VisualSitePlan from "./VisualSteps/SitePlan";
import VisualHvac from "./VisualSteps/Hvac";
import VisualReview from "./VisualSteps/Review/VisualReview";
// slice
import { selectEnergyConsumptionData } from "../../../../features/energyConsumptionData/energyConsumptionsDataSlice";
import { selectPrimaryData } from "../../../../features/estimationPrimData/EstimationPrimDataSlice";
// services
import energyConsumptionServices from "../../../../services/estimations/energyConsumption.service";

const EnergyConsumption = () => {
	const primData = useSelector(selectPrimaryData);
	const { subset, project_name, zone_name } = primData;
	const inputData = useSelector(selectEnergyConsumptionData);
	const navigate = useNavigate();
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
		try {
			const response = await energyConsumptionServices.estimate({
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
	};

	const steps = [
		<Geometry nextStep={handleNextStep} />,
		<BoundryCondition nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<SitePlan nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Material nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Hvac nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Review prevStep={handlePrevStep} />,
	];

	const visualSteps = [
		<VisualGeometry />,
		<VisualBoundryCondition />,
		<VisualSitePlan />,
		<VisualMaterial />,
		<VisualHvac />,
		<VisualReview />,
	];
	return (
		<>
			<section className="relative w-2/5 pr-10">
				{steps[step]}
				<div className="absolute right-0 top-1/2 h-3/4 -translate-y-1/2 transform">
					<ProgressBar currentStep={step} totalSteps={5} />
				</div>
			</section>
			<section className="flex w-3/5 flex-col pl-24">
				{visualSteps[step]}
				<button
					type="submit"
					form="energy-and-comfort"
					onClick={(e) => handleSubmit(e)}
					className={`bg-blue-550 mt-16 self-center rounded-md px-10 py-2 font-medium uppercase text-white ${
						step !== 5 && "pointer-events-none opacity-25"
					}`}
				>
					start estimate
				</button>
			</section>
		</>
	);
};

export default EnergyConsumption;
