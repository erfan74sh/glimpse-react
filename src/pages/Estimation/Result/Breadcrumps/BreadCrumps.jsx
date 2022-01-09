import React from "react";

const DropdownMenu = ({ items, name }) => {
	return (
		<div>
			<ul>
				{items.map((item, idx) => {
					return (
						<li key={idx}>
							<label>
								<input type="radio" name={name} />
								{item}
							</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const BreadCrumps = () => {
	const projectItems = ["project 1", "project 2", "project 3"];
	return (
		<div>
			<DropdownMenu items={projectItems} name="projects" />
			{/* <DropdownMenu /> */}
		</div>
	);
};

export default BreadCrumps;
