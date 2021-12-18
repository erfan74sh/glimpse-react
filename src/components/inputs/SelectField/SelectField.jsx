import React from "react";
import { useField } from "formik";
// components
import RadioBtn from "../RadioBtn";

const SelectField = ({ selectOptions }) => {
	return (
		<div>
			{selectOptions.map((option, idx) => {
				return (
					<RadioBtn name="category" value={option.label} key={idx}>
						{option.label}
					</RadioBtn>
				);
			})}
		</div>
	);
};

export default SelectField;
