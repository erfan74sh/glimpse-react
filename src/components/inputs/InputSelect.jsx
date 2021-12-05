import React, { useState } from "react";
// assets
import CarretDown from "../../assets/icons/caret-down.svg";

const InputSelect = ({ placeHolder, items }) => {
	const [selectedValue, setSelectedValue] = useState("");

	const handleSelectedValue = (e) => {
		setSelectedValue(e.target.dataset.value);
		setShowDropdown(false);
		const nextSibilingEl =
			e.target.parentElement.parentElement.nextElementSibling;
		const parentEl =
			e.target.parentElement.parentElement.parentElement.parentElement;
		const yPixelToScroll = nextSibilingEl.offsetTop;

		parentEl.scroll({
			top: yPixelToScroll,
			left: 0,
			behavior: "smooth",
		});
	};

	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<div className="relative mr-8 px-4 py-3.5 rounded-md shadow-full-sm bg-white">
			<div className="flex items-center justify-between">
				{selectedValue.length !== 0 ? (
					<span>{selectedValue}</span>
				) : (
					<span className="text-gray-500">{placeHolder}</span>
				)}

				<button
					type="button"
					className="flex justify-center w-10 self-stretch items-center"
					onClick={handleShowDropdown}
				>
					<img src={CarretDown} alt="caret-down icon" />
				</button>
			</div>
			{showDropdown && (
				<ul className="w-full absolute flex flex-col gap-y-3 top-0 left-0 px-4 py-3.5 transform translate-y-16 rounded-md shadow-full-sm bg-white text-gray-400 z-10">
					{items.map((item) => (
						<li
							className={`hover:text-black cursor-default ${
								selectedValue === item ? "text-black" : ""
							}`}
							data-value={item}
							onClick={handleSelectedValue}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default InputSelect;
