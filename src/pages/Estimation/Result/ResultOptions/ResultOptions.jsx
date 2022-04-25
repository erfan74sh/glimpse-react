import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import TextField from "../../../../components/inputs/TextField/TextField";
// icons
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// slice
import { updateData } from "../../../../features/estimationPrimData/EstimationPrimDataSlice";

const ResultOptions = ({ primData }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [showNewZone, setShowNewZone] = useState(false);
	const [showNewAlter, setShowNewAlter] = useState(false);

	const handleSubmit = (values) => {
		console.log("prime:", primData, "values:", values);
		dispatch(updateData({ ...primData, ...values }));
		navigate("/estimation");
	};

	return (
		<section className="mt-6 flex flex-col gap-x-8 gap-y-1 lg:flex-row ">
			<div className="flex flex-col gap-x-4 gap-y-3 overflow-hidden py-1 md:flex-row lg:items-center">
				<button
					className="bg-blue-550 border-blue-550 w-full rounded-md border p-2 capitalize text-white md:w-36"
					onClick={() => setShowNewZone(!showNewZone)}
				>
					new zone
				</button>
				<Formik
					initialValues={{
						zone_name: "",
						alternative_name: "",
					}}
					validationSchema={yup.object({
						zone_name: yup
							.string()
							.min(2, "zone name must be more than 2 characters")
							.max(40, "zone name must be less than 40 characters")
							.required("zone name is required"),
						alternative_name: yup
							.string()
							.min(2, "alternative name must be more than 2 characters")
							.max(40, "alternative name must be less than 40 characters")
							.required("alternative name is required"),
					})}
					onSubmit={(values) => {
						handleSubmit(values);
					}}
				>
					<Form
						className={` ${
							showNewZone ? "max-h-screen lg:max-w-3xl" : ""
						} flex max-h-0 items-center gap-x-2 overflow-hidden transition-all duration-200 lg:max-w-0`}
					>
						<TextField
							type="text"
							name="zone_name"
							placeholder="new zone name"
						/>
						<TextField
							type="text"
							name="alternative_name"
							placeholder="new alternative name"
						/>
						<button type="submit">
							<FontAwesomeIcon
								icon={faPlusCircle}
								className="hover:text-blue-550 text-3xl text-gray-400 transition-all"
							/>
						</button>
					</Form>
				</Formik>
			</div>
			<div className="flex flex-col gap-x-4 gap-y-3 overflow-hidden py-1 md:flex-row">
				<button
					className="bg-blue-550 border-blue-550 w-full rounded-md border p-2 capitalize text-white md:w-36"
					onClick={() => setShowNewAlter(!showNewAlter)}
				>
					new alternative
				</button>
				<Formik
					initialValues={{
						alternative_name: "",
					}}
					validationSchema={yup.object({
						alternative_name: yup
							.string()
							.min(2, "alternative name must be more than 2 characters")
							.max(40, "alternative name must be less than 40 characters")
							.required("alternative name is required"),
					})}
					onSubmit={(values) => {
						handleSubmit(values);
					}}
				>
					<Form
						className={` ${
							showNewAlter ? "max-h-screen lg:max-w-3xl" : ""
						} flex max-h-0 items-center gap-x-2 overflow-hidden transition-all duration-200 lg:max-w-0`}
					>
						<TextField
							type="text"
							name="alternative_name"
							placeholder="new alternative name"
						/>
						<button type="submit">
							<FontAwesomeIcon
								icon={faPlusCircle}
								className="hover:text-blue-550 text-3xl text-gray-400 transition-all"
							/>
						</button>
					</Form>
				</Formik>
			</div>
			<div className="flex items-center">
				<Link
					to={{
						pathname: "/compare-zones",
						search: `?subset=${primData.subset}&project_name=${primData.project_name}`,
					}}
					target={"_blank"}
					className="w-full"
				>
					<button className="bg-blue-550 border-blue-550 w-full rounded-md border p-2 capitalize text-white md:w-36">
						compare zones
					</button>
				</Link>
			</div>
		</section>
	);
};

export default ResultOptions;
