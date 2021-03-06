import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import TextField from "../../../../components/inputs/TextField/TextField";
// services
import { login } from "../../../../features/auth/authSlice";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isRequestPending, setIsRequestPending] = useState(false);

	const handleLogin = (username, password) => {
		setIsRequestPending(true);
		dispatch(
			login(
				`grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
			)
		)
			.unwrap()
			.then(() => {
				navigate("/");
				window.location.reload();
			})
			.catch((er) => console.log(er))
			.then(() => setIsRequestPending(false));
	};

	const validate = yup.object({
		username: yup.string().required("required"),
		password: yup
			.string()
			.min(6, "password must be at least 6 characters")
			.max(20, "password must be 20 characters or less")
			.required("required"),
	});
	return (
		<Formik
			initialValues={{
				username: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				handleLogin(values.username, values.password);
			}}
		>
			<Form className="flex w-full flex-col gap-y-7">
				<TextField
					type="email"
					name="username"
					placeholder="enter your email"
					label="email"
				/>
				<TextField
					type="password"
					name="password"
					placeholder="enter your password"
					label="password"
				/>
				<button
					type="submit"
					className="bg-blue-550 hover:shadow-b-sm rounded-md py-1 px-4 capitalize text-white transition-all"
				>
					{isRequestPending ? (
						<FontAwesomeIcon icon={faCircleNotch} spin />
					) : (
						"log in"
					)}
				</button>
			</Form>
		</Formik>
	);
};

export default SignInForm;
