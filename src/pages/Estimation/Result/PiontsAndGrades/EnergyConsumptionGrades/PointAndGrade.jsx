import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icon
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const PointAndGrade = ({ alt }) => {
	const [showDropdown, setShowDropdown] = useState(true);
	const { primary_energy } = alt.outputs;
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
						<span className="text-blue-550 font-medium">{`Primary Energy >`}</span>
						{primary_energy > 160 ? (
							<span>
								Your alternative is{" "}
								<span className="font-medium text-red-500">not acceptable</span>{" "}
							</span>
						) : (
							<span>
								Your alternative can earn{" "}
								<span className="text-blue-550 font-medium">
									{primary_energy >= 100
										? "EC"
										: primary_energy >= 80
										? "EC+"
										: primary_energy >= 35
										? "Ec++"
										: "ECnZ"}
								</span>{" "}
								rank from "19th topic of National Building Regulations of Iran".
							</span>
						)}
					</li>
					{/* <li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`Primary Energy >`}</span>
						<span>
							your Alternative can earn{" "}
							<span className="text-blue-550 font-medium">
								{coolingload < 80 ? "EC++" : coolingload < 100 ? "EC+" : "EC"}
							</span>{" "}
							rank from "19th topic of National Building Regulations of Iran".
						</span>
					</li> */}
				</ul>
			</div>
		</>
	);
};

export default PointAndGrade;
