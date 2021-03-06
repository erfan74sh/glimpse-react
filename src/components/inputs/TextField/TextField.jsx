import React from "react";
import { useField } from "formik";

const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="relative flex flex-col gap-y-1 capitalize">
			{label && <label>{label}</label>}
			<input
				{...field}
				{...props}
				className={`w-full border p-2 focus:ring-1 ${
					meta.touched && meta.error
						? " border-red-600 ring-red-400"
						: "border-gray-300"
				} rounded-md outline-none`}
			/>
			{meta.touched && meta.error ? (
				<span className="absolute bottom-0 left-1 translate-y-full transform text-xs text-red-600">
					{meta.error}
				</span>
			) : null}
		</div>
	);
};

export default TextField;
