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
				<main></main>
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
				<main></main>
			</section>
		</section>
	);
};

export default ProfileInfo;
