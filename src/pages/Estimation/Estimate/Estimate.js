import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import Geometry from "./FormSteps/Geometry";
import Material from "./FormSteps/Material";
import SitePlan from "./FormSteps/SitePlan";
import Review from "./FormSteps/Review";
import _3D from "./3D/_3D";
// state
import { selectInput } from "../../../features/data/inputDataSlice";
// style
import "./Estimate.scss";
// asset
// import ArrowRight from "../../../assets/images/arrow-right.svg";
// import ArrowLeft from "../../../assets/images/arrow-left.svg";

const Estimate = () => {
	const inputData = useSelector(selectInput);
	const [step, setStep] = useState("geometry");

	const handleStep = (e) => {
		setStep(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// todo: send data to server
	};

	return (
		<main className=" px-24 py-16" id="estimate__main">
			<header className="mb-14">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					energy and comfort
				</h1>
			</header>
			<main className="flex">
				<section className="w-2/5 pr-10 relative">
					<form
						id="energy-and-comfort"
						className=" h-full flex flex-col"
						onSubmit={handleSubmit}
					>
						{step === "geometry" && (
							<Geometry handleStep={(e) => handleStep(e)} />
						)}
						{step === "material" && (
							<Material handleStep={(e) => handleStep(e)} />
						)}
						{step === "site plan" && (
							<SitePlan handleStep={(e) => handleStep(e)} />
						)}
						{step === "review" && <Review handleStep={(e) => handleStep(e)} />}
					</form>
					<div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4">
						<ProgressBar step={step} />
					</div>
				</section>
				<section className="flex flex-col w-3/5 pl-24">
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						3D view
					</h2>
					<div className="">
						{/* <button>
							<img src={ArrowLeft} alt="arrow left" />
						</button> */}
						<div className="w-full px-10 h-96">
							<_3D xDim={inputData.xDim} yDim={inputData.yDim} />
						</div>
						{/* <button>
							<img src={ArrowRight} alt="arrow right" />
						</button> */}
					</div>

					<button
						type="submit"
						form="energy-and-comfort"
						className={`self-center mt-16 px-10 py-2 text-white font-medium uppercase rounded-md bg-blue-550 ${
							step !== "review" && "opacity-25 pointer-events-none"
						}`}
					>
						<Link
							to="result"
							className={`${step !== "review" && "pointer-events-none"}`}
						>
							start estimate
						</Link>
					</button>
				</section>
			</main>
		</main>
	);
};

export default Estimate;
