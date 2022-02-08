import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
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
	const [params, setParams] = useSearchParams();
	const currentSubset = params.get("subset");
	const currentProjectName = params.get("project_name");
	const currentZoneName = params.get("zone_name");
	const [projectsInSubset, setProjectInsSubset] = useState([]);
	useEffect(() => {
		const getProjects = async () => {
			const allProjects = await axios.get("/daylights/", {
				headers: authHeader(),
			});
			const filteredProjects = allProjects.data.filter(
				(project) => project.subset === currentSubset
			);
			setProjectInsSubset(filteredProjects);
		};
		getProjects();
	}, []);
	const [alternatives, setAlternatives] = useState([]);
	// useEffect(() => {
	// 		const filteredData = projectsInSubset.filter((alt) => {
	// 			return (
	// 				alt.subset === currentSubset && alt.zone_name === currentZoneName
	// 			);
	// 		});
	// 		setAlternatives(filteredData);
	// 	}
	// , [currentProjectName, currentSubset, currentZoneName]);
	return (
		<>
			<Nav />
			<main className=" px-24 py-16" id="result__main">
				<header className="mb-10">
					<h1 className="border-blue-550 text-blue-550 border-l-8 pl-3 text-3xl font-bold uppercase leading-8">
						result
					</h1>
					<nav className="mt-14">
						<BreadCrumps />
					</nav>
					<ResultOptions />
					<button onClick={() => setParams({ name: "er" })}>click</button>
				</header>
				<main className="">
					<Zone />
					{/* <Outlet /> */}
				</main>
			</main>
		</>
	);
};

export default Result;
