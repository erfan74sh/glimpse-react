import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// asset
// import AvatarImg from "../../assets/avatars/avatar-01.png";
// state
import { selectUser } from "../../features/auth/authSlice";
// icons
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
	const { isLoggedIn, user } = useSelector(selectUser);
	return (
		<button type="button" className="flex items-center gap-x-2">
			<span className="text-lg">{isLoggedIn && user["full_name"]}</span>
			{/* <img src={AvatarImg} alt="avatr" className="h-10 w-10 object-cover" /> */}
			<span className="flex h-10 w-10 items-center justify-center">
				<FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
			</span>
		</button>
	);
};

export default Profile;
