import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import ThermalComfort from "./ThermalComfort";
import VisualComfort from "./VisualComfort";
import EnergyConsumption from "./EnergyConsumption";
import StructureDesign from "./StructureDesign";
// state
import { selectPrimaryData } from "../../../features/estimationPrimData/EstimationPrimDataSlice";
import {
	getEnergySimulationById,
	selectEnergyConsumptionData,
	updateData,
} from "../../../features/energyConsumptionData/energyConsumptionsDataSlice";
import {
	getVisualSimulationById,
	selectVisualComfortData,
	updateData as updateVisualData,
} from "../../../features/visualComfortData/VisualComfortDataSlice";
// style
import "./Estimate.scss";
import { useParams } from "react-router-dom";

const Estimate = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const initialPrimaryData = useSelector(selectPrimaryData);

	const inputData = useSelector(selectEnergyConsumptionData);

	const visualInputData = useSelector(selectVisualComfortData);

	const [primaryData, setPrimaryData] = useState(initialPrimaryData);
	useEffect(() => {
		if (params.simulationId) {
			if (params.subset === "energy_consumption") {
				dispatch(getEnergySimulationById(Number(params.simulationId)))
					.unwrap()
					.then((data) => {
						setPrimaryData({
							subset: data.subset,
							project_name: data.project_name,
							zone_name: data.zone_name,
							alternative_name: data.alternative_name,
							location: data.location,
							high_performance_building_index:
								data.high_performance_building_index,
							building_program: data.building_program,
						});
						dispatch(
							updateData({
								x_dim: data.x_dim,
								y_dim: data.y_dim,
								rotation_angle: data.rotation_angle,
								wwr_north: data.wwr_north,
								wwr_south: data.wwr_south,
								shading_type: data.shading_type.toString(),
								hvac: data.hvac.toString(),
								wall_uvalue: data.wall_uvalue.toString(),
								roof_uvalue: data.roof_uvalue.toString(),
								floor_uvalue: data.floor_uvalue.toString(),
								window_uvalue: data.window_uvalue.toString(),
								natural_ventilation: data.natural_ventilation.toString(),
								south_neighbor_distance: data.south_neighbor_distance,
								south_neighbor_height: data.south_neighbor_height,
								north_neighbor_distance: data.north_neighbor_distance,
								north_neighbor_height: data.north_neighbor_height,
								number_of_floor: data.number_of_floor,
								south_wall_bc: data.south_wall_bc.toString(),
								north_wall_bc: data.north_wall_bc.toString(),
								east_wall_bc: data.east_wall_bc.toString(),
								west_wall_bc: data.west_wall_bc.toString(),
								floor_bc: data.floor_bc.toString(),
								roof_bc: data.roof_bc.toString(),
							})
						);
					})
					.catch((er) => console.log(er));
			} else if (params.subset === "visual_comfort") {
				dispatch(getVisualSimulationById(Number(params.simulationId)))
					.unwrap()
					.then((data) => {
						setPrimaryData({
							subset: data.subset,
							project_name: data.project_name,
							zone_name: data.zone_name,
							alternative_name: data.alternative_name,
							location: data.location,
							high_performance_building_index:
								data.high_performance_building_index,
							building_program: data.building_program,
						});
						dispatch(
							updateVisualData({
								x_dim: data.x_dim,
								y_dim: data.y_dim,
								rotation_angle: data.rotation_angle,
								wwr_north: data.wwr_north,
								wwr_south: data.wwr_south,
								shading_type: data.shading_type.toString(),
								reflectance_wall: data.reflectance_wall,
								reflectance_celing: data.reflectance_celing,
								reflectance_floor: data.reflectance_floor,
								vt_glass: data.vt_glass.toString(),
								south_neighbor_distance: data.south_neighbor_distance,
								south_neighbor_height: data.south_neighbor_height,
								north_neighbor_distance: data.north_neighbor_distance,
								north_neighbor_height: data.north_neighbor_height,
							})
						);
					});
			}
		}
	}, [params, dispatch]);

	return (
		<main className=" px-24 py-10" id="estimate__main">
			<header className="mb-10">
				<h1 className="border-blue-550 text-blue-550 flex justify-between border-l-8 pl-3 text-2xl font-bold uppercase leading-8">
					{primaryData.subset === "energy_consumption"
						? "energy demand"
						: primaryData.subset === "visual_comfort"
						? "visual comfort"
						: primaryData.subset === "structure_design"
						? "structure design"
						: "thermal comfort"}
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
				{primaryData.subset === "visual_comfort" && (
					<VisualComfort inputData={visualInputData} primData={primaryData} />
				)}
				{primaryData.subset === "energy_consumption" && (
					<EnergyConsumption inputData={inputData} primData={primaryData} />
				)}
				{primaryData.subset === "structure_design" && <StructureDesign />}
			</main>
		</main>
	);
};

export default Estimate;
