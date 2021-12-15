import React from "react";
import { Formik, Form } from "formik";
// components
import TextField from "../../../../components/inputs/TextField/TextField";

const SignUpForm = () => {
	return (
		<Formik>
			<Form>
				<TextField type="text" name="firstName" placeHolder="first name" />
			</Form>
		</Formik>
	);
};

export default SignUpForm;
