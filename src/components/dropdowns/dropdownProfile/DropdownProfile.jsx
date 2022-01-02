import React from "react";
import { Link } from "react-router-dom";
//
// assets
import ProfileIcon from "../../../assets/icons/Profile.svg";
import ChargeIcon from "../../../assets/icons/charge.svg";
import SignOutIcon from "../../../assets/icons/sign-out.svg";
import ProjectHistory from "../../../assets/icons/project-history.png";

const DropdownProfile = ({ showDropdown }) => {
	return (
		<ul
			className={`${
				showDropdown ? "max-h-screen" : "max-h-0"
			} absolute flex flex-col px-3 text-gray-500 font-normal bg-white shadow-full-sm top-full right-0 w-max divide-y-2 capitalize rounded-md transform translate-y-9 overflow-hidden z-10 transition-all`}
		>
			<li>
				<Link to="/profile" className="flex gap-x-4 px-2 py-4">
					<img src={ProfileIcon} alt="profile icon" className="w-6 h-auto" />
					<span>profile</span>
				</Link>
			</li>
			<li>
				<Link to="#" className="flex gap-x-4 px-2 py-4">
					<img src={ProjectHistory} alt="profile icon" className="w-6 h-auto" />
					<span>projects history</span>
				</Link>
			</li>
			<li>
				<Link to="#" className="flex gap-x-4 px-2 py-4">
					<img src={ChargeIcon} alt="charge icon" className="w-6 h-auto" />
					<span>charge account</span>
				</Link>
			</li>
			<li>
				<Link to="#" className="flex gap-x-4 px-2 py-4">
					<img src={SignOutIcon} alt="sign out icon" className="w-6 h-auto" />
					<span className="text-red-350">sign out</span>
				</Link>
			</li>
		</ul>
	);
};

export default DropdownProfile;
