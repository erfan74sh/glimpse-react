import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import SignInForm from "./form";
// assets
import Logo from "../../../assets/images/logo-02.png";
// slice
import { selectMessage } from "../../../features/message/messageSlice";

const SignIn = () => {
	const { message } = useSelector(selectMessage);
	console.log(message);
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo" className="w-60 h-auto" />
			<SignInForm />
			{message && <div>{message}</div>}
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
