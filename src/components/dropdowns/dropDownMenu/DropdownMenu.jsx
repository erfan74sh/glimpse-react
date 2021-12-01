import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
	return (
		<ul className="absolute flex flex-col px-3 text-xl text-gray-500 font-normal bg-white shadow-lg top-full right-0 w-max capitalize rounded-md transform translate-y-9 overflow-hidden transition-all">
			<li className="px-2 py-4">
				<Link to="/">first item</Link>
			</li>
			<li className="px-2 py-4">
				<Link to="/">first item</Link>
			</li>
			<li className="px-2 py-4">
				<Link to="/">first item</Link>
			</li>
			<li className="px-2 py-4">
				<Link to="/">first item</Link>
			</li>
		</ul>
	);
};

export default DropdownMenu;
