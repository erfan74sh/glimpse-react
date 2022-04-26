import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import TextField from "../../../../components/inputs/TextField/TextField";
import SelectField from "../../../../components/inputs/SelectField";
import { signin } from "../../../../features/auth/authSlice";
// icons
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = ({ handleSuccessful }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isRequestPending, setIsRequestPending] = useState(false);

	const handleSignup = (formVal) => {
		setIsRequestPending(true);

		dispatch(signin(formVal))
			.unwrap()
			.then(() => {
				handleSuccessful(true);
			})
			.then(() => {
				setTimeout(() => {
					navigate("/auth/sign-in");
				}, 3000);
			})
			.catch(() => handleSuccessful(false))
			.then(() => {
				setIsRequestPending(false);
			});
	};

	const scopeOfActivityOptions = [
		{ label: "Architect", value: "Architect" },
		{ label: "Energy Designer", value: "Energy_Designer" },
		{ label: "Data Analyser", value: "Data_Analyser" },
		{ label: "Other", value: "Other" },
	];

	const validate = yup.object({
		full_name: yup
			.string()
			.max(35, "must be 35 characters or less")
			.required("required"),
		email: yup.string().email("email is invalid").required("required"),
		password: yup
			.string()
			.min(6, "password must be at least 6 characters")
			.max(20, "password must be 20 characters or less")
			.required("required"),
		phone_number: yup
			.string()
			.matches(
				/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
				"invalid phone number"
			),
		scope_of_activity: yup
			.string()
			.oneOf(["Architect", "Energy_Designer", "Data_Analyser", "Other"])
			.required("requierd"),
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
			<Form className="sm:w-100 flex w-full flex-col gap-y-7">
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
				<div className="flex flex-col gap-y-7 gap-x-5 sm:flex-row">
					<div className="sm:w-1/2">
						<TextField
							type="text"
							name="phone_number"
							placeholder="phone number"
							label="phone number"
						/>
					</div>
					<div className="sm:w-1/2">
						<SelectField
							selectOptions={scopeOfActivityOptions}
							name="scope_of_activity"
							label="scope of activity"
							placeholder="select option"
							handleValue={() => null}
						/>
					</div>
				</div>
				<button
					type="submit"
					className="bg-blue-550 hover:shadow-b-sm rounded-md py-1 px-4 capitalize text-white transition-all"
				>
					{isRequestPending ? (
						<FontAwesomeIcon icon={faCircleNotch} spin />
					) : (
						"register"
					)}
				</button>
			</Form>
		</Formik>
	);
};

export default SignUpForm;
