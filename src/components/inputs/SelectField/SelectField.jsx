import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownRadio = ({ children, ...props }) => {
	const [field] = useField({ ...props, type: "radio" });
	return (
		<label className="block cursor-pointer">
			<input type="radio" {...field} {...props} className="hidden" />
			{children}
		</label>
	);
};

const SelectField = ({ selectOptions, name, label }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { values } = useFormikContext();

	return (
		<div className="relative flex flex-col gap-y-1 capitalize">
			<label>{label}</label>
			<div
				onClick={() => setShowDropdown(!showDropdown)}
				className="flex justify-between items-center p-2 border border-gray-300 rounded-md outline-none"
			>
				<span>{values[name]}</span>
				<span className="px-3">
					<FontAwesomeIcon
						icon={faCaretDown}
						className={`transform transition duration-300 ease-in-out text-gray-600  ${
							showDropdown ? "-scale-y-1" : "scale-y-1"
						}`}
					/>
				</span>
			</div>
			<ul
				onChange={() => setShowDropdown(false)}
				className={`${
					showDropdown ? "flex" : "hidden"
				} flex-col absolute -bottom-1 transform translate-y-full w-full p-2 px-3 z-10 rounded-md bg-white shadow-full-sm`}
			>
				{selectOptions.map((option, idx) => {
					return (
						<li
							key={idx}
							className={`py-1 transition text-gray-500 hover:text-gray-900`}
						>
							<DropdownRadio name={name} value={option.label}>
								{option.label}
							</DropdownRadio>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SelectField;
