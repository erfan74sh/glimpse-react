import React from "react";

const MemberCard = ({ fullName, education, activityScope, image }) => {
	return (
		<>
			<div className="group relative cursor-pointer">
				<img
					src={image}
					alt="profile pic"
					className="w-45 h-45 mb-5 overflow-hidden rounded-full object-cover transition-all hover:rounded-none group-hover:rounded-none"
				/>
				<div className="absolute top-0 flex h-full w-full content-center items-center overflow-hidden bg-white p-4 opacity-0 transition-all group-hover:opacity-70 ">
					<span className="w-full">{activityScope}</span>
				</div>
			</div>
			<h4 className="text-blue-550 text-lg font-bold">{fullName}</h4>
			<p>{education}</p>
		</>
	);
};

export default MemberCard;
