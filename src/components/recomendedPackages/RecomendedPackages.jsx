import React from "react";
// components
import PriceCard from "../cards/PriceCard";

const packagesCategories = [
	{
		categoryName: "آزمایشی",
		packagesList: [{ period: "۱۵ روزه", options: ["۴۰ عدد شبیه‌سازی"] }],
	},
	{
		categoryName: "دانشجویی",
		packagesList: [
			{ period: "یک ماهه", options: ["۳۰۰ عدد شبیه‌سازی"], price: "۴۹" },
			{ period: "سه ماهه", options: ["۱۵۰۰ عدد شبیه‌سازی"], price: "۱۳۹" },
			{ period: "شش ماهه", options: ["۵۰۰۰ عدد شبیه‌سازی"], price: "۲۶۹" },
		],
	},
	{
		categoryName: "حرفه‌ای",
		packagesList: [
			{ period: "یک ماهه", options: ["۴۵۰ عدد شبیه‌سازی"], price: "۷۴" },
			{ period: "سه ماهه", options: ["۲۵۰۰ عدد شبیه‌سازی"], price: "۲۳۹" },
			{ period: "شش ماهه", options: ["۸۰۰۰ عدد شبیه‌سازی"], price: "۴۶۹" },
		],
	},
];

const RecomendedPackages = () => {
	return (
		<ul>
			{packagesCategories.map((category, idx) => {
				return (
					<li key={idx}>
						<h3>{category.categoryName}</h3>
						<ul>
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
