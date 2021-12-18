import React from "react";
import { useField } from "formik";
// components
import RadioBtn from "../RadioBtn";

const DropdownRadio = ({ children, ...props }) => {
	const [field] = useField({ ...props, type: "radio" });
	return (
		<div>
			<label>
				<input type="radio" {...field} {...props} />
				{children}
			</label>
		</div>
	);
};

const SelectField = ({ selectOptions }) => {
	return (
		<div>
			{selectOptions.map((option, idx) => {
				return (
					<DropdownRadio name="category" value={option.label} key={idx}>
						{option.label}
					</DropdownRadio>
				);
			})}
		</div>
	);
};

export default SelectField;
