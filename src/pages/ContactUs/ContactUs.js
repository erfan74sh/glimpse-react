import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhoneAlt,
	faEnvelope,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faInstagramSquare,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// components
import Nav from "../../components/Nav";
import ContactUsMap from "./ContactUsmap";

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
					<section className="w-1/2 pr-20">
						<ul className="flex gap-x-14 text-gray-650 capitalize">
							<div className="flex flex-col divide-y-2 divide-gray-300 w-1/2">
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">phone</h3>
										<span>09121395045</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">email</h3>
										<span className="normal-case">info@bsp.grezen</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">address</h3>
										<span>Beheshti University _ Tehran</span>
									</div>
								</li>
							</div>
							<div className="flex flex-col divide-y-2 divide-gray-300 w-1/2">
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon
										icon={faInstagramSquare}
										className="text-2xl"
									/>
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">instagram</h3>
										<span>@glimpse.app</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">linkedin</h3>
										<span>glimpse.app</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faTwitter} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">twitter</h3>
										<span>@glimpse.app</span>
									</div>
								</li>
							</div>
						</ul>
						<div className="mt-5">
							<ContactUsMap />
						</div>
					</section>
					<section className="w-1/2 pl-14 relative h-113">
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
								rows={10}
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
