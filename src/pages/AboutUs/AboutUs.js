import React from "react";
// components
import Nav from "../../components/Nav";
import MemberCard from "./memberCard/MemberCard";
// constants
import { members } from "../../constants";

const AboutUs = () => {
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
