import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
// import Axios from "axios";
import authService from "../../../../services/auth.service";
// components
import TextField from "../../../../components/inputs/TextField/TextField";
import SelectField from "../../../../components/inputs/SelectField";

const SignUpForm = () => {
	const register = async () => {
		const test = {
			email: "erfan12323sh@gmail.com",
			scope_of_activity: "Architect",
			phone_number: "string",
			full_name: "erfan shaf",
			password: "123456",
		};
		try {
			await authService.signUp(test);
		} catch (err) {
			// console.log(err);
			console.log("eeeeeeeeeeeer");
		}
		// const response = await Axios.post(
		// 	"https://bspsim.app/api/v1/users/",
		// 	test
		// ).catch((err) => console.log("Error:", err));
		// console.log(response);
	};

	const scopeOfActivityOptions = [{ label: "Architect" }];

	const validate = yup.object({
		// firstName: yup
		// 	.string()
		// 	.max(15, "must be 15 characters or less")
		// 	.required("required"),
		// lastName: yup
		// 	.string()
		// 	.max(15, "must be 15 characters or less")
		// 	.required("required"),
		// email: yup.string().email("email is invalid").required("required"),
		// password: yup
		// 	.string()
		// 	.min(6, "password must be at least 6 characters")
		// 	.max(20, "password must be 20 characters or less")
		// 	.required("required"),
	});
	return (
		<Formik
			initialValues={{
				"full-name": "",
				email: "",
				password: "",
				"phone-number": "",
				"scope-of-activity": "",
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
				register();
			}}
		>
			<Form className="flex flex-col items-center gap-y-7">
				<TextField
					type="text"
					name="full-name"
					placeholder="fullname"
					label="fullname"
				/>
				<TextField
					type="email"
					name="email"
					placeholder="email"
					label="email"
				/>
				<TextField
					type="password"
					name="password"
					placeholder="password"
					label="password"
				/>
				<TextField
					type="text"
					name="phone-number"
					placeholder="phone number"
					label="phone number"
				/>
				<SelectField
					selectOptions={scopeOfActivityOptions}
					name="scope-of-activity"
					label="scope of activity"
					placeholder="select option"
					handleValue={() => null}
				/>
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
