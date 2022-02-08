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
import pic09 from "./../../assets/profile/09.png";
import pic10 from "./../../assets/profile/10.jpg";
import pic11 from "./../../assets/profile/11.jpg";
import pic12 from "./../../assets/profile/12.jpg";

const AboutUs = () => {
	const members = [
		{
			fullName: "mohamad tahsildoost",
			education: "Associate Professor SBU",
			job: "Architect",
			image: pic05,
		},
		{
			fullName: "Mahsa Zomorodian",
			education: "Associate Professor SBU",
			job: "Architect",
			image: pic08,
		},
		{
			fullName: "Roham Afghani ",
			education: "Associate Professor SBU",
			job: "Architect",
			image: pic09,
		},
		{
			fullName: "Mohammad Rajaian",
			education: "Master of Architectural technology",
			job: "",
			image: pic01,
		},
		{
			fullName: "Haniyeh Noorkajouri",
			education: "Master of Energy and Architecture",
			job: "",
			image: pic04,
		},
		{
			fullName: "Pegah Eshraghi",
			education: "PHD Researcher in Energy and Architecture",
			job: "",
			image: pic06,
		},
		{
			fullName: "Arman Nikkhah",
			education: "Master of Energy and Architecture",
			job: "",
			image: pic02,
		},
		{
			fullName: "Mohammad Tabatabaei",
			education: "Master of Energy and Architecture",
			job: "",
			image: pic03,
		},
		{
			fullName: "Sogand Haghighat",
			education: "Master of Energy and Architecture",
			job: "",
			image: pic07,
		},
		{
			fullName: "Erfan Shafiee",
			education: "Master of Architectural design",
			job: "",
			image: pic10,
		},
		{
			fullName: "Amirmohammad Rabani Jalali",
			education: "Master of Energy and Architecture",
			job: "",
			image: pic11,
		},
		{
			fullName: "Mohammadreza Vatankhah",
			education: "Master of Software engineer",
			job: "",
			image: pic12,
		},
	];

	return (
		<div className="min-h-screen ">
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-14">
					<h1 className="border-blue-550 text-blue-550 border-l-8 pl-3 text-3xl font-bold uppercase leading-8">
						our team
					</h1>
				</header>
				<section className="flex flex-col gap-y-14 px-16 text-center">
					<div className="flex flex-wrap gap-y-10">
						{members.map((member, idx) => {
							return (
								<article
									key={idx}
									className="text-gray-650 flex w-1/4 flex-col items-center px-16 font-normal capitalize"
								>
									<MemberCard
										fullName={member.fullName}
										education={member.education}
										job={member.job}
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
