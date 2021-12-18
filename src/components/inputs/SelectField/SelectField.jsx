import React from "react";
import { useField } from "formik";
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

const SelectField = ({ selectOptions }) => {
	return (
		<div>
			<div>
				<span>value</span>
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
