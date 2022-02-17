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
						alternative_name: "",
						zone_name: "",
					}}
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
						{/* <input
						type="text"
						placeholder="enter zone name"
						className="rounded-md border border-gray-300 py-1.5 px-2 text-sm outline-none"
					/>
					<input
						type="text"
						placeholder="enter alternative name"
						className="rounded-md border border-gray-300 py-1.5 px-2 text-sm outline-none"
					/> */}
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
					className="bg-blue-550 w-36 rounded-md p-1 py-1.5 text-sm uppercase text-white"
					onClick={() => setShowNewAlter(!showNewAlter)}
				>
					new alternative
				</button>
				<div
					className={` ${
						showNewAlter ? "max-w-3xl" : ""
					} flex max-w-0 items-center gap-x-2 transition-all duration-200`}
				>
					<input
						type="text"
						placeholder="enter alternative name"
						className="rounded-md border border-gray-300 py-1.5 px-2 text-sm outline-none"
					/>
					<button>
						<FontAwesomeIcon
							icon={faPlusCircle}
							className="hover:text-blue-550 text-3xl text-gray-400 transition-all"
						/>
					</button>
				</div>
			</div>
			<div>
				<Link to="/estimation/compare-zones">
					<button className="bg-blue-550 w-36 rounded-md p-1 py-1.5 text-sm uppercase text-white">
						compare zones
					</button>
				</Link>
			</div>
		</section>
	);
};

export default ResultOptions;
