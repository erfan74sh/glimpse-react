import React, { useEffect } from "react";
import { Outlet } from "react-router";
// components
import Nav from "../../components/Nav";
import withLoading from "../../HOC/withLoading";
// style
import "./Estimation.scss";

const Estimation = ({ setLoading }) => {
	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div className="h-screen bg-gray-50">
			<header className="">
				<Nav />
			</header>
			<Outlet />
		</div>
	);
};

export default withLoading(Estimation, "");
