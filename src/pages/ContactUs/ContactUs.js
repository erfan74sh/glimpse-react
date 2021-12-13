import React from "react";
// components
import Nav from "../../components/Nav";

const ContactUs = () => {
	return (
		<>
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-24">
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						contact us
					</h1>
				</header>

				<section>
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
			</main>
		</>
	);
};

export default ContactUs;
