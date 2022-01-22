import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
// import authService from "../../../../services/auth.service";
// components
import TextField from "../../../../components/inputs/TextField/TextField";
import SelectField from "../../../../components/inputs/SelectField";

import { signin } from "../../../../features/auth/authSlice";

const SignUpForm = () => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	// const register = async (formVal) => {
	// 	try {
	// 		const res = await authService.signUp(formVal);
	// 		console.log(res);
	// 	} catch (err) {
	// 		// console.log(err);
	// 		console.log("eeeeeeeeeeeer");
	// 	}
	// 	// const response = await Axios.post(
	// 	// 	"https://bspsim.app/api/v1/users/",
	// 	// 	test
	// 	// ).catch((err) => console.log("Error:", err));
	// 	// console.log(response);
	// };
	const handleSignup = (formVal) => {
		dispatch(signin(formVal));
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
				email: "",
				scope_of_activity: "",
				phone_number: "",
				full_name: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				handleSignup(values);
			}}
		>
			<Form className="flex flex-col items-center gap-y-7">
				<TextField
					type="text"
					name="full_name"
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
					name="phone_number"
					placeholder="phone number"
					label="phone number"
				/>
				<SelectField
					selectOptions={scopeOfActivityOptions}
					name="scope_of_activity"
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
