import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
// state
import { selectInput } from "../../../../features/data/inputDataSlice";

const StructureDesign = () => {
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
					start estimate
				</button>
			</section>
		</>
	);
};

export default StructureDesign;