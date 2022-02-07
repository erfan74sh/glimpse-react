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
	const [params] = useSearchParams();
	const currentSubset = params.get("subset");
	const currentProjectName = params.get("project_name");
	const currentZoneName = params.get("zone_name");
	const [alternatives, setAlternatives] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await axios.get(
				`/daylights/project_name/${currentProjectName}`,
				{ headers: authHeader() }
			);
			const filteredData = data.data.filter((alt) => {
				return (
					alt.subset === currentSubset && alt.zone_name === currentZoneName
				);
			});
			setAlternatives(filteredData);
			console.log("new", filteredData);
		};
		fetchData();
	}, [currentProjectName, currentSubset, currentZoneName]);
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
