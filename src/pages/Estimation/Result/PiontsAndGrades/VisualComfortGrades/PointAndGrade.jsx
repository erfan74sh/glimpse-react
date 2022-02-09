import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icon
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const PointAndGrade = ({ alt }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { svd, sda, udi, ase } = alt.outputs;
	return (
		<>
			<h4
				className=" flex justify-between border-b-2 py-1 font-medium"
				style={{ color: alt.stroke, borderColor: alt.stroke }}
				onClick={() => setShowDropdown(!showDropdown)}
			>
				{alt.name}
				<span className="text-gray-350 px-2">
					<FontAwesomeIcon
						icon={faCaretDown}
						className={`transform transition-all ${
							showDropdown && "rotate-180"
						}`}
					/>
				</span>
			</h4>
			<div
				className={`mt-1  overflow-hidden transition-all duration-300 ${
					showDropdown ? "max-h-screen" : "max-h-0"
				}`}
			>
				<ul className="flex flex-col gap-y-1.5 p-2 text-sm">
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`UDI >`}</span>
						{udi < 75 ? (
							<span>
								your Alternative is{" "}
								<span className="font-medium text-red-500">not acceptable</span>{" "}
								from LEED V.4
							</span>
						) : (
							<span>
								your Alternative can earn{" "}
								<span className="text-blue-550 font-medium">
									{udi < 90 ? "2 points" : "3 points"}{" "}
								</span>
								from LEED V.4
							</span>
						)}
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`sVD >`}</span>
						<span>
							your Alternative is{" "}
							<span
								className={`font-medium ${
									svd <= 10 ? "text-blue-550" : "text-red-500"
								}`}
							>
								{svd <= 10 ? "acceptabe" : "not acceptable"}
							</span>{" "}
							from "LEED" and "19th topic of National Building Regulations of
							Iran"
						</span>
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`ASE >`}</span>
						<span>
							your Alternative is{" "}
							<span
								className={`font-medium ${
									ase <= 10 ? "text-blue-550" : "text-red-500"
								}`}
							>
								{ase <= 10 ? "acceptabe" : "not acceptable"}
							</span>{" "}
							from "LEED" and "19th topic of National Building Regulations of
							Iran"
						</span>
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`sDA >`}</span>
						{sda < 55 ? (
							<span>
								your Alternative is{" "}
								<span className="font-medium text-red-500">not acceptable</span>{" "}
								from 19th topic of National Building Regulations of Iran
							</span>
						) : (
							<span>
								your Alternative can earn{" "}
								<span className="text-blue-550 font-medium">
									{sda < 75 ? "EC" : sda < 85 ? "EC+" : "EC++"}
								</span>{" "}
								from 19th topic of National Building Regulations of Iran and{" "}
								<span className="text-blue-550 font-medium">
									{sda < 75 ? "2 points" : "3 points"}{" "}
								</span>
								from LEED V.4
							</span>
						)}
					</li>
				</ul>
			</div>
		</>
	);
};

export default PointAndGrade;
