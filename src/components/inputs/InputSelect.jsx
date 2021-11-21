import React, { useState } from "react";
// assets
import CarretDown from "../../assets/icons/caret-down.svg";

const InputSelect = ({ placeHolder, items }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<div className="relative mr-8 px-4 py-3.5 rounded-md shadow-xl bg-white">
			<div className="flex items-center justify-between">
				<span>X- Dimention</span>
				<button
					type="button"
					className="flex justify-center w-10 self-stretch items-center"
					onClick={handleShowDropdown}
				>
					<img src={CarretDown} alt="caret-down icon" />
				</button>
			</div>
			{showDropdown && (
				<ul className="w-full absolute flex flex-col gap-y-3 top-0 left-0 px-4 py-3.5 transform translate-y-16 rounded-md shadow-md bg-white text-gray-400 z-10">
					<li className="hover:text-black">item 1</li>
					<li className="hover:text-black">item 2</li>
					<li className="hover:text-black">item 3</li>
					<li className="hover:text-black">item 4</li>
				</ul>
			)}
		</div>
	);
};

export default InputSelect;
