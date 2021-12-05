import React from "react";
import Nav from "../../components/Nav";
import ProfileCard from "./profileCard/ProfileCard";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className="min-h-screen">
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-14">
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						profile
					</h1>
				</header>
				<section className="flex gap-x-12 items-start">
					<ProfileCard />
					<ProfileInfo />
				</section>
			</main>
		</div>
	);
};

export default Profile;
