import React from "react";
import { useSelector } from "react-redux";
// assets
import ProfilePic from "../../../assets/profile/01.png";
// states
import { selectUserInfo } from "../../../features/userInfo/UserInfoSlice";
import { Link } from "react-router-dom";

const ProfileCard = () => {
	const userInfo = useSelector(selectUserInfo);

	return (
		<div className="flex flex-col justify-between items-center w-113 p-14 rounded-md bg-white shadow-full">
			<img
				src={ProfilePic}
				alt="profile"
				className="w-48 h-48 object-cover overflow-hidden rounded-full mb-16"
			/>
			<div className="flex flex-col items-center gap-y-5 mb-12 text-xl text-gray-650 font-normal">
				<h3 className="mb-5 text-3xl font-bold capitalize">{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
				<span className="px-10 text-center capitalize">
					{userInfo.education}
				</span>
				<span>{userInfo.email}</span>
				<span>{userInfo.phone}</span>
			</div>
			<button
				type="button"
				className="py-3 px-5 text-lg text-white bg-blue-550 rounded-md"
			>
				<Link to="/">simulation history</Link>
			</button>
		</div>
	);
};

export default ProfileCard;
