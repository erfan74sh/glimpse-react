import React from "react";
import Axios from "axios";
// components
import PriceCard from "../cards/PriceCard";
// constants
import { packagesCategories } from "../../constants";

const RecomendedPackages = () => {
	const handlePayment = async (price, description) => {
		try {
			const response = await Axios.post(
				"https://api.zarinpal.com/pg/v4/payment/request.json",
				{
					merchant_id: "1344b5d4-0048-11e8-94db-005056a205be",
					amount: price,
					callback_url: "http://localhost:3000/pricing",
					description: description,
				}
			);
			const { code, authority } = response.data.data;
			console.log({ code, authority });
			if (code === 100 && authority) {
				window.location.href = `https://www.zarinpal.com/pg/StartPay/${authority}`;
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ul className="font-irancell lg:gap-x-18 flex flex-col justify-between gap-y-10 gap-x-5 md:flex-row lg:justify-center">
			{packagesCategories.map((category, idx) => {
				return (
					<li key={idx} className="flex flex-col items-center gap-y-10">
						<h3 className="text-blue-550 text-3xl font-bold">
							{category.categoryName}
						</h3>
						<ul className="flex flex-col gap-y-6">
							{category.packagesList.map((_package, idx) => {
								const description = `خرید بسته ${category.categoryName} ${_package.period} شامل ${_package.options[0]}`;
								return (
									<li
										key={idx}
										onClick={() =>
											handlePayment(_package.paymentpriceIRR, description)
										}
									>
										<PriceCard
											period={_package.period}
											options={_package.options}
											price={_package.price}
										/>
									</li>
								);
							})}
						</ul>
					</li>
				);
			})}
		</ul>
	);
};

export default RecomendedPackages;
