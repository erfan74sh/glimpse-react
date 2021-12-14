import React from "react";
import { Outlet } from "react-router-dom";
// components
import Nav from "../../components/Nav";

const SignInSignUp = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default SignInSignUp;
