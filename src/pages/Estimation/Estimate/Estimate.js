import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import Geometry from "./FormSteps/Geometry";
import BoundryCondition from "./FormSteps/BoundryCondition/BoundryCondition";
import Material from "./FormSteps/Material";
import SitePlan from "./FormSteps/SitePlan";
import Review from "./FormSteps/Review";
import VisualBoundryCondition from "./VisualSteps/BoundryCondition";
import VisualGeometry from "./VisualSteps/Geometry";
import VisualMaterial from "./VisualSteps/Material";
import VisualSitePlan from "./VisualSteps/SitePlan";
import VisualHvac from "./VisualSteps/Hvac";
import Hvac from "./FormSteps/Hvac/Hvac";

// state
import { selectInput } from "../../../features/data/inputDataSlice";
// style
import "./Estimate.scss";

const Estimate = () => {
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
		navigate("/estimation/result");
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
	];

	return (
		<main className=" px-24 py-10" id="estimate__main">
			<header className="mb-10">
				<h1 className="flex justify-between pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-2xl font-bold uppercase">
					<span>energy and comfort</span>
					<span>zone name</span>
				</h1>
			</header>
			<main className="flex">
				<section className="w-2/5 pr-10 relative">
					{steps[step]}
					<div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4">
						<ProgressBar step={step} />
					</div>
				</section>
				<section className="flex flex-col w-3/5 pl-24">
					{visualSteps[step]}
					<button
						type="submit"
						form="energy-and-comfort"
						onClick={(e) => handleSubmit(e)}
						className={`self-center mt-16 px-10 py-2 text-white font-medium uppercase rounded-md bg-blue-550 ${
							step !== 3 && "opacity-25 pointer-events-none"
						}`}
					>
						start estimate
					</button>
				</section>
			</main>
		</main>
	);
};

export default Estimate;
