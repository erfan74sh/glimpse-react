import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import InputSelect from "../../../components/inputs/InputSelect";
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import Geometry from "./FormSteps/Geometry";
import Material from "./FormSteps/Material";
import SitePlan from "./FormSteps/SitePlan";
import _3D from "./3D/_3D";
// state
import { selectInput } from "../../../features/data/inputDataSlice";
// style
import "./Estimate.scss";
// asset
import ArrowRight from "../../../assets/images/arrow-right.svg";
import ArrowLeft from "../../../assets/images/arrow-left.svg";

const Estimate = () => {
	const inputData = useSelector(selectInput);
	const [step, setStep] = useState("geometry");
	const handleStep = (currntStep, direction = "prev") => {
		if (direction === "next") {
			switch (currntStep) {
				case "geometry":
					setStep("material");
					break;
				case "material":
					setStep("site plan");
					break;
				default:
					return;
			}
		} else {
			switch (currntStep) {
				case "material":
					setStep("geometry");
					break;
				case "site plan":
					setStep("material");
				default:
					return;
			}
		}
	};
	return (
		<main className=" px-24 py-16" id="estimate__main">
			<header className="mb-14">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					energy and comfort
				</h1>
			</header>
			<main className="flex">
				<section className="flex flex-col w-2/5 pr-10 relative">
					<form className="">
						{step === "geometry" && <Geometry />}
						{step === "material" && <Material />}
						{step === "site plan" && <SitePlan />}
					</form>
					<section className="flex justify-center gap-x-4 mt-auto mr-8 pr-10">
						{step !== "geometry" && (
							<button
								type="button"
								className="flex items-center gap-x-1 px-6 py-2 text-blue-550 font-medium uppercase rounded-md bg-white border-2 border-blue-550"
								onClick={() => handleStep(step)}
							>
								{step !== "geometry" && (
									<span className="text-xs lowercase">{`${
										step === "material" ? "(Geometry)" : "(Material)"
									}`}</span>
								)}
								prev
							</button>
						)}
						{step !== "site plan" && (
							<button
								type="button"
								className="flex items-center gap-x-1 px-6 py-2 text-white font-medium uppercase rounded-md bg-blue-550"
								onClick={() => handleStep(step, "next")}
							>
								next
								{step !== "site plan" && (
									<span className="text-xs lowercase">{`${
										step === "geometry" ? "(material)" : "(site plan)"
									}`}</span>
								)}
							</button>
						)}
					</section>
					<div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4">
						<ProgressBar />
					</div>
				</section>
				<section className="flex flex-col w-3/5 pl-24">
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						3D view
					</h2>
					<div className="flex justify-between items-center">
						<button>
							<img src={ArrowLeft} alt="arrow left" />
						</button>
						<div className="w-96 h-96">
							<_3D />
						</div>
						<button>
							<img src={ArrowRight} alt="arrow right" />
						</button>
					</div>

					<Link to="result" className="self-center">
						<button
							className={`mt-16 px-10 py-2 text-white font-medium uppercase rounded-md bg-blue-550 ${
								step !== "site plan" && "opacity-25 pointer-events-none"
							}`}
						>
							start estimate
						</button>
					</Link>
				</section>
			</main>
		</main>
	);
};

export default Estimate;
