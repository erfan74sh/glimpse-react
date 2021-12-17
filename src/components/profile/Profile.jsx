import React from "react";
// asset
import AvatarImg from "../../assets/avatars/avatar-01.png";

const Profile = () => {
	return (
		<button type="button" className="flex gap-x-6 items-center">
			<span className="text-xl">User name</span>
			<img src={AvatarImg} alt="avatr" className="w-10 h-10 object-cover" />
		</button>
	);
};

export default Profile;
