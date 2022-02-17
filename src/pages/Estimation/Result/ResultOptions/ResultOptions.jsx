import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

	const [showNewZone, setShowNewZone] = useState(false);
	const [showNewAlter, setShowNewAlter] = useState(false);

	const handleSubmit = (values) => {
		updateData({ ...primData, ...values });
		navigate("/estimation");
	};

	return (
		<section className="mt-6 flex gap-x-8">
			<div className="flex items-center gap-x-4 overflow-hidden">
				<button
					className="bg-blue-550 border-blue-550 w-36 rounded-md border p-2 capitalize text-white"
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
							showNewZone ? "max-w-3xl" : ""
						} flex max-w-0 items-center gap-x-2 transition-all duration-200`}
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
			<div className="flex gap-x-4 overflow-hidden">
				<button
					className="bg-blue-550 border-blue-550 w-36 rounded-md border p-2 capitalize text-white"
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
							showNewAlter ? "max-w-3xl" : ""
						} flex max-w-0 items-center gap-x-2 transition-all duration-200`}
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
			<div>
				<Link
					to={{
						pathname: "/compare-zones",
						search: `?project_name=${primData.project_name}`,
					}}
				>
					<button className="bg-blue-550 border-blue-550 w-36 rounded-md border p-2 capitalize text-white">
						compare zones
					</button>
				</Link>
			</div>
		</section>
	);
};

export default ResultOptions;
