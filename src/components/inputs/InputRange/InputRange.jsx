import React, { useState } from "react";

const InputRange = ({ min, max, step }) => {
	const initialValue = (Number(max) - Number(min)) / 2 + Number(min);
	const [value, setValue] = useState(initialValue);

	const handleValue = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="mr-8">
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				// value="16"
				defaultValue={value}
				className="w-full"
			/>
			<span>value</span>
		</div>
	);
};

export default InputRange;
