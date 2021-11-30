import React from "react";

const ProfileInfo = () => {
	return (
		<section className="flex flex-col flex-grow gap-y-20">
			<section>
				<header className="flex gap-x-4 pb-4 border-b-2 border-gray-400">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						information
					</h3>
					<button
						type="button"
						className="text-xl font-normal text-blue-550 border-b-2 border-blue-550 capitalize"
					>
						edit
					</button>
				</header>
				<main className="flex flex-col gap-y-6 py-8 px-4">
					<div className="flex gap-x-6 justify-between items-center">
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">first name</span>
							<span>mohammad</span>
						</div>
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">address</span>
							<span>No 64. Farhangian st , Esfahan</span>
						</div>
					</div>
					<div className="flex gap-x-6 justify-between items-center">
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">last name</span>
							<span>rajaian</span>
						</div>
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">last name</span>
							<span>rajaian</span>
						</div>
					</div>
					<div className="flex gap-x-6 justify-between items-center">
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">education</span>
							<span>Master of Energy and architecture</span>
						</div>
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">email</span>
							<span>mrajaian@gmail.com</span>
						</div>
					</div>
					<div className="flex gap-x-6 justify-between items-center">
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">position</span>
							<span>Co_founder of more Office</span>
						</div>
						<div className="flex flex-col w-1/2 text-lg capitalize">
							<span className="font-bold">phone</span>
							<span>09361759625</span>
						</div>
					</div>
				</main>
			</section>
			<section>
				<header className="flex gap-x-4 pb-4 border-b-2 border-gray-400">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						information
					</h3>
					<button
						type="button"
						className="text-xl font-normal text-blue-550 border-b-2 border-blue-550 capitalize"
					>
						edit
					</button>
				</header>
				<main className="py-8 px-4"></main>
			</section>
		</section>
	);
};

export default ProfileInfo;
