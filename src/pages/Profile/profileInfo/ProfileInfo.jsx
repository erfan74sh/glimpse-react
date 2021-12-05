import React from "react";

const ProfileInfo = () => {
	return (
		<section className="flex flex-col flex-grow gap-y-10">
			<section>
				<header className="flex gap-x-4 pb-4 border-b-2 border-gray-400">
					<h3 className="text-gray-650 text-2xl font-bold capitalize">
						information
					</h3>
					<button
						type="button"
						className="text-xl font-normal text-blue-550 border-b-2 border-blue-550 capitalize"
					>
						edit
					</button>
				</header>
				<form className="flex gap-x-6 py-8 px-4">
					<fieldset className="w-1/2 flex flex-col gap-y-6">
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">first name</label>
							<input
								type="text"
								placeHolder="enter your first name"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">last name</label>
							<input
								type="text"
								placeHolder="enter your last name"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">education</label>
							<input
								type="text"
								placeHolder="enter tour education"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">position</label>
							<input
								type="text"
								placeHolder="enter your position"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
					</fieldset>
					<fieldset className="w-1/2 flex flex-col gap-y-6">
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">address</label>
							<input
								type="text"
								placeHolder="enter your address"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">email</label>
							<input
								type="email"
								placeHolder="enter your email"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<label className="font-bold">phone</label>
							<input
								type="tel"
								placeHolder="enter your phone number"
								value=""
								className="px-2 py-2 border-none outline-none shadow-neo-sm rounded-md"
							/>
						</div>
					</fieldset>
				</form>
				{/* <section className="flex gap-x-6 py-8 px-4">
					<div className="w-1/2 flex flex-col gap-y-6">
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">first name</span>
							<span>mohammad</span>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">last name</span>
							<span>rajaian</span>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">education</span>
							<span>Master of Energy and architecture</span>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">position</span>
							<span>Co_founder of more Office</span>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-y-6">
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">address</span>
							<span>No 64. Farhangian st , Esfahan</span>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">email</span>
							<span>mrajaian@gmail.com</span>
						</div>
						<div className="flex flex-col text-lg capitalize">
							<span className="font-bold">phone</span>
							<span>09361759625</span>
						</div>
					</div>
				</section> */}
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
