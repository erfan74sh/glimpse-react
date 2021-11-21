import React from "react";
import { Link } from "react-router-dom";
// components
import InputSelect from "../../../components/inputs/InputSelect";
// style
import "./Estimate.scss";
// asset
import View from "../../../assets/images/3dmodel.png";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import ArrowLeft from "../../../assets/images/arrow-left.svg";

const Estimate = () => {
	return (
		<main className=" px-24 py-16" id="estimate__main">
			<header className="mb-14">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					energy and comfort
				</h1>
			</header>
			<main className="flex">
				<section className="w-2/5 max-h-152 overflow-hidden">
					<form className=" h-full w-full pr-10 overflow-y-scroll box-content">
						<fieldset className="flex flex-col gap-y-9 mb-12">
							<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500 sticky top-0">
								geometry
							</legend>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
						</fieldset>
						<fieldset className="flex flex-col gap-y-9">
							<legend className="w-full mb-9 pb-4 border-b text-xl font-normal uppercase border-gray-500 sticky top-0">
								material
							</legend>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
							<InputSelect
								placeHolder="X- Dimention"
								items={["item1", "item2", "item3"]}
							/>
						</fieldset>
					</form>
				</section>
				<section className="flex flex-col w-3/5 pl-24">
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						3D view
					</h2>
					<div className="flex justify-between items-center">
						<button>
							<img src={ArrowLeft} alt="arrow left" />
						</button>
						<img src={View} alt="3d view" />
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
