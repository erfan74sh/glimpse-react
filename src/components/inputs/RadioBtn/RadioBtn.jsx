import React from "react";
import { useField } from "formik";

const RadioBtn = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "radio" });
	return (
		<label>
			<input type="radio" {...props} />
			{children}
		</label>
	);
};

export default RadioBtn;
