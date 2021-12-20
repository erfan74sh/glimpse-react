import React, { useState, useEffect } from "react";

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

	return <div>breadcrumps</div>;
};

export default BreadCrumps;
