import React from "react";
// import { Link } from "react-router-dom";

const ResultOptions = () => {
	return (
		<section className="flex gap-x-8">
			<div>
				<button className="p-1 py-1.5 w-36 text-sm text-white bg-blue-550 uppercase rounded-md">
					new zone
				</button>
			</div>
			<div>
				<button className="p-1 py-1.5 w-36 text-sm text-white bg-blue-550 uppercase rounded-md">
					new alternative
				</button>
			</div>
			<div>
				<button className="p-1 py-1.5 w-36 text-sm text-white bg-blue-550 uppercase rounded-md">
					compare zones
				</button>
			</div>
		</section>
	);
};

export default ResultOptions;
