import React from "react";

const MemberCard = ({ fullName, position, job, image }) => {
	return (
		<>
			<img
				src={image}
				alt="profile pic"
				className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
			/>
			<h4 className="text-lg font-bold text-blue-550">{fullName}</h4>
			<p>{position}</p>
			<span className="leading-none">{job}</span>
		</>
	);
};

export default MemberCard;
