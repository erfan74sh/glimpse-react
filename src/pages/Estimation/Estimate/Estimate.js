import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import Geometry from "./FormSteps/Geometry";
import Material from "./FormSteps/Material";
import SitePlan from "./FormSteps/SitePlan";
import Review from "./FormSteps/Review";
import Model3D from "./3D/_3D";
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
		<Material nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<SitePlan nextStep={handleNextStep} prevStep={handlePrevStep} />,
		<Review prevStep={handlePrevStep} />,
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
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						3D view
					</h2>
					<div className="">
						<div className="w-full px-10 h-96">
							<Model3D
								xDim={inputData.xDim}
								yDim={inputData.yDim}
								wwrNorth={inputData.wwrNorth}
								wwrSouth={inputData.wwrSouth}
							/>
						</div>
					</div>
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
