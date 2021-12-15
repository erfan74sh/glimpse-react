import React from "react";
import { Link } from "react-router-dom";
// assets
import Logo from "../../../assets/images/logo-02.png";
import SignUpForm from "./form/SignUpForm";

const SignUp = () => {
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo image" className="w-60 h-auto" />
			<SignUpForm />
			<span className="text-lg font-normal text-blue-550 capitalize">
				or{" "}
				<Link to="/auth/sign-in" className="underline">
					log in
				</Link>{" "}
			</span>
		</div>
	);
};

export default SignUp;
