import React, { useEffect, useState } from "react";
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
	const [successful, setSuccessful] = useState(false);
	const handleSuccessful = (isSuccessful) => {
		setSuccessful(isSuccessful);
	};

	const dispatch = useDispatch();
	const { message } = useSelector(selectMessage);
	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);
	return (
		<div className="flex flex-col items-center px-12 py-12 gap-y-9 bg-white rounded-md shadow-full">
			<img src={Logo} alt="logo" className="w-60 h-auto" />
			{!successful ? (
				<>
					<SignUpForm handleSuccessful={handleSuccessful} />
					{message && <div className="text-red-500">{message}</div>}
					<span className="text-lg font-normal text-blue-550 capitalize">
						or{" "}
						<Link to="/auth/sign-in" className="underline">
							log in
						</Link>{" "}
					</span>
				</>
			) : (
				message && <div className="text-green-600">{message}</div>
			)}
		</div>
	);
};

export default SignUp;
