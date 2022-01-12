import React from "react";
import Nav from "../../components/Nav";

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
import MemberCard from "./memberCard/MemberCard";

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
			image: pic01,
		},
		{
			fullName: "Mohammad Rajaian",
			position: "Master of Architectural technology",
			job: "",
			image: pic01,
		},
		{
			fullName: "Haniyeh Noorkajouri",
			position: "Master of Architectural technology",
			job: "",
			image: pic04,
		},
		{
			fullName: "Pegah Ishraqi",
			position: "Master of Architectural technology",
			job: "",
			image: pic06,
		},
		{
			fullName: "Arman Nikkhah",
			position: "Master of Architectural technology",
			job: "",
			image: pic02,
		},
		{
			fullName: "Sogand saadat",
			position: "Master of Architectural technology",
			job: "",
			image: pic07,
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
				<main className="flex flex-col gap-y-14 text-center">
					<div className="flex flex-wrap gap-y-10">
						{members.map((member, idx) => {
							return (
								<article
									key={idx}
									className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize"
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
						{/* <article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic05}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">
								mohamad tahsildoost
							</h4>
							<p>Associate Professor SBU</p>
							<span className="leading-none">Architect</span>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic08}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">
								Mahsa Zomorodian
							</h4>
							<p>Associate Professor SBU</p>
							<span className="leading-none">Architect</span>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic09}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">Roham Afghani</h4>
							<p>Associate Professor SBU</p>
							<span className="leading-none">Architect</span>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic01}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">
								Mohammad Rajaian
							</h4>
							<p>Master of Architectural technology</p>
						</article>
					</div>
					<div className="flex">
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic04}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">
								Haniyeh Noorkajouri
							</h4>
							<p>Master of energy and architecture</p>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic06}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">Pegah Ishraqi</h4>
							<p>Master of energy and architecture</p>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic02}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">Arman Nikkhah</h4>
							<p>Master of energy and architecture</p>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic03}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">
								mohammad tabatabaei
							</h4>
							<p>Master of energy and architecture</p>
						</article>
					</div>
					<div className="flex">
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic07}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">Sogand saadat</h4>
							<p>Master of energy and architecture</p>
						</article>
						<article className="w-1/4 px-8 flex flex-col items-center text-lg font-normal text-gray-650 capitalize">
							<img
								src={pic10}
								alt="profile pic"
								className="w-45 h-45 mb-5 rounded-full object-cover overflow-hidden"
							/>
							<h4 className="text-xl font-bold text-blue-550">Erfan shafiee</h4>
							<p>Master of architecture</p>
						</article> */}
					</div>
				</main>
			</main>
		</div>
	);
};

export default AboutUs;
