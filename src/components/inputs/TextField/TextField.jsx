import React from "react";
import { useField } from "formik";

const TextField = ({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<input {...field} {...props} />
		</>
	);
};

export default TextField;
