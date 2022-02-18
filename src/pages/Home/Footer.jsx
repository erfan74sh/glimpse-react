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
		<footer className="" dir="rtl">
			<header className="flex flex-col-reverse items-center pb-12">
				<h3 className="text-blue-550 text-2xl font-bold">ارتباط با ما</h3>
			</header>
			<section className="px-84 relative z-50 flex justify-between">
				<ul className="flex flex-col gap-y-8">
					<li className="flex items-center gap-x-2">
						<span className="flex h-6 w-6 items-center justify-center">
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								className="text-2xl text-gray-600"
							/>
						</span>

						<span>تهران.بلوار کشاورز.نبش فلطسین جنوبی. پلاک ۷۲. واحد ۵</span>
					</li>
					<li className="flex items-center gap-x-2">
						<span className="flex h-6 w-6 items-center justify-center">
							<FontAwesomeIcon
								icon={faPhone}
								className="text-2xl text-gray-600"
							/>
						</span>

						<span>۰۲۱۸۸۹۲۹۰۱۷ - ۰۹۹۳۹۴۴۴۷۷۵</span>
					</li>
				</ul>
				<ul
					className="flex flex-col items-start gap-y-8 text-2xl text-gray-600"
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
							<span className="text-base">BSP.sim</span>
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
							<span className="text-base">BSP.sim</span>
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
							<span className="text-base">Info@bsp.green</span>
						</Link>
					</li>
				</ul>
			</section>
			<img
				src={FooterImage}
				alt=""
				className="-mt-84 z-0 mx-auto h-auto w-2/3"
			/>
			<section className="flex flex-col items-center py-10">
				<img src={Logo} alt="glimpse logo" className="h-auto w-48" />
			</section>
		</footer>
	);
};

export default Footer;
