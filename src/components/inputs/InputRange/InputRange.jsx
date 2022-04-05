import React, { useEffect } from "react";
import { useField } from "formik";
// components
import MoreInfo from "../../moreInfo/MoreInfo";

const InputRange = ({
	label,
	min,
	max,
	step,
	handleValue,
	moreInfo,
	unit,
	initialVal,
	...props
}) => {
	const [field, meta, helpers] = useField({ ...props, type: "range" });

	useEffect(() => {
		helpers.setValue(initialVal);
	}, [initialVal, helpers]);

	const handleInput = (e) => {
		handleValue(Number(e.target.value));
	};

	return (
		<div className="relative">
			<div className="flex justify-between">
				<label
					className={`${
						meta.touched && meta.error ? "text-red-600" : ""
					} flex items-center gap-x-1`}
				>
					<span>{label}</span>
					<span className="text-sm normal-case text-gray-700">
						{unit && ` (${unit})`}
					</span>
					{moreInfo && <MoreInfo moreInfo={moreInfo} />}
				</label>
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
			{meta.touched && meta.error && (
				<span className="absolute bottom-0 left-1 translate-y-full transform text-xs text-red-600">
					{meta.error}
				</span>
			)}
		</div>
	);
};

export default InputRange;
