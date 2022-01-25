import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
// components
import TextField from "../../../../components/inputs/TextField/TextField";
// services
import { login } from "../../../../features/auth/authSlice";

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (username, password) => {
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
			.catch((er) => console.log(er));
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
			<Form className="flex flex-col w-full gap-y-7">
				<TextField type="text" name="username" placeholder="username" />
				<TextField type="password" name="password" placeholder="password" />
				<button
					type="submit"
					className="py-1 px-4 rounded-md capitalize bg-blue-550 text-white transition-all hover:shadow-b-sm"
				>
					log in
				</button>
			</Form>
		</Formik>
	);
};

export default SignInForm;
