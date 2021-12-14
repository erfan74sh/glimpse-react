import React from "react";
// assets
import Logo from "../../../assets/images/logo-02.png";

const SignUp = () => {
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo image" className="w-60 h-auto" />
			<form className="flex flex-col items-center gap-y-4 ">
				<input
					type="text"
					name="first-name"
					placeholder="firstname"
					className="px-4 py-3 border border-gray-300 rounded-md outline-none"
				/>
				<input
					type="text"
					name="last-name"
					placeholder="lastname"
					className="px-4 py-3 border border-gray-300 rounded-md outline-none"
				/>
				<input
					type="email"
					name="email"
					placeholder="email"
					className="px-4 py-3 border border-gray-300 rounded-md outline-none"
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					className="px-4 py-3 border border-gray-300 rounded-md outline-none"
				/>
				<button type="submit">submit</button>
			</form>
		</div>
	);
};

export default SignUp;
