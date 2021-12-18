import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
// components

const DropdownRadio = ({ children, ...props }) => {
	const [field] = useField({ ...props, type: "radio" });
	return (
		<label className="block cursor-pointer">
			<input type="radio" {...field} {...props} className="hidden" />
			{children}
		</label>
	);
};

const SelectField = ({ selectOptions, name }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { values } = useFormikContext();

	return (
		<div className="relative">
			<div
				onClick={() => setShowDropdown(!showDropdown)}
				className="flex justify-between items-center p-2 border border-gray-300 rounded-md outline-none"
			>
				<span>{values[name]}</span>
				<span> {">"} </span>
			</div>
			<ul
				onChange={() => setShowDropdown(false)}
				className={`${
					showDropdown ? "flex" : "hidden"
				} flex-col absolute -bottom-1 transform translate-y-full w-full p-2 z-10 rounded-md bg-red-350`}
			>
				{selectOptions.map((option, idx) => {
					return (
						<li key={idx}>
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
