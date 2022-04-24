import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// component
import Profile from "../profile/Profile";
import ProjectHistoryModal from "../ProjectHistoryModal";
import Modal from "../modal/Modal";
// slice
import { selectUser } from "../../features/auth/authSlice";
// assets
import Logo from "../../assets/images/logo-02.png";
// icons
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ lang }) => {
	const { isLoggedIn } = useSelector(selectUser);

	const [showProjectHistoryModal, setShowProjectHistoryModal] = useState(false);
	const handleShowProjectHistoryModal = () => {
		setShowProjectHistoryModal(true);
	};

	return (
		<>
			{showProjectHistoryModal && (
				<Modal
					title="project history"
					closeModal={() => setShowProjectHistoryModal(false)}
				>
					<ProjectHistoryModal />
				</Modal>
			)}
			<nav className={`bg-gray-650 text-gray-300 ${lang && "font-irancell"}`}>
				<ul className="flex items-center justify-between px-5 py-4 sm:px-9">
					<li className="order-2 md:order-1">
						<Link to="/">
							<img src={Logo} className="h-8 w-auto" alt="glimpse logo" />
						</Link>
					</li>
					<li className="order-1 md:order-2 md:w-7/12 lg:w-6/12 ">
						<span className="flex h-10 w-10 items-center justify-start md:hidden">
							<FontAwesomeIcon icon={faBars} className="text-2xl" />
						</span>
						<ul
							className="hidden items-center justify-between text-lg font-normal capitalize md:flex"
							dir={lang ? "rtl" : "ltr"}
						>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									{lang ? "صفحه اصلی" : "home"}
								</NavLink>
							</li>
							<li className="relative">
								<NavLink
									to="/result"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
									onClick={(e) => {
										e.preventDefault();
										setShowProjectHistoryModal(true);
									}}
								>
									{lang ? "شبیه‌سازی‌ها" : "simulations"}
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/pricing"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									{lang ? "هزینه‌ها" : "pricing"}
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about-us"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									{lang ? "درباره ما" : "about us"}
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact-us"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									{lang ? "تماس با ما" : "contact us"}
								</NavLink>
							</li>
						</ul>
					</li>
					<li className="order-3">
						{isLoggedIn ? (
							<Profile
								handleShowProjectHistoryModal={handleShowProjectHistoryModal}
							/>
						) : (
							<>
								<NavLink
									to="/auth/sign-in"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									{lang ? "ورود" : "login"}
								</NavLink>
								<span className="mx-2">{`/`}</span>
								<NavLink
									to="/auth/sign-up"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									{lang ? "ثبت‌نام" : "register"}
								</NavLink>
							</>
						)}
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
