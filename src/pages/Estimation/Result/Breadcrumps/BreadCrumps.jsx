import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = ({ items, name }) => {
	return (
		<div className="relative flex justify-between items-center px-2 py-1.5 w-36 text-sm text-white bg-gray-350 uppercase rounded-md">
			<span>selected item</span>
			<FontAwesomeIcon icon={faCaretDown} />
			<ul className="absolute flex flex-col gap-y-2 min-w-full left-0 -bottom-1 transform translate-y-full p-2 rounded-md bg-gray-350">
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
