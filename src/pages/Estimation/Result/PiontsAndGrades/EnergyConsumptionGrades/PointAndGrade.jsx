import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icon
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const PointAndGrade = ({ alt }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { coolingload, heatingload } = alt.outputs;
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
						<span className="text-blue-550 font-medium">{`Cooing Load >`}</span>
						<span>
							your Alternative can earn{" "}
							<span className="text-blue-550 font-medium">
								{coolingload < 80 ? "EC++" : coolingload < 100 ? "EC+" : "EC"}
							</span>{" "}
							from 19th topic of National Building Regulations of Iran
						</span>
					</li>
					<li className="flex gap-x-1">
						<span className="text-blue-550 font-medium">{`Heating Load >`}</span>
						<span>
							your Alternative can earn{" "}
							<span className="text-blue-550 font-medium">
								{heatingload < 80 ? "EC++" : coolingload < 100 ? "EC+" : "EC"}
							</span>{" "}
							from 19th topic of National Building Regulations of Iran
						</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default PointAndGrade;
