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
import RecomendedPackages from "../../components/recomendedPackages/RecomendedPackages";

const PricingPlans = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main id="pricing-container" className="px-24 py-16">
				<header className="text-gray-650 text-center text-3xl font-bold">
					<h1>Choose a plan that’s right for you</h1>
				</header>
				<section className=" py-16" dir="rtl">
					<RecomendedPackages />
				</section>
			</main>
		</>
	);
};

export default PricingPlans;
