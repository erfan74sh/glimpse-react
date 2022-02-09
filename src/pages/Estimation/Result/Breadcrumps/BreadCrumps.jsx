import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ items, name, handleSearchParams, selected }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedItem, setSelectedItem] = useState(selected || "");
	useEffect(() => {
		setSelectedItem(selected);
	}, [selected]);

	const handleSelectItem = (e) => {
		setSelectedItem(e.target.value);
		handleSearchParams(name, e);
		setShowMenu(false);
	};

	return (
		<div className="bg-gray-350 relative w-36 rounded-md px-2 py-1.5 text-sm font-medium text-white">
			<div
				className="flex cursor-pointer items-center justify-between"
				onClick={() => setShowMenu(!showMenu)}
			>
				<span className={`${selectedItem ? "" : "capitalize text-gray-100"}`}>
					{selectedItem ? selectedItem : `choose ${name}`}
				</span>
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			<ul
				className={`absolute min-w-full flex-col gap-y-2 ${
					showMenu ? "flex" : "hidden"
				} bg-gray-350 left-0 -bottom-1 z-10 translate-y-full transform rounded-md p-2`}
			>
				{items &&
					items.map((item, idx) => {
						return (
							<li key={idx}>
								<label className="hover:text-blue-550 block cursor-pointer transition-all">
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
		<ul className="flex items-center gap-x-1 text-gray-500">
			{items &&
				items.map((alternative, idx) => {
					return (
						<li key={idx}>
							{idx !== 0 ? <span>{`/ `}</span> : <span>{`: `}</span>}
							<NavLink
								to={`${idx}`}
								className={({ isActive }) =>
									isActive ? "text-blue-550" : "text-gray-500"
								}
							>
								{alternative}
							</NavLink>
						</li>
					);
				})}
		</ul>
	);
};

const BreadCrumps = ({
	projectsList,
	zoneList,
	alternativeList,
	currentProjectName,
	currentZoneName,
	handleSearchParams,
}) => {
	return (
		<div className="flex items-center gap-x-5">
			<DropdownMenu
				items={projectsList}
				name="project_name"
				selected={currentProjectName}
				handleSearchParams={handleSearchParams}
			/>
			<span>{`>`}</span>
			<DropdownMenu
				items={zoneList}
				name="zone_name"
				selected={currentZoneName}
				handleSearchParams={handleSearchParams}
			/>
			<AlternativeList items={alternativeList} />
		</div>
	);
};

export default BreadCrumps;
