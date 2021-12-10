import React, { useState } from "react";

const InputRange = ({ label, min, max, step, handleValue }) => {
	const initialValue = (Number(max) - Number(min)) / 2 + Number(min);
	const [value, setValue] = useState(initialValue);

	const handleChangeValue = (e) => {
		setValue(e.target.value);
		handleValue(e);
	};

	return (
		<div className="mr-8">
			<label>{label}</label>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				// value="16"
				defaultValue={value}
				className="w-full"
				onInput={handleChangeValue}
			/>
			<span>{value}</span>
		</div>
	);
};

export default InputRange;
