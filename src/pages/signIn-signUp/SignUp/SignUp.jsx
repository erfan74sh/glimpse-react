import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// assets
import Logo from "../../../assets/images/logo-02.png";
import SignUpForm from "./form/SignUpForm";
// slice
import {
	selectMessage,
	clearMessage,
} from "../../../features/message/messageSlice";

const SignUp = () => {
	const { message } = useSelector(selectMessage);
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo" className="w-60 h-auto" />
			<SignUpForm />
			{message && <div className="text-red-500">{message}</div>}
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
