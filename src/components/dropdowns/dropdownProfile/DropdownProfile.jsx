import React from "react";
//
// assets
import ProfileIcon from "../../../assets/icons/Profile.svg";
import ChargeIcon from "../../../assets/icons/charge.svg";
import SignOutIcon from "../../../assets/icons/sign-out.svg";

const DropdownProfile = ({ showDropdown }) => {
	return (
		<ul
			className={`${
				showDropdown ? "max-h-screen" : "max-h-0"
			} absolute flex flex-col px-3 text-xl text-gray-500 font-normal bg-white shadow-lg top-full right-0 w-max capitalize rounded-md transform translate-y-9 overflow-hidden transition-all`}
		>
			<li className="flex gap-x-4 px-2 py-4">
				<img src={ProfileIcon} alt="profile icon" />
				<span>profile</span>
			</li>
			<li className="flex gap-x-4 px-2 py-4 border-b-2 border-t-2 border-gray-300">
				<img src={ChargeIcon} alt="charge icon" />
				<span>charge account</span>
			</li>
			<li className="flex gap-x-4 px-2 py-4">
				<img src={SignOutIcon} alt="sign out icon" />
				<span className="text-red-350">sign out</span>
			</li>
		</ul>
	);
};

export default DropdownProfile;
