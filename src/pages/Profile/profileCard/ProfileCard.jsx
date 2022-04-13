import React from "react";
import { Link } from "react-router-dom";
// assets
import ProfilePic from "../../../assets/profile/01.png";

const ProfileCard = ({ user }) => {
	return (
		<div className="flex w-113 flex-col items-center justify-between rounded-md bg-white p-14 shadow-full">
			<img
				src={ProfilePic}
				alt="profile"
				className="mb-16 h-48 w-48 overflow-hidden rounded-full object-cover"
			/>
			<div className="mb-12 flex flex-col items-center gap-y-5 text-xl font-normal text-gray-650">
				<h3 className="mb-5 text-3xl font-bold capitalize">{user.full_name}</h3>
				<span className="px-10 text-center capitalize">{user.education}</span>
				<span>{user.email}</span>
				<span>{user.phone_number}</span>
			</div>
			<button
				type="button"
				className="rounded-md bg-blue-550 py-3 px-5 text-lg text-white"
			>
				<Link to="/">simulation history</Link>
			</button>
		</div>
	);
};

export default ProfileCard;
