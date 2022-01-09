import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = ({ items, name }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedItem, setSelectedItem] = useState("");
	const handleSelectItem = (e) => {
		setSelectedItem(e.target.value);
		setShowMenu(false);
	};
	return (
		<div className="relative px-2 py-1.5 w-36 text-sm text-white bg-gray-350 uppercase rounded-md">
			<div
				className="flex justify-between items-center"
				onClick={() => setShowMenu(!showMenu)}
			>
				<span>{selectedItem ? selectedItem : "choose project"}</span>
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			<ul
				className={`absolute flex-col gap-y-2 min-w-full ${
					showMenu ? "flex" : "hidden"
				} left-0 -bottom-1 transform translate-y-full p-2 rounded-md bg-gray-350 z-10`}
			>
				{items.map((item, idx) => {
					return (
						<li key={idx}>
							<label>
								<input
									type="radio"
									name={name}
									value={item}
									onChange={(e) => {
										handleSelectItem(e);
									}}
								/>
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
