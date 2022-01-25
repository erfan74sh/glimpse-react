import React from "react";
// components
import Nav from "../../components/Nav";
// assets
import GoldBadge from "../../assets/images/badge-gold.png";
import SilverBadge from "../../assets/images/badge-silver.png";
import BronzeBadge from "../../assets/images/badge-bronze.png";
import { Link } from "react-router-dom";
// style
import "./PricingPlan.scss";

const PricingPlans = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main id="pricing-container" className="px-24 py-16">
				<header className="text-center text-4xl text-gray-650 font-bold">
					<h1>
						Choose a plan that’s right
						<br />
						for you
					</h1>
				</header>
				<section className="flex gap-x-10 justify-center py-16">
					<article className="w-84 h-133 flex flex-col items-center px-10 py-7 pt-3 bg-white rounded-3xl shadow-full transition-all transform hover:scale-110">
						<img src={GoldBadge} alt="gold badge" />
						<h3 className="mb-4 text-4xl font-bold text-blue-550 uppercase">
							gold
						</h3>
						<ul className="flex flex-col items-center">
							<li>30 Calculation </li>
							<li>45 Revision</li>
							<li>Numerical Results</li>
							<li>Simulation</li>
							<li>Rhino And Revit</li>
							<li> Grasshopper Exports</li>
							<li>Design Suggestions</li>
						</ul>
						<button
							type="button"
							className="mt-auto px-8 py-1 text-white text-lg bg-blue-550 rounded-lg transition-all hover:shadow-b-sm"
						>
							<Link to="#">buy now</Link>
						</button>
					</article>
					<article className="w-84 h-133 flex flex-col items-center px-10 py-7 pt-3 bg-white rounded-3xl shadow-full transition-all transform hover:scale-110">
						<img src={SilverBadge} alt="gold badge" />
						<h3 className="mb-4 text-4xl font-bold text-blue-550 uppercase">
							silver
						</h3>
						<ul className="flex flex-col items-center">
							<li>15 Calculation </li>
							<li>20 Revision</li>
							<li>Numerical Results</li>
							<li>Simulation</li>
							<li>Rhino And Revit</li>
							<li>Exports</li>
						</ul>
						<button
							type="button"
							className="mt-auto px-8 py-1 text-white text-lg bg-blue-550 rounded-lg transition-all hover:shadow-b-sm"
						>
							<Link to="#">buy now</Link>
						</button>
					</article>

					<article className="w-84 h-133 flex flex-col items-center px-10 py-7 pt-3 bg-white rounded-3xl shadow-full transition-all transform hover:scale-110">
						<img src={BronzeBadge} alt="gold badge" />
						<h3 className="mb-4 text-4xl font-bold text-blue-550 uppercase">
							bronze
						</h3>
						<ul className="flex flex-col items-center">
							<li>2 Calculation </li>
							<li>4 Revision</li>
							<li>Numerical Results</li>
						</ul>
						<button
							type="button"
							className="mt-auto px-8 py-1 text-white text-lg bg-blue-550 rounded-lg transition-all hover:shadow-b-sm"
						>
							<Link to="#">buy now</Link>
						</button>
					</article>
				</section>
			</main>
		</>
	);
};

export default PricingPlans;
