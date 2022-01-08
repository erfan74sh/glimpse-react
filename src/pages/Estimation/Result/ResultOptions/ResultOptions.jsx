import React, { useState } from "react";
// import { Link } from "react-router-dom";

const ResultOptions = () => {
	const [showNewZone, setShowNewZone] = useState(false);
	return (
		<section className="flex gap-x-8">
			<div className="flex gap-x-4 overflow-hidden">
				<button
					className="p-1 py-1.5 w-36 text-sm text-white bg-blue-550 uppercase rounded-md"
					onClick={() => setShowNewZone(!showNewZone)}
				>
					new zone
				</button>
				<div
					className={` ${
						showNewZone ? "max-w-3xl" : "w-0"
					} flex gap-x-4 items-baseline`}
				>
					<input
						type="text"
						placeholder="enter zone name"
						className="py-1.5 text-sm outline-none px-2 rounded-md border border-gray-300"
					/>
					<span>+</span>
				</div>
			</div>
			<div className="flex gap-x-4">
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
