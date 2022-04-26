import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// components
import SignInForm from "./form";
// assets
import Logo from "../../../assets/images/logo-02.png";
// slice
import {
	clearMessage,
	selectMessage,
} from "../../../features/message/messageSlice";

const SignIn = () => {
	const dispatch = useDispatch();
	const { message } = useSelector(selectMessage);
	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);
	return (
		<div className="shadow-full mx-3 flex w-full flex-col items-center gap-y-9 rounded-md bg-white p-6 sm:mx-0 sm:w-auto sm:p-12">
			<img src={Logo} alt="logo" className="h-auto w-60" />
			<SignInForm />
			<div className="flex flex-col items-center gap-y-2">
				{message && <div className="text-red-500">{message}</div>}
				<Link to="#" className="text-gray-650 text-sm font-normal capitalize">
					forget password?
				</Link>
			</div>
			<span className="text-blue-550 text-lg font-normal capitalize">
				or{" "}
				<Link to="/auth/sign-up" className="underline">
					sign up
				</Link>{" "}
			</span>
		</div>
	);
};

export default SignIn;
