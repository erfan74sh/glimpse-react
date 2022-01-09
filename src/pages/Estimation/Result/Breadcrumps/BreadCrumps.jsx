import React from "react";

const DropdownMenu = ({ items, name }) => {
	return (
		<div>
			<ul>
				<li>
					<label>
						<input type="radio" name={name} />
						project 1
					</label>
				</li>
				<li>
					<label>
						<input type="radio" name={name} />
						project 1
					</label>
				</li>
				<li>
					<label>
						<input type="radio" name={name} />
						project 1
					</label>
				</li>
			</ul>
		</div>
	);
};

const BreadCrumps = () => {
	const projectItems = ["project 1", "project 2", "project 3"];
	return (
		<div>
			<DropdownMenu items={projectItems} name="projects" />
			<DropdownMenu />
		</div>
	);
};

export default BreadCrumps;
