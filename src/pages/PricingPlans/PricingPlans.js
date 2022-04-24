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
				<Nav lang="persian" />
			</header>
			<main
				id="pricing-container"
				className="px-5 py-16 sm:px-10 md:px-16 lg:px-24"
			>
				<header className="mb-14" dir="rtl">
					<h1 className="font-irancell border-blue-550 text-blue-550 pr-3 text-center text-3xl font-bold uppercase leading-8 md:border-r-4 md:text-right">
						برنامه فروش
					</h1>
				</header>
				<section className="py-16" dir="rtl">
					<RecomendedPackages />
				</section>
			</main>
		</>
	);
};

export default PricingPlans;
