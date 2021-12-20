import React, { useState, useEffect } from "react";

const Category = ({ steps }) => {
	return (
		<div>
			{steps.category !== "" ? (
				<span>{`${steps.category} > `}</span>
			) : (
				<form>
					<fieldset>category:</fieldset>
					<label>
						energy
						<input type="radio" name="category" />
					</label>
					<label>
						structure
						<input type="radio" name="category" />
					</label>
					<label>
						fire
						<input type="radio" name="category" />
					</label>
					<label>
						acoustic
						<input type="radio" name="category" />
					</label>
				</form>
			)}
		</div>
	);
};
const Scale = () => {
	return <div>scale</div>;
};
const Project = () => {
	return <div>project</div>;
};
const Zone = () => {
	return <div>zone</div>;
};

const BreadCrumps = () => {
	const [steps, setSteps] = useState({
		category: "",
		scale: "",
		project: "",
		zone: "",
	});
	useEffect(() => {
		// todo: fetch data and update state here if user has filled some inputs before
	}, []);

	return (
		<div>
			<Category steps={steps} />
			<Scale steps={steps} />
			<Project steps={steps} />
			<Zone steps={steps} />
		</div>
	);
};

export default BreadCrumps;
