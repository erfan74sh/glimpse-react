import React from "react";
// assets
import Logo from "../../assets/images/logo-02.png";
import FooterImage from "../../assets/images/footer-image.png";

import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className="" dir="rtl">
			<header className="flex flex-col-reverse items-center pb-12">
				<h3 className="text-blue-550 text-2xl font-bold">ارتباط با ما</h3>
			</header>
			<img src={FooterImage} alt="" className="-mt-45 mx-auto h-auto w-2/3" />
			<section className="flex flex-col items-center py-10">
				<img src={Logo} alt="glimpse logo" className="h-auto w-48" />
				<p className="text-sm font-normal text-gray-500">
					Designed By Glimpse Team
				</p>
			</section>
		</footer>
	);
};

export default Footer;
