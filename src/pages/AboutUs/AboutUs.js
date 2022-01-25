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

const AboutUs = () => {
	const members = [
		{
			fullName: "mohamad tahsildoost",
			position: "Associate Professor SBU",
			job: "Architect",
			image: pic05,
		},
		{
			fullName: "Mahsa Zomorodian",
			position: "Associate Professor SBU",
			job: "Architect",
			image: pic08,
		},
		{
			fullName: "Roham Afghani ",
			position: "Associate Professor SBU",
			job: "Architect",
			image: pic09,
		},
		{
			fullName: "Mohammad Rajaian",
			position: "Master of Architectural technology",
			job: "",
			image: pic01,
		},
		{
			fullName: "Haniyeh Noorkajouri",
			position: "Master of Energy and Architecture",
			job: "",
			image: pic04,
		},
		{
			fullName: "Pegah Eshraghi",
			position: "PHD Researcher in Energy and Architecture",
			job: "",
			image: pic06,
		},
		{
			fullName: "Arman Nikkhah",
			position: "Master of Energy and Architecture",
			job: "",
			image: pic02,
		},
		{
			fullName: "Mohammad Tabatabaei",
			position: "Master of Energy and Architecture",
			job: "",
			image: pic03,
		},
		{
			fullName: "Sogand Haghighat",
			position: "Master of Energy and Architecture",
			job: "",
			image: pic07,
		},
		{
			fullName: "Erfan Shafiee",
			position: "Master of Architectural design",
			job: "",
			image: pic10,
		},
	];

	return (
		<div className="min-h-screen ">
			<header className="">
				<Nav />
			</header>
			<main className="px-24 py-16">
				<header className="mb-14">
					<h1 className="pl-3 leading-8 border-l-8 border-blue-550 text-blue-550 text-3xl font-bold uppercase">
						our team
					</h1>
				</header>
				<section className="flex flex-col gap-y-14 px-16 text-center">
					<div className="flex flex-wrap gap-y-10">
						{members.map((member, idx) => {
							return (
								<article
									key={idx}
									className="w-1/4 px-16 flex flex-col items-center font-normal text-gray-650 capitalize"
								>
									<MemberCard
										fullName={member.fullName}
										position={member.position}
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
