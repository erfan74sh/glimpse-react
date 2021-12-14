import React from "react";
// components
import Nav from "../../components/Nav";
// assets
import GoldBadge from "../../assets/images/badge-gold.png";
import SilverBadge from "../../assets/images/badge-silver.png";
import BronzeBadge from "../../assets/images/badge-bronze.png";
import { Link } from "react-router-dom";

const PricingPlans = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="text-center text-4xl text-gray-650 font-bold">
					<h1>
						Choose a plan that’s right
						<br />
						for you
					</h1>
				</header>
				<section>
					<article>
						<img src={SilverBadge} alt="gold badge" />
						<h3>silver</h3>
						<ul>
							<li>15 Calculation </li>
							<li>20 Revision</li>
							<li>Numerical Results</li>
							<li>Simulation</li>
							<li>Rhino And Revit</li>
							<li>Exports</li>
						</ul>
						<button type="button">
							<Link to="#">buy now</Link>
						</button>
					</article>
					<article>
						<img src={GoldBadge} alt="gold badge" />
						<h3>gold</h3>
						<ul>
							<li>30 Calculation </li>
							<li>45 Revision</li>
							<li>Numerical Results</li>
							<li>Simulation</li>
							<li>Rhino And Revit</li>
							<li> Grasshopper Exports</li>
							<li>Design Suggestions</li>
						</ul>
						<button type="button">
							<Link to="#">buy now</Link>
						</button>
					</article>
					<article>
						<img src={BronzeBadge} alt="gold badge" />
						<h3>bronze</h3>
						<ul>
							<li>2 Calculation </li>
							<li>4 Revision</li>
							<li>Numerical Results</li>
						</ul>
						<button type="button">
							<Link to="#">buy now</Link>
						</button>
					</article>
				</section>
			</main>
		</>
	);
};

export default PricingPlans;
