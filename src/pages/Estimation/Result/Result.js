import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { axios } from "../../../services/axios";
import authHeader from "../../../services/auth-header";
// compoents
import Nav from "../../../components/Nav";
import BreadCrumps from "./Breadcrumps/BreadCrumps";
import ResultOptions from "./ResultOptions/ResultOptions";

// style
import "./Result.scss";
import Zone from "./Zone/Zone";

const Result = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentSubset = searchParams.get("subset");
	const currentProjectName = searchParams.get("project_name");
	const currentZoneName = searchParams.get("zone_name");

	const [projectsInSubset, setProjectsInSubset] = useState([]);
	const [projectsList, setProjectsList] = useState([]);
	useEffect(() => {
		const getProjects = async () => {
			const visualComfortData = await axios.get("/daylights/", {
				headers: authHeader(),
			});
			//? get all projects in currentSubset
			const allProjects = await visualComfortData.data;
			const list = Array.from(allProjects, (project) => project.project_name);
			const uniqueList = Array.from(new Set(list));
			setProjectsInSubset(allProjects);
			setProjectsList(uniqueList);
		};
		getProjects();
	}, []);

	const [zoneList, setZoneList] = useState([]);
	// ! this useEffect is not efficient
	useEffect(() => {
		// ? get all zones in currentProject
		if (projectsInSubset.length !== 0) {
			const allZones = projectsInSubset.filter(
				(estimatedData) => estimatedData.project_name === currentProjectName
			);
			const list = Array.from(allZones, (zone) => zone.zone_name);
			const uniqueList = Array.from(new Set(list));
			setZoneList(uniqueList);
		}
	}, [projectsInSubset, currentProjectName]);

	const [alternativesList, setAlternativesList] = useState([]);
	// ! this useEffect is not efficient
	useEffect(() => {
		// ? get all alternatives in currentZone
		if (projectsInSubset.length !== 0) {
			const allAlternatives = projectsInSubset.filter(
				(estimatedData) =>
					estimatedData.project_name === currentProjectName &&
					estimatedData.zone_name === currentZoneName
			);
			const list = Array.from(
				allAlternatives,
				(alternative) => alternative.alternative_name
			);
			setAlternativesList(list);
		}
	}, [projectsInSubset, currentZoneName, currentProjectName]);

	const handleSearchParams = (paramToChange, event) => {
		if (paramToChange === "project_name") {
			const zonesInProject = projectsInSubset.filter(
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
					<ResultOptions />
					<button onClick={() => setSearchParams({ zone_name: "somth" })}>
						click
					</button>
				</header>
				<main className="">
					<Zone projects={projectsInSubset} />
					{/* <Outlet /> */}
				</main>
			</main>
		</>
	);
};

export default Result;
