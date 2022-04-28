import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faInstagramSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// components
import Nav from "../../components/Nav";
import ContactUsMap from "./ContactUsMap";
// constants
import { contactUsInfo } from "../../constants";

const ContactUs = () => {
	return (
		<>
			<header className="">
				<Nav lang="persian" />
			</header>
			<main className="px-5 py-16 md:px-10 lg:px-24">
				<header className="mb-16" dir="rtl">
					<h1 className="font-irancell border-blue-550 text-blue-550 text-center text-3xl font-bold uppercase leading-8 md:border-r-4 md:pr-3 md:text-right">
						تماس با ما
					</h1>
				</header>
				<div className="lg:gap-x-18  flex flex-col gap-x-5 gap-y-10 md:flex-row xl:gap-x-24">
					<section className="w-full md:w-1/2">
						<ul className="text-gray-650 flex flex-col flex-wrap divide-gray-300">
							<li className="flex gap-x-3 py-3">
								<FontAwesomeIcon
									icon={faInstagramSquare}
									className="text-2xl"
								/>
								<span>{contactUsInfo.instagram.username}</span>
							</li>
							<li className="flex gap-x-3 py-3">
								<FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
								<span>{contactUsInfo.linkedin.username}</span>
								<div className="flex flex-col gap-y-2"></div>
							</li>
							<li className="flex gap-x-3 py-3">
								<FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
								<span>{contactUsInfo.email.username}</span>
							</li>
							<li className="font-irancell flex gap-x-3 py-3">
								<FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" />
								<span>{contactUsInfo.phoneNumber}</span>
							</li>
						</ul>
						<div className="my-5">
							<ContactUsMap />
						</div>
						<div dir="rtl" className="font-irancell">
							{contactUsInfo.location.address}
						</div>
					</section>
					<section className="font-irancell relative w-full md:w-1/2" dir="rtl">
						<form className="flex flex-col gap-y-6">
							<h2 className="text-gray-650 text-lg font-semibold">
								از ما بپرسید.
							</h2>
							<input
								type="text"
								name="name"
								placeholder="نام و نام خانوادگی"
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<input
								type="email"
								name="email"
								placeholder="ایمیل"
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<input
								type="text"
								name="subject"
								placeholder="موضوع"
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<textarea
								rows={10}
								name="message"
								placeholder="پیام خود را بنویسید ..."
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<button
								type="submit"
								className="bg-blue-550 hover:shadow-b-sm self-start rounded-md px-8 py-1 capitalize text-white transition"
							>
								ارسال
							</button>
						</form>
					</section>
				</div>
			</main>
		</>
	);
};

export default ContactUs;
