import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav";
import { selectUser } from "../../features/auth/authSlice";
import ProfileCard from "./profileCard/ProfileCard";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
	const { user } = useSelector(selectUser);
	return (
		<div className="min-h-screen">
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-14">
					<h1 className="border-l-8 border-blue-550 pl-3 text-3xl font-bold uppercase leading-8 text-blue-550">
						profile
					</h1>
				</header>
				<section className="flex items-start gap-x-12">
					<ProfileCard user={user} />
					<ProfileInfo user={user} />
				</section>
			</main>
		</div>
	);
};

export default Profile;
