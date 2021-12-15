import React from "react";
import { Link } from "react-router-dom";
// assets
import Logo from "../../../assets/images/logo-02.png";

const SignIn = () => {
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo image" className="w-60 h-auto" />
			<form className="flex flex-col items-center gap-y-4 ">
				<input
					type="text"
					name="username"
					placeholder="username"
					className="px-4 py-3 border border-gray-300 rounded-md outline-none"
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					className="px-4 py-3 border border-gray-300 rounded-md outline-none"
				/>
				<button type="submit">Log in</button>
			</form>
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
