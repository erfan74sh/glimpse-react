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
		<div className="relative px-2 py-1.5 w-36 text-sm font-medium text-white bg-gray-350 uppercase rounded-md">
			<div
				className="flex justify-between items-center cursor-pointer"
				onClick={() => setShowMenu(!showMenu)}
			>
				<span>{selectedItem ? selectedItem : `choose ${name}`}</span>
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
							<label className="block cursor-pointer transition-all hover:text-blue-550">
								<input
									type="radio"
									name={name}
									value={item}
									className="hidden"
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

const AlternativeList = ({ items }) => {
	return (
		<ul className="flex gap-x-1 items-center text-blue-550">
			{items.map((alternative, idx) => {
				return (
					<li key={idx}>
						{idx !== 0 ? <span>{`/ `}</span> : <span>{`: `}</span>}
						<label className="cursor-pointer">
							{alternative}
							<input
								type="radio"
								name="alternative"
								className="hidden"
								value={alternative}
								onChange={(e) => console.log(e.target.value)}
							/>
						</label>
					</li>
				);
			})}
		</ul>
	);
};

const BreadCrumps = () => {
	const projectItems = ["project 1", "project 2", "project 3"];
	const zoneItems = ["zone 1", "zone 2", "zone 3", "zone 4"];
	const alternativeItems = ["alter 1", "alter 2", "alter 3"];
	return (
		<div className="flex gap-x-5 items-center">
			<DropdownMenu items={projectItems} name="project" />
			<span>{`>`}</span>
			<DropdownMenu items={zoneItems} name="zone" />
			<AlternativeList items={alternativeItems} />
		</div>
	);
};

export default BreadCrumps;
