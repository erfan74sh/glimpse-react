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
import ContactUsMap from "./ContactUsMap";

const ContactUs = () => {
	return (
		<>
			<header className="">
				<Nav lang="persian" />
			</header>
			<main className="px-24 py-16">
				<header className="mb-16" dir="rtl">
					<h1 className="font-irancell border-blue-550 text-blue-550 border-r-4 pr-3 text-3xl font-bold uppercase leading-8">
						تماس با ما
					</h1>
				</header>
				<div className="flex">
					<section className="w-1/2 pr-20">
						<ul className="text-gray-650 flex gap-x-14 capitalize">
							<div className="flex w-1/2 flex-col divide-y-2 divide-gray-300">
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">phone</h3>
										<span>021-88929017</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">email</h3>
										<span className="normal-case">Info@bsp.green</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">address</h3>
										<span>
											Faculty of Architecture and Urban Planning, Building No.
											2, Shahid Beheshti University
										</span>
									</div>
								</li>
							</div>
							<div className="flex w-1/2 flex-col divide-y-2 divide-gray-300">
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon
										icon={faInstagramSquare}
										className="text-2xl"
									/>
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">instagram</h3>
										<span>BSP.sim</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">linkedin</h3>
										<span>BSP.sim</span>
									</div>
								</li>
								<li className="flex gap-x-3 py-3">
									<FontAwesomeIcon icon={faTwitter} className="text-2xl" />
									<div className="flex flex-col gap-y-2">
										<h3 className="font-bold">twitter</h3>
										<span>BSP.sim</span>
									</div>
								</li>
							</div>
						</ul>
						<div className="mt-5">
							<ContactUsMap />
						</div>
					</section>
					<section
						className="h-113 font-irancell relative w-1/2 pl-14"
						dir="rtl"
					>
						<form className="flex flex-col gap-y-6">
							<h2 className="text-gray-650 text-lg font-semibold">
								از ما بپرسید.
							</h2>
							<input
								type="text"
								name="name"
								placeHolder="نام و نام خانوادگی"
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<input
								type="email"
								name="email"
								placeHolder="ایمیل"
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<input
								type="text"
								name="subject"
								placeHolder="موضوع"
								className="rounded-xl border border-gray-400 bg-gray-200 px-6 py-2 outline-none focus:ring-2"
							/>
							<textarea
								rows={10}
								name="message"
								placeHolder="پیام خود را بنویسید ..."
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
