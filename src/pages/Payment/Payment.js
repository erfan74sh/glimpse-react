import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

const Payment = () => {
	return (
		<>
			<header>
				<Nav lang="persian" />
			</header>
			<main className="" dir="rtl">
				<Outlet />
			</main>
		</>
	);
};

export default Payment;
