import React from "react";
import { useSelector } from "react-redux";
// asset
import AvatarImg from "../../assets/avatars/avatar-01.png";
// state
import { selectUser } from "../../features/auth/authSlice";

const Profile = () => {
	const { isLoggedIn, user } = useSelector(selectUser);
	return (
		<button type="button" className="flex items-center gap-x-6">
			<span className="text-lg">{isLoggedIn && user["full_name"]}</span>
			<img src={AvatarImg} alt="avatr" className="h-10 w-10 object-cover" />
		</button>
	);
};

export default Profile;
