import React from "react";
// assets
import ProfilePic from "../../../assets/profile/01.png";
import Sucsess from "../../../assets/icons/sucsess.png";

const ProfileCard = () => {
	return (
		<div className="flex flex-col justify-between items-center w-113 p-14 pb-6 rounded-md bg-white shadow-xl">
			<img
				src={ProfilePic}
				alt="profile picture"
				className="w-48 h-48 object-cover overflow-hidden rounded-full mb-16"
			/>
			<div className="flex flex-col items-center gap-y-5 mb-12 text-xl text-gray-650 font-normal">
				<h3 className="mb-5 text-3xl font-bold capitalize">mohammad rajaian</h3>
				<span className="px-10 text-center capitalize">
					master of energy and architecture
				</span>
				<span>mrajaian@gmail.com</span>
				<span>09361759625</span>
			</div>
			<img src={Sucsess} alt="sucsess icon" />
		</div>
	);
};

export default ProfileCard;
