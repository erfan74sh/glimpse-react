import React from "react";
import { useField } from "formik";

const RadioBtn = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "radio" });
	return (
		<div>
			<label>
				<input type="radio" {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? <span>{meta.error}</span> : null}
		</div>
	);
};

export default RadioBtn;
