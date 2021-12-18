import React from "react";
import { useField, useFormikContext } from "formik";
// components

const DropdownRadio = ({ children, ...props }) => {
	const [field] = useField({ ...props, type: "radio" });
	return (
		<label>
			<input type="radio" {...field} {...props} />
			{children}
		</label>
	);
};

const SelectField = ({ selectOptions, name }) => {
	const { values } = useFormikContext();
	return (
		<div>
			<div className="flex justify-between items-center p-2 border border-gray-300 rounded-md outline-none">
				<span>{values[name]}</span>
				<span> {">"} </span>
			</div>
			<ul>
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
