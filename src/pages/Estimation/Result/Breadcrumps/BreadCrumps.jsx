import React, { useState, useEffect } from "react";

const Category = ({ steps, handleCategory }) => {
	return (
		<div>
			{steps.category !== "" ? (
				<span>{`${steps.category} > `}</span>
			) : (
				<form onChange={handleCategory}>
					<fieldset>category:</fieldset>
					<label>
						energy
						<input type="radio" name="category" value="energy" />
					</label>
					<label>
						structure
						<input type="radio" name="category" value="structure" />
					</label>
					<label>
						fire
						<input type="radio" name="category" value="fire" />
					</label>
					<label>
						acoustic
						<input type="radio" name="category" value="acoustic" />
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

	const handleStep = (e) => {
		setSteps({ ...steps, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		// todo: fetch data and update state here if user has filled some inputs before
	}, []);

	return (
		<div>
			<Category
				steps={steps}
				handleCategory={(e) => {
					handleStep(e);
				}}
			/>
			<Scale steps={steps} />
			<Project steps={steps} />
			<Zone steps={steps} />
		</div>
	);
};

export default BreadCrumps;
