import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ user }) => {
	return (
		<div className="lg:w-100 xl:w-113 shadow-full flex flex-col items-center gap-y-10 gap-x-10 rounded-md bg-white p-8 md:flex-row md:p-14 lg:flex-col">
			<span className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-400">
				<FontAwesomeIcon icon={faUserAlt} size="7x" className="text-gray-600" />
			</span>
			<div className="text-gray-650 flex flex-col items-center gap-y-5 text-xl font-normal">
				<h3 className="mb-5 text-3xl font-bold capitalize">{user.full_name}</h3>
				<span>{user.email}</span>
			</div>
		</div>
	);
};

export default ProfileCard;
