import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icon
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const PointAndGrade = ({ alt }) => {
	const [showDropdown, setShowDropdown] = useState(true);
	const { svd, sda, udi, ase, mda } = alt.outputs;
	return (
		<>
			<h4
				className=" flex justify-between border-b-2 py-1 font-medium"
				style={{ color: alt.stroke }}
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
								your alternative is{" "}
								<span className="font-medium text-red-500">not acceptable</span>{" "}
								in accordance with "LEED" V.4
							</span>
						) : (
							<span>
								your alternative can earn{" "}
								<span className="text-blue-550 font-medium">
									{udi < 90 ? "2 points" : "3 points"}{" "}
								</span>
								from "LEED" V.4
							</span>
						)}
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`mDA >`}</span>
						<span>
							your alternative is{" "}
							<span
								className={`font-medium ${
									mda >= 50 ? "text-blue-550" : "text-red-500"
								}`}
							>
								{mda >= 50 ? "acceptabe." : "not acceptable."}
							</span>{" "}
						</span>
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`sVD >`}</span>
						<span>
							your alternative is{" "}
							<span
								className={`font-medium ${
									svd <= 10 ? "text-blue-550" : "text-red-500"
								}`}
							>
								{svd <= 10 ? "acceptabe." : "not acceptable."}
							</span>{" "}
						</span>
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`ASE >`}</span>
						<span>
							your alternative is{" "}
							<span
								className={`font-medium ${
									ase <= 10 ? "text-blue-550" : "text-red-500"
								}`}
							>
								{ase <= 10 ? "acceptabe" : "not acceptable"}
							</span>{" "}
							in accordance with "LEED" V.4
						</span>
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`sDA >`}</span>
						{sda < 55 ? (
							<span>
								your alternative is{" "}
								<span className="font-medium text-red-500">not acceptable</span>{" "}
								in accordance with "19th topic of National Building Regulations
								of Iran"
							</span>
						) : (
							<span>
								your alternative can earn{" "}
								<span className="text-blue-550 font-medium">
									{sda < 75 ? "EC" : sda < 85 ? "EC+" : "EC++"}
								</span>{" "}
								rank from "19th topic of National Building Regulations of Iran"
								and{" "}
								<span className="text-blue-550 font-medium">
									{sda < 75 ? "2 points" : "3 points"}{" "}
								</span>
								from "LEED" V.4
							</span>
						)}
					</li>
				</ul>
			</div>
		</>
	);
};

export default PointAndGrade;
