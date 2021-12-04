import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import InputSelect from "../../../components/inputs/InputSelect";
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import Geometry from "./FormSteps/Geometry";
import Material from "./FormSteps/Material";
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
	const [step, setStep] = useState(1);
	return (
		<main className=" px-24 py-16" id="estimate__main">
			<header className="mb-14">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					energy and comfort
				</h1>
			</header>
			<main className="flex">
				<section className="w-2/5 max-h-152 relative overflow-hidden">
					<form className=" h-full w-full pr-10 overflow-y-scroll box-content relative">
						<Geometry />
						<Material />
						{/* <fieldset className="flex flex-col gap-y-9 mb-12 pr-10">
							<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
								geometry
							</legend>
							<InputSelect
								placeHolder={inputData.xDim}
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="Y-Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="WWR-North"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="WWR-South"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="Shading Type"
								items={["item1", "item2", "item3"]}
							/>
						</fieldset>
						<fieldset className="flex flex-col gap-y-9 pr-10">
							<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500">
								material
							</legend>
							<InputSelect
								placeHolder="Wall-material"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="placeholder"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="placeholder"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="placeholder"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="placeholder"
								items={["item1", "item2", "item3"]}
							/>
						</fieldset> */}
					</form>
					<div className="absolute right-0 top-0 h-full">
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
						<button className="mt-16 px-10 py-2 text-white font-medium uppercase rounded-md bg-blue-550">
							start estimate
						</button>
					</Link>
				</section>
			</main>
		</main>
	);
};

export default Estimate;
