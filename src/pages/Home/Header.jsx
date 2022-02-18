import React from "react";

const Header = ({ handleShowModal }) => {
	return (
		<header
			className="relative mt-10 flex flex-col items-center"
			id="header__hero"
		>
			<div className="relative h-screen w-1/2">
				<section className="absolute bottom-44 left-0 w-max ">
					<h1 className="mb-4 text-5xl font-extrabold text-white">
						platform title here
					</h1>
					<button
						type="button"
						className="text-blue-550 hover:bg-blue-550 rounded-b-full rounded-t-full border-none bg-white px-9 py-4 text-lg font-medium outline-none transition-all hover:text-white"
						onClick={handleShowModal}
					>
						شروع به شبیه‌سازی
					</button>
				</section>
			</div>
			<section className="w-1/2 text-lg font-medium" dir="rtl">
				<h2 className="text-blue-550 mb-9 text-center text-2xl font-bold">
					بی‌اس‌پی سیم چیست؟
				</h2>
				<p className="text-gray-650 text-justify leading-6">
					BSPsim ابزار جامع و یکپارچه شبیه سازی است که به کمک الگوریتم های هوش
					مصنوعی به ارزیابی عملکرد ساختمان می پردازد. این ابزار برای تمام
					ذینفعان صنعت ساختمان قابل استفاده است و فارغ از تخصص آنها، ارزیابی
					هایی در حوزه های متعدد انرژی، آسایش حرارتی، نور، آکوستیک، حریق و ..،
					در مقیاس های مختلف، در کمترین زمان و بالاترین دقت ارائه می دهد. در هر
					بخش، ورودی ها و اطلاعات مورد نیاز بسادگی قابل تعریف بوده و تنها با چند
					کلیک به سرعت نتایج پیچیده ترین محاسبات و شبیه سازی ها به منظور کشف
					بهترین پاسخ ها، مقایسه گزینه ها، و سنجش انطباق شرایط با استانداردهای
					ملی و بین المللی در اختیار کاربر قرار می گیرد.مخاطب اصلی این ابزار
					دفاتر طراحی و مهندسین مشاور ساختمان، محققین حوزه های انرژی و محیط،
					سازه، معماری و ...، دانشجویان، مالکین و بهره برداران ساختمان ها،
					پیمانکاران، و تمام افرادی است که به دنبال اطلاعاتی از عملکرد های
					ساختمان و اجزاء آن هستند.
				</p>
			</section>
		</header>
	);
};

export default Header;
