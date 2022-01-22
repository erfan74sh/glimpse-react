import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import authService from "../../services/auth.service";
// asset
import AvatarImg from "../../assets/avatars/avatar-01.png";
// state
import { selectUser } from "../../features/auth/authSlice";

const Profile = () => {
	const [userFullame, setUserFullname] = useState("");
	const { isLoggedIn, user } = useSelector(selectUser);
	useEffect(() => {
		// authService.getCurrentUser().then(
		// 	(response) => {
		// 		setUserFullname(response.data["full_name"]);
		// 		console.log(response.data);
		// 	},
		// 	(error) => {
		// 		console.log("errore", error.response);
		// 		if (ErrorEvent.response && ErrorEvent.response.status === 403) {
		// 			console.log("unvalid");
		// 		}
		// 	}
		// );
	}, []);
	return (
		<button type="button" className="flex gap-x-6 items-center">
			<span className="text-lg">
				{isLoggedIn ? user["full_name"] : "not login"}
			</span>
			<img src={AvatarImg} alt="avatr" className="w-10 h-10 object-cover" />
		</button>
	);
};

export default Profile;
