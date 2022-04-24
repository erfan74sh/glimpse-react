import React from "react";
// components
import Nav from "../../components/Nav";
import MemberCard from "./memberCard/MemberCard";

import pic01 from "./../../assets/profile/01.png";
import pic02 from "./../../assets/profile/02.png";
import pic03 from "./../../assets/profile/03.png";
import pic04 from "./../../assets/profile/04.png";
import pic05 from "./../../assets/profile/05.png";
import pic06 from "./../../assets/profile/06.png";
import pic07 from "./../../assets/profile/07.png";
import pic08 from "./../../assets/profile/08.png";
import pic09 from "./../../assets/profile/09.jpg";
import pic10 from "./../../assets/profile/10.jpg";
import pic11 from "./../../assets/profile/11.jpg";
import pic12 from "./../../assets/profile/12.jpg";
import pic13 from "./../../assets/profile/13.jpg";

const AboutUs = () => {
	const members = [
		{
			fullName: "محمد تحصیلدوست",
			education: "دکتری معماری علوم ساختمان",
			activityScope: "عضو هیئت علمی",
			image: pic05,
		},
		{
			fullName: "زهرا سادات زمردیان",
			education: "دکتری معماری علوم ساختمان",
			activityScope: "عضو هیئت علمی",
			image: pic08,
		},
		{
			fullName: "رهام افغانی",
			education: "دکتری مهندسی سیستم‌های ساختمانی",
			activityScope: "عضو هیئت علمی",
			image: pic09,
		},
		{
			fullName: "پارسا باقرزاده",
			education: "دکتری علوم کامپیوتر",
			activityScope: "هوش مصنوعی",
			image: pic13,
		},
		{
			fullName: "پگاه اشراقی",
			education: "پژوهشگر دکتری انرژی و معماری",
			activityScope: "انرژی - آسایش حرارتی",
			image: pic06,
		},
		{
			fullName: "هانیه نورکجوری",
			education: "ارشد انرژی و معماری",
			activityScope: "نور - حریق",
			image: pic04,
		},
		{
			fullName: "محمد رجائیان هونجانی",
			education: "ارشد تکنولوژی معماری",
			activityScope: "سازه",
			image: pic01,
		},
		{
			fullName: "امیرمحمد ربانی جلالی",
			education: "ارشد تکنولوژی معماری",
			activityScope: "سازه",
			image: pic11,
		},
		{
			fullName: "آرمان نیکخواه",
			education: "ارشد انرژی و معماری",
			activityScope: "آنالیز داده",
			image: pic02,
		},
		{
			fullName: "سوگند حقیقت",
			education: "ارشد انرژی و معماری",
			activityScope: "گرافیک - مکانیک",
			image: pic07,
		},
		{
			fullName: "محمد طباطبایی",
			education: "ارشد انرژی و معماری",
			activityScope: "طراح رایانشی - تولید داده",
			image: pic03,
		},
		{
			fullName: "عرفان شفیعی",
			education: "ارشد معماری",
			activityScope: "توسعه‌دهنده فرانت‌اند",
			image: pic10,
		},
		{
			fullName: "محمدرضا وطنخواه",
			education: "ارشد مهندسی نرم‌افزار",
			activityScope: "توسعه‌دهنده بک‌اند",
			image: pic12,
		},
	];

	return (
		<div className="min-h-screen ">
			<header className="">
				<Nav lang="persian" />
			</header>
			<main
				className="font-irancell lg:px-18 py-16 px-5 md:px-10 xl:px-24"
				dir="rtl"
			>
				<header className="  mb-20 px-0 xl:px-24">
					<h1 className="border-blue-550 text-blue-550 mb-14 pr-3 text-center  text-2xl font-bold uppercase leading-8 md:border-r-4 md:text-right">
						درباره ما
					</h1>
					<p className="text-justify">
						فعالیت BSPsim در پی احساس نیاز به ابزاری بومی، قابل دسترس، قابل
						اتکا، معتبر، کارامد، و مطابق نیاز های کاربران و بهره برداران صنعت
						ساختمان در دانشکده معماری و شهرسازی دانشگاه شهید بهشتی، آغاز شد.
						مطالعات گسترده موضوعات مرتبط با ارزیابی عملکرد ساختمان، در زمینه های
						مختلف از جمله علوم ساختمان، فناوری معماری، علوم کامپیوتر، و مهندسی
						معماری را گرد هم آورده است. این گروه پس از کسب رتبه اول طرح "نوآ" در
						پارک علم و فناوری دانشگاه شهیدبهشتی در تیرماه 1400، به صورت جدی به
						توسعه ابزار و گسترش آن پرداخت. این ابزار، با گذشت زمان تکمیل شده،
						حوزه های جامع تر و فراگیر تری را در بر خواهد گرفت و به واسطه نوع
						تدوین آن با الگویی یادگیرنده، هر لحظه دقیقتر و سریعتر از قبل خواهد
						بود.
					</p>
				</header>
				<section className=" flex flex-col gap-y-14 px-0 text-center xl:px-24">
					<div className="flex flex-wrap gap-y-10">
						{members.map((member, idx) => {
							return (
								<article
									key={idx}
									className="text-gray-650 flex w-full flex-col items-center px-5 font-normal capitalize sm:w-1/2 md:w-1/3 lg:w-1/4"
								>
									<MemberCard
										fullName={member.fullName}
										education={member.education}
										activityScope={member.activityScope}
										image={member.image}
									/>
								</article>
							);
						})}
					</div>
				</section>
			</main>
		</div>
	);
};

export default AboutUs;
