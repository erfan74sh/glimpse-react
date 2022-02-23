import React from "react";
// components
import Nav from "../../components/Nav";
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
				<header className="mb-14" dir="rtl">
					<h1 className="font-irancell border-blue-550 text-blue-550 border-r-4 pr-3 text-3xl font-bold uppercase leading-8">
						برنامه فروش
					</h1>
				</header>
				<section className=" py-16" dir="rtl">
					<RecomendedPackages />
				</section>
			</main>
		</>
	);
};

export default PricingPlans;
