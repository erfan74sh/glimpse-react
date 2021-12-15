import React from "react";
import { Formik, Form } from "formik";
// components
import TextField from "../../../../components/inputs/TextField/TextField";

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			}}
		>
			<Form className="flex flex-col items-center gap-y-4">
				<TextField type="text" name="firstName" placeholder="first name" />
				<TextField type="text" name="lastName" placeholder="last name" />
				<TextField type="email" name="email" placeholder="email" />
				<TextField type="password" name="password" placeholder="password" />
			</Form>
		</Formik>
	);
};

export default SignUpForm;
