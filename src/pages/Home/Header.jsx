import React from "react";
// assets
import HeaderImg from "../../assets/images/header-image.png";

const Header = ({ handleShowModal }) => {
	return (
		<header
			className="font-irancell relative mt-10 flex flex-col items-center"
			id="header__hero"
		>
			<div className="relative">
				<img src={HeaderImg} alt="header" className="" />
				<section className="absolute top-1/2 flex w-full transform flex-col items-center px-5 md:px-10 lg:-translate-y-40 lg:items-center">
					<h1 className="mb-4 text-5xl font-extrabold text-white">BSPsim</h1>
					<button
						type="button"
						className="text-blue-550 hover:bg-blue-550 rounded-b-full rounded-t-full border-none bg-white px-9 py-4 text-lg font-medium outline-none transition-all hover:text-white"
						onClick={handleShowModal}
					>
						شروع به شبیه‌سازی
					</button>
				</section>
			</div>
			<section
				className="xl:px-18 px-5 text-lg font-medium md:px-10 lg:absolute lg:bottom-0 lg:w-4/5 xl:w-2/3"
				dir="rtl"
			>
				<h2 className="text-blue-550 mb-9 text-center text-2xl font-bold">
					BSPsim چیست؟
				</h2>
				<p className="text-gray-650 text-justify leading-6">
					BSPsim ابزار جامع و یکپارچه شبیه‌سازی است که به کمک الگوریتم‌های هوش
					مصنوعی به ارزیابی عملکرد ساختمان می‌پردازد. این ابزار برای تمام
					ذینفعان صنعت ساختمان، فارغ از تخصص آنها، ارزیابی‌هایی در حوزه‌های
					متعدد انرژی، آسایش حرارتی، نور، آکوستیک، حریق و ...، در مقیاس‌های
					مختلف، در کمترین زمان و بالاترین دقت، ارائه می‌دهد. به کمک این ابزار،
					نتایج پیچیده‌ترین محاسبات و شبیه‌سازی‌ها به منظور کشف بهترین پاسخ‌ها،
					مقایسه گزینه‌ها و سنجش انطباق شرایط با استانداردهای ملی و بین‌المللی
					در اختیار کاربر قرار می‌گیرد.<br></br>
					همانطور که در نمودار زیر مشخص است، تصمیمات در مرحله طراحی اولیه،
					هزینه‌های کمتر و تاثیر بیشتری بر پروژه دارند. فرآیند طراحی سنتی
					نیازمند تلاش و هزینه‌‌ی بیشتری در مرحله‌ی مستند سازی بوده در حالی که
					فرایند طراحی یکپارچه و بهینه نیازمند تلاش بیشتری در مراحل ابتدایی
					پروژه است.<br></br>
					به کمک این ابزار قادر خواهید بود، تصمیمات صحیحی را در مراحل اولیه
					طراحی اتخاذ نمایید تا با صرف هزینه کمتر، بیشترین اثر گذاری را در مصرف
					انرژی و کیفیت محیط داخل شاهد باشید.
				</p>
			</section>
		</header>
	);
};

export default Header;
