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
						<MapContainer />
					</section>
				</div>
			</main>
		</>
	);
};

export default ContactUs;
