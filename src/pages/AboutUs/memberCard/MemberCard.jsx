import React from "react";

const MemberCard = ({ fullName, position, job, image }) => {
	return (
		<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
			<img
				src={image}
				alt="profile pic"
				className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
			/>
			<h4 className="text-xl font-bold text-blue-550">{fullName}</h4>
			<p>{position}</p>
			<span className="leading-none">{job}</span>
		</article>
	);
};

export default MemberCard;
