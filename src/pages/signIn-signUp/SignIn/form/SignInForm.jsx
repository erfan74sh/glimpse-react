import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
// components
import TextField from "../../../../components/inputs/TextField/TextField";

const SignInForm = () => {
	const validate = yup.object({
		userName: yup.string().required("required"),
		password: yup
			.string()
			.min(6, "password must be at least 6 characters")
			.max(20, "password must be 20 characters or less")
			.required("required"),
	});
	return (
		<Formik
			initialValues={{
				userName: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => console.log(values)}
		>
			<Form className="flex flex-col items-center gap-y-7">
				<TextField type="text" name="userName" placeholder="username" />
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
