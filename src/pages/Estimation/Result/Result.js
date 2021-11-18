import React from "react";
// compoents
import Chart from "./Chart";
// style
import "./Result.scss";

const Result = () => {
	return (
		<main className=" px-24 py-16" id="result__main">
			<header className="mb-10">
				<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
					result
				</h1>
			</header>
			<main className="">
				<section className="flex justify-center items-center max-h-152 overflow-hidden">
					<Chart />
				</section>
				<section className="flex flex-col px-52 mt-20">
					<h2 className=" mb-9 mx-8 pb-4 border-b text-xl font-normal uppercase border-gray-500">
						geometry
					</h2>
				</section>
			</main>
		</main>
	);
};

export default Result;
