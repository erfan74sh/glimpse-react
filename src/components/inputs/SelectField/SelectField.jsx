import React from "react";
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
	const { values } = useFormikContext();
	return (
		<div className="relative">
			<div className="flex justify-between items-center p-2 border border-gray-300 rounded-md outline-none">
				<span>{values[name]}</span>
				<span> {">"} </span>
			</div>
			<ul className="flex flex-col absolute -bottom-1 transform translate-y-full w-full p-2 z-10 rounded-md bg-red-350">
				{selectOptions.map((option, idx) => {
					return (
						<li key={idx}>
							<DropdownRadio name="category" value={option.label}>
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
