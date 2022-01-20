import React, { useState, useEffect } from "react";
import authService from "../../services/auth.service";
// asset
import AvatarImg from "../../assets/avatars/avatar-01.png";

const Profile = () => {
	const [userFullame, setUserFullname] = useState("");
	useEffect(() => {
		authService.getCurrentUser().then(
			(response) => {
				setUserFullname(response.data["full_name"]);
				console.log(response.data);
			},
			(error) => {
				console.log("errore", error.response);
				if (ErrorEvent.response && ErrorEvent.response.status === 403) {
					console.log("unvalid");
				}
			}
		);
	}, []);
	return (
		<button type="button" className="flex gap-x-6 items-center">
			<span className="text-lg">
				{userFullame !== "" ? userFullame : "not login"}
			</span>
			<img src={AvatarImg} alt="avatr" className="w-10 h-10 object-cover" />
		</button>
	);
};

export default Profile;
