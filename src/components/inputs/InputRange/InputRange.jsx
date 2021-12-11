import React, { useState } from "react";

const InputRange = ({ label, min, max, step, handleValue }) => {
	// const initialValue = Number(min);
	const [value, setValue] = useState(min);

	const handleChangeValue = (e) => {
		setValue(e.target.value);
		handleValue(e);
	};

	return (
		<div className="mr-8">
			<div className="flex justify-between">
				<label>{label}</label>
				<span>{value}</span>
			</div>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				// value="16"
				defaultValue={min}
				className="w-full"
				onInput={handleChangeValue}
			/>
		</div>
	);
};

export default InputRange;
