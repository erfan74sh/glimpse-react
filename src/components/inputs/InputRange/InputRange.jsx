import React from "react";
import { useField } from "formik";

const InputRange = ({ label, min, max, step, handleValue, ...props }) => {
	const [field] = useField({ ...props, type: "range" });

	const handleInput = (e) => {
		handleValue(Number(e.target.value));
	};

	return (
		<div className="">
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
				onInput={(e) => {
					handleInput(e);
				}}
			/>
		</div>
	);
};

export default InputRange;
