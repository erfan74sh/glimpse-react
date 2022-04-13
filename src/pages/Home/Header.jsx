import React from "react";

const Header = ({ handleShowModal }) => {
	return (
		<header
			className="relative mt-10 flex flex-col items-center font-irancell"
			id="header__hero"
		>
			<div className="relative h-screen w-1/2">
				<section className="absolute bottom-44 left-0 w-max ">
					<h1 className="mb-4 text-5xl font-extrabold text-white">BSPsim</h1>
					<button
						type="button"
						className="outline-none rounded-b-full rounded-t-full border-none bg-white px-9 py-4 text-lg font-medium text-blue-550 transition-all hover:bg-blue-550 hover:text-white"
						onClick={handleShowModal}
					>
						شروع به شبیه‌سازی
					</button>
				</section>
			</div>
			<section className="w-1/2 text-lg font-medium" dir="rtl">
				<h2 className="mb-9 text-center text-2xl font-bold text-blue-550">
					BSPsim چیست؟
				</h2>
				<p className="text-justify leading-6 text-gray-650">
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
