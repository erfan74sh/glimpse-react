import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ResultOptions = () => {
	const [showNewZone, setShowNewZone] = useState(false);
	const [showNewAlter, setShowNewAlter] = useState(false);
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
						showNewZone ? "max-w-3xl" : ""
					} max-w-0 flex gap-x-4 items-baseline transition-all duration-200`}
				>
					<input
						type="text"
						placeholder="enter zone name"
						className="py-1.5 text-sm outline-none px-2 rounded-md border border-gray-300"
					/>
					<span>
						<FontAwesomeIcon icon={faPlusCircle} />
					</span>
				</div>
			</div>
			<div className="flex gap-x-4 overflow-hidden">
				<button
					className="p-1 py-1.5 w-36 text-sm text-white bg-blue-550 uppercase rounded-md"
					onClick={() => setShowNewAlter(!showNewAlter)}
				>
					new alternative
				</button>
				<div
					className={` ${
						showNewAlter ? "max-w-3xl" : ""
					} max-w-0 flex gap-x-4 items-baseline transition-all duration-200`}
				>
					<input
						type="text"
						placeholder="enter zone name"
						className="py-1.5 text-sm outline-none px-2 rounded-md border border-gray-300"
					/>
					<span>+</span>
				</div>
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
