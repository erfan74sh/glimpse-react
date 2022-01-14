import React from "react";
import { useSelector } from "react-redux";
// components
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import ThermalComfort from "./ThermalComfort";
import VisualComfort from "./VisualComfort";
// state
import { selectPrimaryData } from "../../../features/estimationPrimData/EstimationPrimDataSlice";
// style
import "./Estimate.scss";

const Estimate = () => {
	const primaryData = useSelector(selectPrimaryData);

	return (
		<main className=" px-24 py-10" id="estimate__main">
			<header className="mb-10">
				<h1 className="flex justify-between pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-2xl font-bold uppercase">
					energy and comfort
				</h1>
				<section className="px-5 pt-10 pb-4">
					<BreadCrumbs
						projectName={primaryData.projectName}
						zoneName={primaryData.zoneName}
						alternativeName={primaryData.alternativeName}
					/>
				</section>
			</header>
			<main className="flex">
				{primaryData.subset === "thermal comfort" && <ThermalComfort />}
				{primaryData.subset === "visual comfort" && <VisualComfort />}
			</main>
		</main>
	);
};

export default Estimate;
