import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
// components
import TextField from "../../../../components/inputs/TextField/TextField";

const SignUpForm = () => {
	const validate = yup.object({
		firstName: yup
			.string()
			.max(15, "must be 15 characters or less")
			.required("required"),
		lastName: yup
			.string()
			.max(15, "must be 15 characters or less")
			.required("required"),
		email: yup.string().email("email is invalid").required("required"),
		password: yup
			.string()
			.min(6, "password must be at least 6 characters")
			.max(20, "password must be 20 characters or less")
			.required("required"),
	});
	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => console.log(values)}
		>
			<Form className="flex flex-col items-center gap-y-7">
				<TextField type="text" name="firstName" placeholder="first name" />
				<TextField type="text" name="lastName" placeholder="last name" />
				<TextField type="email" name="email" placeholder="email" />
				<TextField type="password" name="password" placeholder="password" />
				<button
					type="submit"
					className="py-1 px-4 rounded-md capitalize bg-blue-550 text-white transition-all hover:shadow-b-sm"
				>
					register
				</button>
			</Form>
		</Formik>
	);
};

export default SignUpForm;
