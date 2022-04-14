import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ user }) => {
	return (
		<div className="w-113 shadow-full flex flex-col items-center justify-between rounded-md bg-white p-14">
			<span className="mb-16 flex h-48 w-48 items-center justify-center rounded-full bg-gray-400">
				<FontAwesomeIcon icon={faUserAlt} size="7x" className="text-gray-650" />
			</span>
			<div className="text-gray-650 mb-12 flex flex-col items-center gap-y-5 text-xl font-normal">
				<h3 className="mb-5 text-3xl font-bold capitalize">{user.full_name}</h3>
				<span className="px-10 text-center capitalize">{user.education}</span>
				<span>{user.email}</span>
				<span>{user.phone_number}</span>
			</div>
			<button
				type="button"
				className="bg-blue-550 rounded-md py-3 px-5 text-lg text-white"
			>
				<Link to="/">simulation history</Link>
			</button>
		</div>
	);
};

export default ProfileCard;
