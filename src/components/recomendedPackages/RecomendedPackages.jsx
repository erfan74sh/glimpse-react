import React from "react";
// components
import PriceCard from "../cards/PriceCard";

const packagesCategories = [
	{
		categoryName: "آزمایشی",
		packagesList: [
			{ period: "۱۵ روزه", options: ["۴۰ عدد شبیه‌سازی"], paymentpriceIRR: 0 },
		],
	},
	{
		categoryName: "دانشجویی",
		packagesList: [
			{
				period: "یک ماهه",
				options: ["۳۰۰ عدد شبیه‌سازی"],
				price: "۴۹",
				paymentpriceIRR: 490000,
			},
			{
				period: "سه ماهه",
				options: ["۱۵۰۰ عدد شبیه‌سازی"],
				price: "۱۳۹",
				paymentpriceIRR: 1390000,
			},
			{
				period: "شش ماهه",
				options: ["۵۰۰۰ عدد شبیه‌سازی"],
				price: "۲۶۹",
				paymentpriceIRR: 2690000,
			},
		],
	},
	{
		categoryName: "حرفه‌ای",
		packagesList: [
			{
				period: "یک ماهه",
				options: ["۴۵۰ عدد شبیه‌سازی"],
				price: "۷۴",
				paymentpriceIRR: 740000,
			},
			{
				period: "سه ماهه",
				options: ["۲۵۰۰ عدد شبیه‌سازی"],
				price: "۲۳۹",
				paymentpriceIRR: 2390000,
			},
			{
				period: "شش ماهه",
				options: ["۸۰۰۰ عدد شبیه‌سازی"],
				price: "۴۶۹",
				paymentpriceIRR: 4690000,
			},
		],
	},
];

const RecomendedPackages = () => {
	return (
		<ul className="font-irancell flex justify-center gap-x-28">
			{packagesCategories.map((category, idx) => {
				return (
					<li key={idx} className="flex flex-col items-center gap-y-10">
						<h3 className="text-blue-550 text-3xl font-bold">
							{category.categoryName}
						</h3>
						<ul className="flex flex-col gap-y-6">
							{category.packagesList.map((_package, idx) => {
								return (
									<li key={idx}>
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
