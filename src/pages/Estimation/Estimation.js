import React from "react";
import { Outlet } from "react-router";
// components
import Nav from "./Nav";
// style
import "./Estimation.scss";

const Estimation = () => {
	return (
		<div className="h-screen bg-gray-50">
			<header className="">
				<Nav />
			</header>
			<Outlet />
		</div>
	);
};

export default Estimation;
