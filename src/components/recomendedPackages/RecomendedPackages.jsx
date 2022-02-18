import React from "react";

const packagesCategories = [
	{
		categoryName: "آزمایشی",
		packagesList: [{ period: "۱۵ روزه", options: ["40 عدد شبیه‌سازی"] }],
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
	return <div>RecomendedPackages</div>;
};

export default RecomendedPackages;
