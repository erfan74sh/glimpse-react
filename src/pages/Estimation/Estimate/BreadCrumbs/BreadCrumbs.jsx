import React from "react";

const BreadCrumbs = () => {
	return (
		<ul className="flex gap-x-1 text-lg">
			<li>{`project name >`}</li>
			<li>{`zone name :`}</li>
			<li>alternative name</li>
		</ul>
	);
};

export default BreadCrumbs;
