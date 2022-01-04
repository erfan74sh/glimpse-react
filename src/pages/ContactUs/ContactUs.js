import React from "react";
// components
import Nav from "../../components/Nav";
import MapContainer from "./MapContainer";

const ContactUs = () => {
	return (
		<>
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-10">
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						contact us
					</h1>
				</header>
				<div className="flex">
					<section className="w-1/2">
						<ul className="flex gap-x-2 text-gray-650 capitalize">
							<div className="flex flex-col gap-y-6 flex-grow">
								<li className="flex flex-col gap-y-2">
									<h3 className="font-bold">phone</h3>
									<span>09121395045</span>
								</li>
								<li className="flex flex-col gap-y-2">
									<h3 className="font-bold">email</h3>
									<span className="normal-case">info@bsp.grezen</span>
								</li>
								<li className="flex flex-col gap-y-2">
									<h3 className="font-bold">address</h3>
									<span>Beheshti University _ Tehran</span>
								</li>
							</div>
							<div className="flex flex-col gap-y-6 flex-grow">
								<li className="flex flex-col gap-y-2">
									<h3 className="font-bold">instagram</h3>
									<span>@glimpse.app</span>
								</li>
								<li className="flex flex-col gap-y-2">
									<h3 className="font-bold">linkedin</h3>
									<span>glimpse.app</span>
								</li>
								<li className="flex flex-col gap-y-2">
									<h3 className="font-bold">twitter</h3>
									<span>@glimpse.app</span>
								</li>
							</div>
						</ul>
					</section>
					<section className="w-1/2 pl-14 relative h-113">
						{/* <MapContainer /> */}
						<form className="flex flex-col gap-y-6">
							<h2 className="text-lg font-semibold text-gray-650">
								How can we help you ?
							</h2>
							<input
								type="text"
								name="name"
								placeHolder="your name"
								className="px-6 py-2 rounded-2xl bg-gray-200"
							/>
							<input
								type="email"
								name="email"
								placeHolder="your email"
								className="px-6 py-2 rounded-2xl bg-gray-200"
							/>
							<input
								type="text"
								name="subject"
								placeHolder="subject"
								className="px-6 py-2 rounded-2xl bg-gray-200"
							/>
							<textarea
								rows={8}
								name="message"
								placeHolder="write your message here"
								className="px-6 py-2 rounded-2xl bg-gray-200"
							/>
							<button
								type="submit"
								className="self-end px-8 py-1 text-white capitalize bg-blue-550 rounded-md transition hover:shadow-b-sm"
							>
								send
							</button>
						</form>
					</section>
				</div>
			</main>
		</>
	);
};

export default ContactUs;
