import React from "react";
import { Link } from "react-router-dom";
// components
import Nav from "../../components/Nav";
// assets
import HeroImage from "../../assets/images/header-image.png";
// style
import "./Home.scss";

const Home = () => {
	return (
		<>
			<header className="">
				<Nav />
				<section
					className="relative flex flex-col items-center mt-10"
					id="header__hero"
				>
					<div className="h-screen relative w-1/2">
						<div className="absolute bottom-44 left-0 w-max ">
							<h1 className="mb-4 text-5xl text-white font-extrabold">
								platform title here
							</h1>
							<button
								type="button"
								className="px-9 py-4 bg-white rounded-b-full rounded-t-full text-lg text-blue-550 font-medium border-none outline-none hover:bg-blue-550 hover:text-white transition-all"
							>
								<Link to="/estimation">calculate now</Link>
							</button>
						</div>
					</div>
					<div className="w-1/2 text-lg font-medium">
						<h2 className="mb-2 text-center text-blue-550 font-bold">
							Glimpse
						</h2>
						<p className="text-justify leading-6">
							Civil engineering is a professional engineering discipline that
							deals with the design, construction, and maintenance of the
							physical and naturally built environment, including public works
							such as roads, bridges, canals, dams, airports, sewerage systems,
							pipelines, structural components of buildings, and railways.
							<br />g from military engineering. Civil engineering can take
							place in the public sector from municipal public works departments
							through to federal government agencies, and in the private sector
							from locally based firms to global Fortune 500 companies.
						</p>
					</div>
				</section>
			</header>
		</>
	);
};

export default Home;
