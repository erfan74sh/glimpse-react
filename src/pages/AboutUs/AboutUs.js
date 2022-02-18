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
			fullName: "mohammad tahsildoost",
			education: "Ph.D. of arch. Building science",
			activityScope: "Architect",
			image: pic05,
		},
		{
			fullName: "Zahra Sadat Zomorodian",
			education: "Ph.D. of arch. Building science",
			activityScope: "Architect",
			image: pic08,
		},
		{
			fullName: "Roham Afghani ",
			education: "Ph.D. in Building Systems Engineering",
			activityScope: "Architect",
			image: pic09,
		},
		{
			fullName: "Parsa Bagherzadeh",
			education: "Ph.D. of computer science",
			activityScope: "Artificial Intelligence",
			image: pic13,
		},

		{
			fullName: "Haniyeh Noorkajouri",
			education: "Master of Energy and Architecture",
			activityScope: "Daylight - Fire resilience",
			image: pic04,
		},
		{
			fullName: "Pegah Eshraghi",
			education: "Ph.D. Researcher in Energy and Architecture",
			activityScope: "Energy consumption - Thermal comfort",
			image: pic06,
		},

		{
			fullName: "Amirmohammad Rabani Jalali",
			education: "Master of Energy and Architecture",
			activityScope: "structure",
			image: pic11,
		},
		{
			fullName: "Mohammad Rajaian",
			education: "Master of Architectural technology",
			activityScope: "Structure",
			image: pic01,
		},
		{
			fullName: "Arman Nikkhah",
			education: "Master of Energy and Architecture",
			activityScope: "Data Analyzer",
			image: pic02,
		},
		{
			fullName: "Sogand Haghighat",
			education: "Master of Energy and Architecture",
			activityScope: "Mechanical - Graphic",
			image: pic07,
		},
		{
			fullName: "Mohammad Tabatabaei",
			education: "Master of Energy and Architecture",
			activityScope: "Computational Design",
			image: pic03,
		},
		{
			fullName: "Erfan Shafiee",
			education: "Master of Architectural design",
			activityScope: "frontend developer",
			image: pic10,
		},
		{
			fullName: "Mohammadreza Vatankhah",
			education: "Master of Software engineer",
			activityScope: "backend developer",
			image: pic12,
		},
	];

	return (
		<div className="min-h-screen ">
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className=" mb-20 flex flex-col items-center gap-y-5 px-24 text-center">
					<div className="relative block w-full  ">
						<span className="bg-blue-550 absolute left-1/2 top-1/2 z-0 block h-0.5 w-full translate-y-1/2 -translate-x-1/2 transform"></span>
						<h3 className="text-blue-550 relative z-10 inline-block bg-white px-5 text-2xl font-bold">
							شکل‌گیری{" "}
						</h3>
					</div>
					<p className="">
						فعالیت BSPsim در پی احساس نیاز به ابزاری بومی، قابل دسترس، قابل
						اتکا، معتبر، کارامد، و مطابق نیاز های کاربران و بهره برداران صنعت
						ساختمان در دانشکده معماری و شهرسازی دانشگاه شهید بهشتی، آغاز شد.
						مطالعات گسترده موضوعات مرتبط با ارزیابی عملکرد ساختمان، در زمینه های
						مختلف از جمله علوم ساختمان، فناوری معماری، علوم کامپیوتر، و مهندسی
						معماری را گرد هم آورده است. این گروه پس از کسب رتبه اول طرح "نوآ" در
						پارک علم و فناوری دانشگاه شهیدبهشتی در تیرماه 1400، به صورت جدی به
						توسعه ابزار و گسترش آن پرداخت و از اینرو با گذشت زمان تکمیل شده،
						حوزه های جامع تر و فراگیر تری را در بر خواهد گرفت و به واسطه نوع
						تدوین آن با الگویی یادگیرنده، هر لحظه دقیقتر و سریعتر از قبل خواهد
						بود.
					</p>
				</header>

				<section className="flex flex-col gap-y-14 px-24 text-center">
					<div className="flex flex-wrap gap-y-10">
						{members.map((member, idx) => {
							return (
								<article
									key={idx}
									className="text-gray-650 flex w-1/4 flex-col items-center px-5 font-normal capitalize"
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
