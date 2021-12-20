import React, { useState, useEffect } from "react";

const Category = () => {
	return <div>category</div>;
};

const BreadCrumps = () => {
	const [steps, setSteps] = useState({
		category: "",
		scale: "",
		project: "",
		zone: "",
	});
	useEffect(() => {
		// todo: fetch data and update state here if user has filled some inputs before
	}, []);

	return (
		<div>
			<Category />
		</div>
	);
};

export default BreadCrumps;
