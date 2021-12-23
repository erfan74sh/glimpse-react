import React from "react";
import { useField } from "formik";

const InputRange = ({ label, min, max, step, ...props }) => {
	const [field] = useField({ ...props, type: "range" });

	return (
		<div className="mr-8">
			<div className="flex justify-between">
				<label>{label}</label>
				<span>{field.value}</span>
			</div>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				{...field}
				{...props}
				className="w-full"
			/>
		</div>
	);
};

export default InputRange;
