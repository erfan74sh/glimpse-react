import React from "react";
import { useSelector } from "react-redux";
// components
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import ThermalComfort from "./ThermalComfort";
import VisualComfort from "./VisualComfort";
import EnergyConsumption from "./EnergyConsumption";
import StructureDesign from "./StructureDesign";
// state
import { selectPrimaryData } from "../../../features/estimationPrimData/EstimationPrimDataSlice";
// style
import "./Estimate.scss";

const Estimate = () => {
	const primaryData = useSelector(selectPrimaryData);

	return (
		<main className=" px-24 py-10" id="estimate__main">
			<header className="mb-10">
				<h1 className="border-blue-550 text-blue-550 flex justify-between border-l-8 pl-3 text-2xl font-bold uppercase leading-8">
					{primaryData.subset}
				</h1>
				<section className="px-5 pt-10 pb-4">
					<BreadCrumbs
						projectName={primaryData.project_name}
						zoneName={primaryData.zone_name}
						alternativeName={primaryData.alternative_name}
					/>
				</section>
			</header>
			<main className="flex">
				{primaryData.subset === "thermal_comfort" && <ThermalComfort />}
				{primaryData.subset === "visual_comfort" && <VisualComfort />}
				{primaryData.subset === "energy_consumption" && <EnergyConsumption />}
				{primaryData.subset === "structure_design" && <StructureDesign />}
			</main>
		</main>
	);
};

export default Estimate;
