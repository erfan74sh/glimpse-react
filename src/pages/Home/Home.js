import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import Nav from "../../components/Nav";
// assets

import Logo from "../../assets/images/logo-02.png";
import FooterImage from "../../assets/images/footer-image.png";
import Modal from "../../components/modal";
import EstimationModal from "./EstimationModal";
// icons
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// style
import "./Home.scss";
import RecomendedPackages from "../../components/recomendedPackages/RecomendedPackages";
import WorkingProcess from "./WorkingProcess";
import Simulations from "./Simulations";

const Home = () => {
	const [showEstimateModal, setShowEstimateModal] = useState(false);

	return (
		<>
			{showEstimateModal && (
				<Modal
					title="start estimation"
					closeModal={() => setShowEstimateModal(false)}
				>
					<EstimationModal />
				</Modal>
			)}
			<Nav />
			<header
				className="relative mt-10 flex flex-col items-center"
				id="header__hero"
			>
				<div className="relative h-screen w-1/2">
					<section className="absolute bottom-44 left-0 w-max ">
						<h1 className="mb-4 text-5xl font-extrabold text-white">
							platform title here
						</h1>
						<button
							type="button"
							className="text-blue-550 hover:bg-blue-550 rounded-b-full rounded-t-full border-none bg-white px-9 py-4 text-lg font-medium outline-none transition-all hover:text-white"
							onClick={() => setShowEstimateModal(true)}
						>
							calculate now
						</button>
					</section>
				</div>
				<section className="w-1/2 text-lg font-medium">
					<h2 className="text-blue-550 mb-2 text-center font-bold">Glimpse</h2>
					<p className="text-justify leading-6">
						Civil engineering is a professional engineering discipline that
						deals with the design, construction, and maintenance of the physical
						and naturally built environment, including public works such as
						roads, bridges, canals, dams, airports, sewerage systems, pipelines,
						structural components of buildings, and railways.
						<br />g from military engineering. Civil engineering can take place
						in the public sector from municipal public works departments through
						to federal government agencies, and in the private sector from
						locally based firms to global Fortune 500 companies.
					</p>
				</section>
			</header>
			<main className="mt-24" dir="rtl">
				<div id="work-frame">
					<WorkingProcess />
					<Simulations />
				</div>
				<section className="pb-40">
					<header className="flex flex-col-reverse items-center pb-12">
						<h3 className="text-blue-550 text-2xl font-bold">
							بسته‌های پیشنهادی
						</h3>
					</header>
					<RecomendedPackages />
				</section>
			</main>
			<footer className="bg-gray-100 " dir="rtl">
				<div className="border-blue-550 relative mx-80 flex gap-x-28 border-t-2 pt-10">
					<section className="flex flex-col gap-y-8">
						<h4 className="text-gray-650 text-2xl font-medium">
							want to talk with us?
						</h4>
						<ul className="flex flex-grow flex-col justify-between gap-y-4">
							<li className="flex items-center gap-x-3">
								<span className="shadow-neo-sm flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
									<FontAwesomeIcon
										icon={faPhoneAlt}
										size="lg"
										className="text-blue-550"
									/>
								</span>
								<span className="font-medium text-gray-500">
									contact@glimpse.com
								</span>
							</li>
							<li className="flex items-center gap-x-3">
								<span className="shadow-neo-sm flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
									<FontAwesomeIcon
										icon={faEnvelope}
										size="lg"
										className="text-blue-550"
									/>
								</span>
								<span className="font-medium text-gray-500">0913-333-7004</span>
							</li>
						</ul>
					</section>
					<section className="flex flex-col gap-y-8">
						<h4 className="text-gray-650 text-2xl font-medium">Our Company</h4>
						<nav className="flex-grow">
							<ul className="flex h-full flex-col justify-between text-gray-500 ">
								<li>
									<Link
										to="/"
										className="border-b-2 border-transparent transition-all hover:border-gray-600 hover:text-gray-600"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="border-b-2 border-transparent transition-all hover:border-gray-600 hover:text-gray-600"
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="border-b-2 border-transparent transition-all hover:border-gray-600 hover:text-gray-600"
									>
										Our Technology
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="border-b-2 border-transparent transition-all hover:border-gray-600 hover:text-gray-600"
									>
										Latest Paper
									</Link>
								</li>
							</ul>
						</nav>
					</section>
					<form className="flex flex-grow flex-col gap-y-4">
						<input
							type="email"
							placeholder="Email Address"
							className="shadow-neo rounded-full border-none bg-gray-100 py-3 px-4 outline-none"
						/>
						<textarea
							placeholder="message"
							className="shadow-neo flex-grow rounded-2xl border-none bg-gray-100 py-3 px-4 outline-none"
						/>
					</form>
				</div>
				<img src={FooterImage} alt="" className="-mt-45 mx-auto h-auto w-2/3" />
				<section className="flex flex-col items-center py-10">
					<img src={Logo} alt="glimpse logo" className="h-auto w-48" />
					<p className="text-sm font-normal text-gray-500">
						Designed By Glimpse Team
					</p>
				</section>
			</footer>
		</>
	);
};

export default Home;
