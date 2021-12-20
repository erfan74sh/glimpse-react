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
						<input
							type="radio"
							name="category"
							value="energy"
							className="hidden"
						/>
					</label>
					<label>
						structure
						<input
							type="radio"
							name="category"
							value="structure"
							className="hidden"
						/>
					</label>
					<label>
						fire
						<input
							type="radio"
							name="category"
							value="fire"
							className="hidden"
						/>
					</label>
					<label>
						acoustic
						<input
							type="radio"
							name="category"
							value="acoustic"
							className="hidden"
						/>
					</label>
				</form>
			)}
		</div>
	);
};
const Scale = ({ steps, handleScale }) => {
	return (
		<div>
			{steps.scale !== "" ? (
				<span>{`${steps.scale} > `}</span>
			) : (
				<form onChange={handleScale}>
					<fieldset>scale:</fieldset>
					<label>
						zone
						<input type="radio" name="scale" value="zone" className="hidden" />
					</label>
					<label>
						building
						<input
							type="radio"
							name="scale"
							value="building"
							className="hidden"
						/>
					</label>
					<label>
						city
						<input type="radio" name="scale" value="city" className="hidden" />
					</label>
				</form>
			)}
		</div>
	);
};
const Project = ({ steps, handleProject }) => {
	return (
		<div>
			{steps.project !== "" ? (
				<span>{`${steps.project} > `}</span>
			) : (
				<form onChange={handleProject}>
					<fieldset>project:</fieldset>
					<label>
						project1
						<input
							type="radio"
							name="project"
							value="project1"
							className="hidden"
						/>
					</label>
					<label>
						project2
						<input
							type="radio"
							name="project"
							value="project2"
							className="hidden"
						/>
					</label>
					<label>
						project3
						<input
							type="radio"
							name="project"
							value="project3"
							className="hidden"
						/>
					</label>
				</form>
			)}
		</div>
	);
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
		<div className="flex gap-x-2">
			<Category
				steps={steps}
				handleCategory={(e) => {
					handleStep(e);
				}}
			/>
			{steps.category !== "" && (
				<Scale
					steps={steps}
					handleScale={(e) => {
						handleStep(e);
					}}
				/>
			)}
			{steps.scale !== "" && steps.scale !== "zone" && (
				<Project steps={steps} handleProject={(e) => handleStep(e)} />
			)}
			{(steps.project !== "" || steps.scale === "zone") && (
				<Zone steps={steps} />
			)}
		</div>
	);
};

export default BreadCrumps;
