import React from "react";
import { Outlet } from "react-router";
// style
import "./Estimation.scss";

const Estimate = () => {
	return (
		<div>
			<header>estimation page</header>
			<Outlet />
		</div>
	);
};

export default Estimate;
