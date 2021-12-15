import React from "react";
import { useField } from "formik";

const TextField = ({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="relative">
			<input
				{...field}
				{...props}
				className="px-4 py-3 border border-gray-300 rounded-md outline-none"
			/>
			{meta.touched && meta.error ? (
				<span className="absolute bottom-0 left-0 transform translate-y-full text-xs text-red-600">
					{meta.error}
				</span>
			) : null}
		</div>
	);
};

export default TextField;
