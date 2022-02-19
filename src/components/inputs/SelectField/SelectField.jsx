import React, { useEffect, useRef, useState } from "react";
import { useField, useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import MoreInfo from "../../moreInfo/MoreInfo";
// hooks
import useOutsideClick from "../../../hooks/useOutsideClick";
// icons
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownRadio = ({
	handleValue,
	handleSelected,
	children,
	disable,
	...props
}) => {
	const [field] = useField({ ...props, type: "radio" });
	return (
		<label
			className={`block ${disable ? "cursor-not-allowed" : "cursor-pointer"}`}
		>
			<input
				type="radio"
				{...field}
				{...props}
				className="hidden"
				onClick={(e) => {
					if (!disable) {
						console.log(disable);
						handleValue(e.target.value);
						handleSelected(e);
					}
				}}
				disabled={disable}
			/>
			{children}
		</label>
	);
};

const SelectField = ({
	selectOptions,
	name,
	label,
	placeholder,
	handleValue,
	moreInfo,
	unit,
}) => {
	const ref = useRef(null);

	const [showDropdown, setShowDropdown] = useState(false);

	const { values, errors, touched } = useFormikContext();

	const [selected, setSelected] = useState("");
	useEffect(() => {
		const selectedOption = selectOptions.filter((option) => {
			return option.value
				? option.value === values[name]
				: option.label === values[name];
		})?.[0];
		if (selectedOption) {
			setSelected(selectedOption.label);
		}
	}, [values, name, selectOptions]);

	const handleSelected = (e) => {
		const selectedOption = selectOptions.filter((option) => {
			return option.value
				? option.value === e.target.value
				: option.label === e.target.value;
		})?.[0];
		setSelected(selectedOption.label);
		setShowDropdown(false);
	};

	useOutsideClick(ref, () => {
		setShowDropdown(false);
	});

	return (
		<div className="relative flex flex-col gap-y-1 capitalize">
			<label className="flex items-center gap-x-1">
				<span>{label}</span>
				<span className="text-sm normal-case text-gray-700">
					{unit && ` (${unit})`}
				</span>
				{moreInfo && <MoreInfo moreInfo={moreInfo} />}
			</label>
			<div ref={ref}>
				<div
					onClick={() => {
						setShowDropdown(!showDropdown);
					}}
					className={`flex cursor-pointer items-center justify-between border bg-white p-2 ${
						touched[name] && errors[name] ? "border-red-600" : "border-gray-300"
					}  rounded-md outline-none`}
				>
					{selected ? (
						<span>{selected}</span>
					) : (
						<span className="text-gray-400">{placeholder}</span>
					)}

					<span className="px-3">
						<FontAwesomeIcon
							icon={faCaretDown}
							className={`transform text-gray-600 transition duration-300 ease-in-out  ${
								showDropdown ? "-scale-y-1" : "scale-y-1"
							}`}
						/>
					</span>
				</div>
				{errors[name] && touched[name] && (
					<span className="absolute bottom-0 left-1 translate-y-full transform text-xs text-red-600">
						{errors[name]}
					</span>
				)}
				<ul
					onChange={() => {
						setShowDropdown(false);
					}}
					className={`${
						showDropdown ? "flex" : "hidden"
					} shadow-full-sm absolute -bottom-1 z-10 w-full translate-y-full transform flex-col rounded-md bg-white p-2`}
				>
					{selectOptions.map((option, idx) => {
						return (
							<li
								key={idx}
								className={`rounded py-1 px-2 transition-all  ${
									option.disable
										? "text-gray-400"
										: "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
								}`}
							>
								<DropdownRadio
									name={name}
									value={option.value || option.label}
									disable={option.disable ? true : false}
									handleValue={handleValue}
									handleSelected={handleSelected}
								>
									{option.label}
								</DropdownRadio>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default SelectField;
