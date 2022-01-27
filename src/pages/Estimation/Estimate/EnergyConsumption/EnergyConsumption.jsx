import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
// state
import { selectInput } from "../../../../features/data/inputDataSlice";

const EnergyConsumption = () => {
	const inputData = useSelector(selectInput);
	const navigate = useNavigate();
	const [step, setStep] = useState(0);

	const handleNextStep = () => {
		setStep((prev) => prev + 1);
	};

	const handlePrevStep = () => {
		setStep((prev) => prev - 1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// todo: send data to server
		console.log(inputData);
		navigate("/estimation/result/0");
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
			<section className="w-2/5 pr-10 relative">
				{steps[step]}
				<div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4">
					<ProgressBar currentStep={step} totalSteps={5} />
				</div>
			</section>
			<section className="flex flex-col w-3/5 pl-24">
				{visualSteps[step]}
				<button
					type="submit"
					form="energy-and-comfort"
					onClick={(e) => handleSubmit(e)}
					className={`self-center mt-16 px-10 py-2 text-white font-medium uppercase rounded-md bg-blue-550 ${
						step !== 5 && "opacity-25 pointer-events-none"
					}`}
				>
					start estimate
				</button>
			</section>
		</>
	);
};

export default EnergyConsumption;
