import React from "react";
import { Link } from "react-router-dom";
// components
import SignInForm from "./form";
// assets
import Logo from "../../../assets/images/logo-02.png";

const SignIn = () => {
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo image" className="w-60 h-auto" />
			<SignInForm />
			<Link to="#" className="text-sm text-gray-650 font-normal capitalize">
				forget password?
			</Link>
			<span className="text-lg font-normal text-blue-550 capitalize">
				or{" "}
				<Link to="/auth/sign-up" className="underline">
					sign up
				</Link>{" "}
			</span>
		</div>
	);
};

export default SignIn;
