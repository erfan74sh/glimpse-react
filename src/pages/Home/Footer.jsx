import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// assets
import Logo from "../../assets/images/logo-02.png";
import FooterImage from "../../assets/images/footer-image.png";
// icons
import {
	faInstagramSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className="font-irancell" dir="rtl">
			<header className="relative mb-12 text-center">
				<span className="bg-blue-550 absolute left-1/2 top-1/2 z-0 block h-0.5 w-11/12 translate-y-1/2 -translate-x-1/2 transform md:w-2/3"></span>
				<h3 className="text-blue-550 relative z-10 inline-block bg-white px-5 text-2xl font-bold">
					ارتباط با ما
				</h3>
			</header>
			<section className="xl:px-84 relative z-50 flex flex-col justify-between gap-y-5 px-10 md:flex-row md:px-14 lg:px-24">
				<ul className="flex flex-col items-center gap-y-8 md:items-start">
					<li className="flex items-center gap-x-2">
						<span className="hidden h-6 w-6 items-center justify-center md:flex">
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								className="text-2xl text-gray-600"
							/>
						</span>
						<span className="text-center md:text-right">
							تهران.دانشگاه شهید‌بهشتی، ساختمان شماره ۲ دانشکده معماری و شهرسازی
						</span>
					</li>
					<li className="flex items-center gap-x-2">
						<span className="hidden h-6 w-6 items-center justify-center md:flex">
							<FontAwesomeIcon
								icon={faPhone}
								className="text-2xl text-gray-600"
							/>
						</span>

						<span>۰۹۹۳۹۴۴۴۷۷۵ _ ۰۲۱۸۸۹۲۹۰۱۷</span>
					</li>
				</ul>
				<ul
					className="flex items-center  justify-center gap-x-5 gap-y-8 font-sans text-2xl text-gray-600 md:flex-col md:items-start"
					dir="ltr"
				>
					<li className="group h-6">
						<Link
							to="#"
							className="group-hover:text-blue-550  flex h-full items-center justify-center gap-x-2"
						>
							<span className="flex w-6 items-center justify-center">
								<FontAwesomeIcon
									icon={faInstagramSquare}
									className="group-hover:text-blue-550 "
								/>{" "}
							</span>
							<span className="hidden text-base md:inline-block">BSP.sim</span>
						</Link>
					</li>
					<li className="group h-6">
						<Link
							to="#"
							className="group-hover:text-blue-550  flex h-full items-center justify-center gap-x-2"
						>
							<span className="flex w-6 items-center justify-center">
								<FontAwesomeIcon
									icon={faLinkedin}
									className="group-hover:text-blue-550 "
								/>{" "}
							</span>
							<span className="hidden text-base md:inline-block">BSP.sim</span>
						</Link>
					</li>
					<li className="group h-6">
						<Link
							to="#"
							className="group-hover:text-blue-550  flex h-full items-center justify-center gap-x-2"
						>
							<span className="flex w-6 items-center justify-center">
								<FontAwesomeIcon
									icon={faEnvelope}
									className="group-hover:text-blue-550 "
								/>{" "}
							</span>
							<span className="hidden text-base md:inline-block">
								Info@bsp.green
							</span>
						</Link>
					</li>
				</ul>
			</section>
			<img
				src={FooterImage}
				alt="footer"
				className="-mt-84 z-0 hidden h-auto md:block lg:mx-auto xl:w-2/3"
			/>
			<section className="flex flex-col items-center py-10">
				<img src={Logo} alt="glimpse logo" className="h-auto w-48" />
			</section>
		</footer>
	);
};

export default Footer;
