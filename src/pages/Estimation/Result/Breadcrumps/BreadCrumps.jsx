import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// hooks
import useOutsideClick from "../../../../hooks/useOutsideClick";

const DropdownMenu = ({ items, name, handleSearchParams, selected }) => {
	const selectRef = useRef(null);
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

	useOutsideClick(selectRef, () => setShowMenu(false));

	return (
		<div
			className={`bg-gray-350 relative w-full rounded-md p-2 text-sm font-medium text-white md:w-36 ${
				showMenu && "ring-1 ring-gray-500"
			}`}
			ref={selectRef}
		>
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
				className={`absolute min-w-full flex-col gap-y-1 ${
					showMenu ? "flex" : "hidden"
				} bg-gray-350 left-0 -bottom-1 z-10 translate-y-full transform rounded-md p-2`}
			>
				{items &&
					items.map((item, idx) => {
						return (
							<li key={idx}>
								<label
									className={`block cursor-pointer rounded p-1 transition-all hover:bg-gray-400 ${
										selectedItem === item && "text-blue-550"
									}`}
								>
									<input
										type="radio"
										name={name}
										value={item}
										className="hidden"
										onClick={(e) => {
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

const BreadCrumps = ({
	projectsList,
	zoneList,
	currentProjectName,
	currentZoneName,
	handleSearchParams,
}) => {
	return (
		<div className="flex items-center justify-between gap-x-5  md:justify-start">
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
		</div>
	);
};

export default BreadCrumps;
