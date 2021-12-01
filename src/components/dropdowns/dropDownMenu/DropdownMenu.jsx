import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ showDropdown }) => {
	const items = [
		{ title: "Energy and Thermal Comfort", path: "/" },
		{ title: "Daylight", path: "/" },
		{ title: "Structure", path: "/" },
		{ title: "Fire in building", path: "/" },
		{ title: "Acoustic", path: "/" },
	];

	return (
		<ul
			className={`${
				showDropdown ? "max-h-screen" : "max-h-0"
			} absolute flex flex-col px-3 text-xl text-gray-500 font-normal bg-white shadow-lg top-full right-0 w-max capitalize rounded-md transform translate-y-9 overflow-hidden transition-all z-10 divide-y-2 divide-gray-300`}
		>
			{items.map((item, idx) => {
				return (
					<li className="px-2 py-4 " key={idx}>
						<Link to={item.path}>{item.title}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default DropdownMenu;
