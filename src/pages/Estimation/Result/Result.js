import React from "react";
import { Outlet } from "react-router-dom";

// compoents
import BreadCrumps from "./Breadcrumps/BreadCrumps";
import ResultOptions from "./ResultOptions/ResultOptions";

// style
import "./Result.scss";

const Result = () => {
	return (
		<main className=" px-24 py-16" id="result__main">
			<header className="mb-10">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					result
				</h1>
				<nav>
					<BreadCrumps />
				</nav>
				<ResultOptions />
			</header>
			<main className="">
				<Outlet />
			</main>
		</main>
	);
};

export default Result;
