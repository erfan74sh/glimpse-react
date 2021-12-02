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
				<section>
					<img src={HeroImage} alt="header image" />
					<div>
						<h1>platform title here</h1>
						<button type="button">
							<Link to="/estimation">calculate now</Link>
						</button>
					</div>
					<p>
						Civil engineering is a professional engineering discipline that
						deals with the design, construction, and maintenance of the physical
						and naturally built environment, including public works such as
						roads, bridges, canals, dams, airports, sewerage systems, pipelines,
						structural components of buildings, and railways. g from military
						engineering. Civil engineering can take place in the public sector
						from municipal public works departments through to federal
						government agencies, and in the private sector from locally based
						firms to global Fortune 500 companies.
					</p>
				</section>
			</header>
		</>
	);
};

export default Home;
