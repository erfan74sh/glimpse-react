import React from "react";
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
	...props
}) => {
	const [field, meta] = useField({ ...props, type: "range" });

	const handleInput = (e) => {
		handleValue(Number(e.target.value));
	};

	return (
		<div className="relative">
			<div className="flex justify-between">
				<label
					className={`${meta.touched && meta.error ? "text-red-600" : ""}`}
				>
					{label}
					{moreInfo && (
						<>
							<span>!</span>
							<span>
								<MoreInfo moreInfo={moreInfo} />
							</span>
						</>
					)}
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
				<span className="absolute bottom-0 left-1 transform translate-y-full text-xs text-red-600">
					{meta.error}
				</span>
			)}
		</div>
	);
};

export default InputRange;
