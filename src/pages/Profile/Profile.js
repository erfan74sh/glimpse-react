import React from "react";
import Nav from "../../components/Nav";
import ProfileCard from "./profileCard/ProfileCard";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className="h-screen bg-gray-50">
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-14">
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						profile
					</h1>
				</header>
				<main>
					<ProfileCard />
					<ProfileInfo />
				</main>
			</main>
		</div>
	);
};

export default Profile;
