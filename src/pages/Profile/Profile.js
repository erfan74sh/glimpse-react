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
			<main className="px-5 py-16 md:px-10 lg:px-24">
				<header className="mb-14">
					<h1 className="border-blue-550 text-blue-550 border-l-8 pl-3 text-3xl font-bold uppercase leading-8">
						profile
					</h1>
				</header>
				<section className="flex flex-col gap-x-12 gap-y-10 lg:flex-row lg:items-start">
					<ProfileCard user={user} />
					<ProfileInfo user={user} />
				</section>
			</main>
		</div>
	);
};

export default Profile;
