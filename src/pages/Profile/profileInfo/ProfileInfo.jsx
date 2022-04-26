import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// state
// import {
// 	selectUserInfo,
// 	updateInfo,
// } from "../../../features/userInfo/UserInfoSlice";

const ProfileInfo = ({ user }) => {
	const [fullName, setfullName] = useState(user.full_name);
	const [email, setEmail] = useState(user.email);
	const [address, setAddress] = useState(user.address);
	const [scopOfActivity, setScopOfActivity] = useState(user.scope_of_activity);
	const [education, setEducation] = useState(user.education);
	const [phone, setPhone] = useState(user.phone_number);

	const [isEdit, setIsEdit] = useState(false);

	// const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(
		// 	updateInfo({
		// 		firstName: firstName,
		// 		lastName: lastName,
		// 		email: email,
		// 		address: address,
		// 		position: position,
		// 		education: education,
		// 		phone: phone,
		// 	})
		// );
		// setIsEdit(false);
	};

	return (
		<section className="flex flex-grow flex-col gap-y-10">
			<section>
				<header className="flex gap-x-4 border-b-2 border-gray-400 pb-4">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						information
					</h3>
					{!isEdit && (
						<button
							type="button"
							className="border-blue-550 text-blue-550 border-b-2 text-xl font-normal capitalize"
							onClick={() => setIsEdit(true)}
						>
							edit
						</button>
					)}
				</header>
				{isEdit && (
					<form
						className="flex flex-col gap-y-10 py-8 px-4"
						onSubmit={(e) => handleSubmit(e)}
					>
						<div className="flex flex-col gap-x-6 gap-y-6 md:flex-row ">
							<fieldset className="flex flex-col gap-y-6 md:w-1/2">
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">fullname</label>
									<input
										type="text"
										placeHolder="enter your full name"
										value={fullName}
										className="shadow-neo-sm rounded-md border-none p-3 outline-none"
										onChange={(e) => setfullName(e.target.value)}
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">education</label>
									<input
										type="text"
										placeHolder="enter tour education"
										value={education}
										className="shadow-neo-sm rounded-md border-none p-3 outline-none"
										onChange={(e) => setEducation(e.target.value)}
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">scope of activity</label>
									<input
										type="text"
										placeHolder="enter your scope of activity"
										value={scopOfActivity}
										className="shadow-neo-sm rounded-md border-none p-3 outline-none"
										onChange={(e) => setScopOfActivity(e.target.value)}
									/>
								</div>
							</fieldset>
							<fieldset className="flex flex-col gap-y-6 md:w-1/2">
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">address</label>
									<input
										type="text"
										placeHolder="enter your address"
										value={address}
										className="shadow-neo-sm rounded-md border-none p-3 outline-none"
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">email</label>
									<input
										type="email"
										placeHolder="enter your email"
										value={email}
										className="shadow-neo-sm rounded-md border-none p-3 outline-none"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">phone</label>
									<input
										type="tel"
										placeHolder="enter your phone number"
										value={phone}
										className="shadow-neo-sm rounded-md border-none p-3 outline-none"
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</fieldset>
						</div>
						{isEdit && (
							<button
								className="bg-blue-550 self-start rounded-md px-4 py-2 text-xl font-normal capitalize text-white"
								type="submit"
							>
								save changes
							</button>
						)}
					</form>
				)}
				{!isEdit && (
					<section className="flex flex-col gap-x-6 gap-y-6 py-8 px-4 md:flex-row">
						<div className="flex flex-col gap-y-6 md:w-1/2">
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">full name</span>
								<span>{user.full_name}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">education</span>
								<span>{user.education}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">scope of activity</span>
								<span>{user.scope_of_activity}</span>
							</div>
						</div>
						<div className="flex flex-col gap-y-6 md:w-1/2">
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">address</span>
								<span>{user.address}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">email</span>
								<span>{user.email}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">phone</span>
								<span>{user.phone_number}</span>
							</div>
						</div>
					</section>
				)}
			</section>
			<section>
				<header className="flex gap-x-4 border-b-2 border-gray-400 pb-4">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						account status
					</h3>
					<Link to="/pricing">
						<button
							type="button"
							className="border-blue-550 text-blue-550 border-b-2 text-xl font-normal capitalize"
						>
							charge
						</button>
					</Link>
				</header>
				<section className="py-8 px-4">
					<div className="flex flex-col text-lg capitalize">
						<span className="font-bold">status</span>
						<div className="flex gap-x-2">
							<span className="text-green-600">available</span>
							<span>until 09.10.2022</span>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
};

export default ProfileInfo;
