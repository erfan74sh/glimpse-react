import React from "react";
import { useField } from "formik";

const RadioBtn = ({ children, ...props }) => {
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

export default RadioBtn;
