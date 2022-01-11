import React from "react";

const BreadCrumbs = ({ projectName, zoneName, alternativeName }) => {
	return (
		<ul className="flex gap-x-1 text-xl text-gray-650">
			<li>{`${projectName} >`}</li>
			<li>{`${zoneName} :`}</li>
			<li>{alternativeName}</li>
		</ul>
	);
};

export default BreadCrumbs;
