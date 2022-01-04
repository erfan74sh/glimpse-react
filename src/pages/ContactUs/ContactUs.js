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
				<header className="mb-16">
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						contact us
					</h1>
				</header>
				<div className="flex">
					<section className="w-5/12">
						<ul className="flex flex-col gap-y-7 text-gray-650 text-2xl capitalize">
							<li className="flex flex-col gap-y-2">
								<h3 className="font-bold">phone</h3>
								<span>09361759625</span>
							</li>
							<li className="flex flex-col gap-y-2">
								<h3 className="font-bold">email</h3>
								<span className="normal-case">Glimpse@gmail.com</span>
							</li>
							<li className="flex flex-col gap-y-2">
								<h3 className="font-bold">address</h3>
								<span>Beheshti University _ Tehran</span>
							</li>
						</ul>
					</section>
					<section className="w-7/12 relative h-113">
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
