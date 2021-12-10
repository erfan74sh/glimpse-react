import React from "react";

const InputRange = ({ min, max, step }) => {
	return (
		<div className="mr-8">
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				// value="16"
				defaultValue={(Number(max) - Number(min)) / 2 + Number(min)}
				className="w-full"
			/>
			<span>value</span>
		</div>
	);
};

export default InputRange;
