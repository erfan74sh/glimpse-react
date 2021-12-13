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
				<header>
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						contact us
					</h1>
				</header>

				<section>
					<ul>
						<li>
							<h3>phone</h3>
							<span>09361759625</span>
						</li>
						<li>
							<h3>email</h3>
							<span>Glimpse@gmail.com</span>
						</li>
						<li>
							<h3>address</h3>
							<span>Beheshti University _ Tehran</span>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
};

export default ContactUs;
