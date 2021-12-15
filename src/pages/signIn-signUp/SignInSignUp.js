import React from "react";
import { Outlet } from "react-router-dom";
// components
import Nav from "../../components/Nav";
// style
import "./SignInSignUp.scss";

const SignInSignUp = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main
				id="auth-container"
				className="h-screen flex justify-center items-center bg-gray-100"
			>
				<Outlet />
			</main>
		</>
	);
};

export default SignInSignUp;
