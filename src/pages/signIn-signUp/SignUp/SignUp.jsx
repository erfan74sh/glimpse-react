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

	const [counter, setCounter] = useState(3);

	useEffect(() => {
		const timer =
			counter > 0 &&
			successful &&
			setTimeout(() => setCounter(counter - 1), 1000);
		return () => clearTimeout(timer);
	}, [counter, successful]);

	const dispatch = useDispatch();
	const { message } = useSelector(selectMessage);
	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);
	return (
		<div className="shadow-full mx-3 flex w-full flex-col items-center gap-y-9 rounded-md bg-white p-6 sm:mx-0 sm:w-auto sm:p-12">
			<img src={Logo} alt="logo" className="h-auto w-60" />
			{!successful ? (
				<>
					<SignUpForm handleSuccessful={handleSuccessful} />
					{message && <div className="text-red-500">{message}</div>}
					<span className="text-blue-550 text-lg font-normal capitalize">
						or{" "}
						<Link to="/auth/sign-in" className="underline">
							log in
						</Link>{" "}
					</span>
				</>
			) : (
				message && (
					<div className="flex flex-col items-center justify-center">
						<div className="text-green-600">{message}</div>
						<span className="text-gray-500">
							and will be redirected in {counter}{" "}
							{counter <= 1 ? "second" : "seconds"}
						</span>
					</div>
				)
			)}
		</div>
	);
};

export default SignUp;
