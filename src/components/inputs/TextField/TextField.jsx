import React from "react";
import { useField } from "formik";

const TextField = ({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<input
				{...field}
				{...props}
				className="px-4 py-3 border border-gray-300 rounded-md outline-none"
			/>
		</>
	);
};

export default TextField;
