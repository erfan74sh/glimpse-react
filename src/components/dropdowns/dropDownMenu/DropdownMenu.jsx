import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ showDropdown }) => {
	const items = [
		{
			title: "Energy, Daylight and Thermal Comfort",
			path: "/estimation/result",
		},
		{ title: "Structure", path: "/estimation/result" },
		{ title: "Fire in building", path: "/estimation/result" },
		{ title: "Acoustic", path: "/estimation/result" },
	];

	return (
		<ul
			className={`${
				showDropdown ? "max-h-screen" : "max-h-0"
			} absolute flex flex-col px-3 text-lg text-gray-500 font-normal bg-white shadow-full-sm top-full right-0 w-max capitalize rounded-md transform translate-y-9 overflow-hidden transition-all z-10 divide-y-2 divide-gray-300`}
		>
			{items.map((item, idx) => {
				return (
					<li className="px-2 pr-5 py-4" key={idx}>
						<Link to={item.path}>{item.title}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default DropdownMenu;
