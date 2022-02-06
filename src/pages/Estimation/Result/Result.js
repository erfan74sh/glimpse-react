import React from "react";
import { Outlet } from "react-router-dom";

// compoents
import Nav from "../../../components/Nav";
import BreadCrumps from "./Breadcrumps/BreadCrumps";
import ResultOptions from "./ResultOptions/ResultOptions";

// style
import "./Result.scss";

const Result = () => {
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
					<Outlet />
				</main>
			</main>
		</>
	);
};

export default Result;
