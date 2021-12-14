import React from "react";
// components
import Nav from "../../components/Nav";

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
			</main>
		</>
	);
};

export default PricingPlans;
