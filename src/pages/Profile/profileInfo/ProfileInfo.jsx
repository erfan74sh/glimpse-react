import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// state
import {
	selectUserInfo,
	updateInfo,
} from "../../../features/userInfo/UserInfoSlice";

const ProfileInfo = () => {
	const userInfo = useSelector(selectUserInfo);

	const [firstName, setFirstName] = useState(userInfo.firstName);
	const [lastName, setLastName] = useState(userInfo.lastName);
	const [email, setEmail] = useState(userInfo.email);
	const [address, setAddress] = useState(userInfo.address);
	const [position, setPosition] = useState(userInfo.position);
	const [education, setEducation] = useState(userInfo.education);
	const [phone, setPhone] = useState(userInfo.phone);

	const [isEdit, setIsEdit] = useState(false);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateInfo({
				firstName: firstName,
				lastName: lastName,
				email: email,
				address: address,
				position: position,
				education: education,
				phone: phone,
			})
		);
		setIsEdit(false);
	};

	return (
		<section className="flex flex-col flex-grow gap-y-10">
			<section>
				<header className="flex gap-x-4 pb-4 border-b-2 border-gray-400">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						information
					</h3>
					{!isEdit && (
						<button
							type="button"
							className="text-xl font-normal text-blue-550 border-b-2 border-blue-550 capitalize"
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
						<div className="flex gap-x-6 ">
							<fieldset className="w-1/2 flex flex-col gap-y-6">
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">first name</label>
									<input
										type="text"
										placeHolder="enter your first name"
										value={firstName}
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
										onChange={(e) => setFirstName(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">last name</label>
									<input
										type="text"
										placeHolder="enter your last name"
										value={lastName}
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
										onChange={(e) => setLastName(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">education</label>
									<input
										type="text"
										placeHolder="enter tour education"
										value={education}
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
										onChange={(e) => setEducation(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">position</label>
									<input
										type="text"
										placeHolder="enter your position"
										value={position}
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
										onChange={(e) => setPosition(e.target.value)}
										required
									/>
								</div>
							</fieldset>
							<fieldset className="w-1/2 flex flex-col gap-y-6">
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">address</label>
									<input
										type="text"
										placeHolder="enter your address"
										value={address}
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
										onChange={(e) => setAddress(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col text-lg capitalize">
									<label className="font-bold">email</label>
									<input
										type="email"
										placeHolder="enter your email"
										value={email}
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
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
										className="p-3 border-none outline-none shadow-neo-sm rounded-md"
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
							</fieldset>
						</div>
						{isEdit && (
							<button
								className="px-4 py-2 self-start rounded-md text-xl font-normal text-white bg-blue-550 capitalize"
								type="submit"
							>
								save changes
							</button>
						)}
					</form>
				)}
				{!isEdit && (
					<section className="flex gap-x-6 py-8 px-4">
						<div className="w-1/2 flex flex-col gap-y-6">
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">first name</span>
								<span>{userInfo.firstName}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">last name</span>
								<span>{userInfo.lastName}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">education</span>
								<span>{userInfo.education}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">position</span>
								<span>{userInfo.position}</span>
							</div>
						</div>
						<div className="w-1/2 flex flex-col gap-y-6">
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">address</span>
								<span>{userInfo.address}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">email</span>
								<span>{userInfo.email}</span>
							</div>
							<div className="flex flex-col text-lg capitalize">
								<span className="font-bold">phone</span>
								<span>{userInfo.phone}</span>
							</div>
						</div>
					</section>
				)}
			</section>
			<section>
				<header className="flex gap-x-4 pb-4 border-b-2 border-gray-400">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						account status
					</h3>
					<button
						type="button"
						className="text-xl font-normal text-blue-550 border-b-2 border-blue-550 capitalize"
					>
						charge
					</button>
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
