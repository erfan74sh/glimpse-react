import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import Nav from "../../components/Nav";
// assets
import SimulationIcon from "../../assets/icons/simulation.png";
import AnalyzingIcon from "../../assets/icons/analysing.png";
import DataSetIcon from "../../assets/icons/building-data-set.png";
import MachineLearningIcon from "../../assets/icons/machine-learning.png";
import ResultIcon from "../../assets/icons/result.png";
import Logo from "../../assets/images/logo-02.png";
import FooterImage from "../../assets/images/footer-image.png";
import Modal from "../../components/modal/Modal";
// icons
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// style
import "./Home.scss";

const Home = () => {
	return (
		<>
			<Modal />
			<Nav />
			<header
				className="relative flex flex-col items-center mt-10"
				id="header__hero"
			>
				<div className="h-screen relative w-1/2">
					<section className="absolute bottom-44 left-0 w-max ">
						<h1 className="mb-4 text-5xl text-white font-extrabold">
							platform title here
						</h1>
						<button
							type="button"
							className="px-9 py-4 bg-white rounded-b-full rounded-t-full text-lg text-blue-550 font-medium border-none outline-none hover:bg-blue-550 hover:text-white transition-all"
						>
							<Link to="/estimation">calculate now</Link>
						</button>
					</section>
				</div>
				<section className="w-1/2 text-lg font-medium">
					<h2 className="mb-2 text-center text-blue-550 font-bold">Glimpse</h2>
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
			<main className="bg-gray-100 mt-24">
				<header className="bg-white text-center">
					<h2 className="text-blue-550 font-medium">Work Frame</h2>
				</header>
				<div id="work-frame">
					<section>
						<header className="bg-white text-center">
							<h3 className="text-2xl font-bold text-gray-650">
								Our Working Process
							</h3>
						</header>
						<ul className="flex justify-between px-56 py-16">
							<li className="flex flex-col items-center">
								<div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 shadow-neo">
									<img
										src={SimulationIcon}
										alt="icon"
										className="w-1/2 h-1/2 object-contain"
									/>
								</div>
								<span className="font-medium">Simulation</span>
							</li>
							<li className="flex flex-col items-center">
								<div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 shadow-neo">
									<img
										src={AnalyzingIcon}
										alt="icon"
										className="w-1/2 h-1/2 object-contain"
									/>
								</div>
								<span className="font-medium">Analysing</span>
							</li>
							<li className="flex flex-col items-center">
								<div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 shadow-neo">
									<img
										src={DataSetIcon}
										alt="icon"
										className="w-1/2 h-1/2 object-contain"
									/>
								</div>
								<span className="font-medium">Bulding Data-set</span>
							</li>
							<li className="flex flex-col items-center">
								<div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 shadow-neo">
									<img
										src={MachineLearningIcon}
										alt="icon"
										className="w-1/2 h-1/2 object-contain"
									/>
								</div>
								<span className="text-center font-medium">
									Machine Learning
									<br /> Process
								</span>
							</li>
							<li className="flex flex-col items-center">
								<div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-100 shadow-neo">
									<img
										src={ResultIcon}
										alt="icon"
										className="w-3/5 h-3/5 object-contain"
									/>
								</div>
								<span className="font-medium">Results</span>
							</li>
						</ul>
					</section>
					<section className="pt-20 pb-28">
						<header className="pb-6">
							<h3 className="text-2xl text-center font-bold text-blue-550">
								Number of Simulations
							</h3>
						</header>
						<ul className="flex justify-center gap-x-24">
							<li
								id="structure-simulations"
								className="w-40 h-56 flex flex-col items-center gap-y-4 pt-4 text-lg rounded-lg"
							>
								<span className="font-medium text-gray-650">Structure</span>
								<span className="text-xl text-gray-600 font-bold">+7500</span>
							</li>
							<li
								id="energy-simulations"
								className="w-40 h-56 flex flex-col items-center gap-y-4 pt-4 text-lg rounded-lg"
							>
								<span className="font-medium text-gray-650">Energy</span>
								<span className="text-xl text-gray-600 font-bold">+5800</span>
							</li>
							<li
								id="ieq-simulations"
								className="w-40 h-56 flex flex-col items-center gap-y-4 pt-4 text-lg rounded-lg"
							>
								<span className="font-medium text-gray-650">IEQ</span>
								<span className="text-xl text-gray-600 font-bold">+5900</span>
							</li>
						</ul>
					</section>
				</div>
				<section className="pb-40">
					<header className="flex flex-col-reverse items-center pb-36">
						<h3 className="text-2xl font-bold text-gray-650">
							Our Pricing Plans
						</h3>
						<span className="text-blue-550 font-medium">Best Pricing</span>
					</header>
					<section className="flex justify-center gap-x-12">
						<article className="flex flex-col items-center relative group">
							<header className=" absolute -top-18 flex flex-col items-center justify-center w-36 h-36 rounded-full text-xl bg-gray-100 shadow-neo border-2 border-gray-100 group-hover:border-blue-550 transition-all">
								<span>12000</span>
								<span>Rls</span>
							</header>
							<section className="w-80 h-100 flex flex-col items-center gap-y-2 pt-20 pb-5 px-5 rounded-5xl bg-gray-100 shadow-neo border-2 border-gray-100 group-hover:border-blue-550 transition-all">
								<h5 className="text-xl font-medium">Basic</h5>
								<ul className="flex flex-col items-center text-lg">
									<li>2 Calculation</li>
									<li>4 Revision</li>
									<li>Numerical Results</li>
								</ul>
								<button
									type="button"
									className="mt-auto py-1 px-4 rounded-full text-gray-600 font-medium bg-gray-100 shadow-neo-sm hover:bg-blue-550 hover:text-white transition-all"
								>
									buy now
								</button>
							</section>
						</article>
						<article className="flex flex-col items-center relative group">
							<header className=" absolute -top-18 flex flex-col items-center justify-center w-36 h-36 rounded-full text-xl bg-gray-100 shadow-neo border-2 border-gray-100 group-hover:border-blue-550 transition-all">
								<span>12000</span>
								<span>Rls</span>
							</header>
							<section className="w-80 h-100 flex flex-col items-center gap-y-2 pt-20 pb-5 px-5 rounded-5xl bg-gray-100 shadow-neo border-2 border-gray-100 group-hover:border-blue-550 transition-all">
								<h5 className="text-xl font-medium">Standard</h5>
								<ul className="flex flex-col items-center text-lg">
									<li>15 Calculation</li>
									<li>20 Revision</li>
									<li>Numerical Results</li>
									<li>Simulation</li>
									<li>Rhino And Revit Exports</li>
								</ul>
								<button
									type="button"
									className="mt-auto py-1 px-4 rounded-full text-gray-600 font-medium bg-gray-100 shadow-neo-sm hover:bg-blue-550 hover:text-white transition-all"
								>
									buy now
								</button>
							</section>
						</article>
						<article className="flex flex-col items-center relative group">
							<header className=" absolute -top-18 flex flex-col items-center justify-center w-36 h-36 rounded-full text-xl bg-gray-100 shadow-neo border-2 border-gray-100 group-hover:border-blue-550 transition-all">
								<span>1200</span>
								<span>Rls</span>
							</header>
							<section className="w-80 h-100 flex flex-col items-center gap-y-2 pt-20 pb-5 px-5 rounded-5xl bg-gray-100 shadow-neo border-2 border-gray-100 group-hover:border-blue-550 transition-all">
								<h5 className="text-xl font-medium">Business</h5>
								<ul className="flex flex-col items-center text-lg">
									<li>30 Calculation</li>
									<li>45 Revision</li>
									<li>Numerical Results</li>
									<li>Simulation</li>
									<li>Rhino And Revit</li>
									<li>Grasshopper Exports</li>
									<li>Design Suggestions</li>
								</ul>
								<button
									type="button"
									className="mt-auto py-1 px-4 rounded-full text-gray-600 font-medium bg-gray-100 shadow-neo-sm hover:bg-blue-550 hover:text-white transition-all"
								>
									buy now
								</button>
							</section>
						</article>
					</section>
				</section>
			</main>
			<footer className="bg-gray-100 ">
				<div className="pt-10 mx-80 border-t-2 border-blue-550 flex gap-x-28 relative">
					<section className="flex flex-col gap-y-8">
						<h4 className="text-2xl font-medium text-gray-650">
							want to talk with us?
						</h4>
						<ul className="flex flex-col justify-between gap-y-4 flex-grow">
							<li className="flex items-center gap-x-3">
								<span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 shadow-neo-sm">
									<FontAwesomeIcon
										icon={faPhoneAlt}
										size="lg"
										className="text-blue-550"
									/>
								</span>
								<span className="text-gray-500 font-medium">
									contact@glimpse.com
								</span>
							</li>
							<li className="flex items-center gap-x-3">
								<span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 shadow-neo-sm">
									<FontAwesomeIcon
										icon={faEnvelope}
										size="lg"
										className="text-blue-550"
									/>
								</span>
								<span className="text-gray-500 font-medium">0913-333-7004</span>
							</li>
						</ul>
					</section>
					<section className="flex flex-col gap-y-8">
						<h4 className="text-2xl font-medium text-gray-650">Our Company</h4>
						<nav className="flex-grow">
							<ul className="h-full flex flex-col justify-between text-gray-500 ">
								<li>
									<Link
										to="/"
										className="hover:text-gray-600 border-b-2 border-transparent hover:border-gray-600 transition-all"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="hover:text-gray-600 border-b-2 border-transparent hover:border-gray-600 transition-all"
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="hover:text-gray-600 border-b-2 border-transparent hover:border-gray-600 transition-all"
									>
										Our Technology
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="hover:text-gray-600 border-b-2 border-transparent hover:border-gray-600 transition-all"
									>
										Latest Paper
									</Link>
								</li>
							</ul>
						</nav>
					</section>
					<form className="flex flex-col gap-y-4 flex-grow">
						<input
							type="email"
							placeholder="Email Address"
							className="py-3 px-4 bg-gray-100 shadow-neo rounded-full outline-none border-none"
						/>
						<textarea
							placeholder="message"
							className="py-3 px-4 bg-gray-100 shadow-neo rounded-2xl outline-none border-none flex-grow"
						/>
					</form>
				</div>
				<img src={FooterImage} alt="" className="-mt-45 w-2/3 h-auto mx-auto" />
				<section className="flex flex-col items-center py-10">
					<img src={Logo} alt="glimpse logo" className="w-48 h-auto" />
					<p className="text-gray-500 text-sm font-normal">
						Designed By Glimpse Team
					</p>
				</section>
			</footer>
		</>
	);
};

export default Home;
