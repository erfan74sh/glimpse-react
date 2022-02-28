import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// compoents
import withLoading from "../../../HOC/withLoading";
import Nav from "../../../components/Nav";
import BreadCrumps from "./Breadcrumps/BreadCrumps";
import ResultOptions from "./ResultOptions/ResultOptions";
// style
import "./Result.scss";
import Zone from "./Zone/Zone";
//slices
import { getAllEnergySimulations } from "../../../features/energyConsumptionData/energyConsumptionsDataSlice";

const Result = ({ setLoading }) => {
	const dispatch = useDispatch();

	const { allSimulations } = useSelector(
		(state) => state.energyConsumptionData
	);

	const [searchParams, setSearchParams] = useSearchParams();
	const currentSubset = searchParams.get("subset");
	const currentProjectName = searchParams.get("project_name");
	const currentZoneName = searchParams.get("zone_name");

	const [projectsList, setProjectsList] = useState([]);

	useEffect(() => {
		dispatch(getAllEnergySimulations());
	}, [dispatch]);

	useEffect(() => {
		const list = Array.from(
			allSimulations,
			(simulation) => simulation.project_name
		);
		const uniqueList = Array.from(new Set(list));
		setProjectsList(uniqueList);
	}, [allSimulations]);

	// todo: include redux persist in project and remove this state and it's useEffect
	// todo: and access this data in final component that needs
	const [primData, setPrimData] = useState([]);
	useEffect(() => {
		if (allSimulations[0]) {
			const {
				high_performance_building_index,
				subset,
				building_program,
				project_name,
				zone_name,
				alternative_name,
				location,
			} = allSimulations.filter(
				(item) =>
					item.project_name === currentProjectName &&
					item.zone_name === currentZoneName
			)[0];
			setPrimData({
				high_performance_building_index,
				subset,
				building_program,
				project_name,
				zone_name,
				alternative_name,
				location,
			});
		}
	}, [allSimulations, currentProjectName, currentZoneName]);

	const [zoneList, setZoneList] = useState([]);
	// ! this useEffect is not efficient
	useEffect(() => {
		// ? get all zones in currentProject
		if (allSimulations.length !== 0) {
			const allZones = allSimulations.filter(
				(estimatedData) => estimatedData.project_name === currentProjectName
			);
			const list = Array.from(allZones, (zone) => zone.zone_name);
			const uniqueList = Array.from(new Set(list));
			setZoneList(uniqueList);
		}
	}, [allSimulations, currentProjectName]);

	const [alternativesList, setAlternativesList] = useState([]);
	// ! this useEffect is not efficient
	useEffect(() => {
		// ? get all alternatives in currentZone
		if (allSimulations.length !== 0) {
			const allAlternatives = allSimulations.filter(
				(estimatedData) =>
					estimatedData.project_name === currentProjectName &&
					estimatedData.zone_name === currentZoneName
			);
			const list = Array.from(
				allAlternatives,
				(alternative) => alternative.alternative_name
			);
			setAlternativesList(list);
			setLoading(false);
		}
	}, [allSimulations, currentZoneName, currentProjectName, setLoading]);

	const handleSearchParams = (paramToChange, event) => {
		if (paramToChange === "project_name") {
			const zonesInProject = allSimulations.filter(
				(estimatedData) => estimatedData.project_name === event.target.value
			);
			setSearchParams({
				subset: currentSubset,
				project_name: event.target.value,
				zone_name: zonesInProject[0].zone_name,
			});
		} else {
			setSearchParams({
				subset: currentSubset,
				project_name: currentProjectName,
				zone_name: event.target.value,
			});
		}
	};

	return (
		<>
			<Nav />
			<main className=" px-24 py-16" id="result__main">
				<header className="mb-10">
					<h1 className="border-blue-550 text-blue-550 border-l-8 pl-3 text-3xl font-bold uppercase leading-8">
						result
					</h1>
					<nav className="mt-14">
						<BreadCrumps
							projectsList={projectsList}
							zoneList={zoneList}
							alternativesList={alternativesList}
							currentProjectName={currentProjectName}
							currentZoneName={currentZoneName}
							handleSearchParams={handleSearchParams}
						/>
					</nav>
					<ResultOptions primData={primData} />
				</header>
				<main className="">
					<Zone projects={allSimulations} />
				</main>
			</main>
		</>
	);
};

export default withLoading(Result, "loading your data...");
