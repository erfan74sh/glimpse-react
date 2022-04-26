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
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = ({ lang }) => {
	const { isLoggedIn } = useSelector(selectUser);

	const [showProjectHistoryModal, setShowProjectHistoryModal] = useState(false);
	const handleShowProjectHistoryModal = () => {
		setShowProjectHistoryModal(true);
	};

	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

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
						<span
							className="flex h-10 w-10 cursor-pointer items-center justify-start md:hidden"
							onClick={() => {
								setShowBurgerMenu(!showBurgerMenu);
							}}
						>
							<FontAwesomeIcon
								icon={showBurgerMenu ? faTimes : faBars}
								className="text-2xl"
							/>
						</span>
						{/* for mobile screens */}
						<div
							className={`bg-gray-650 top-18 fixed left-0 z-10 h-screen w-screen border-t-2 ${
								showBurgerMenu ? "" : " -translate-x-full"
							} transform p-5 transition-all duration-300 md:hidden`}
						>
							<ul
								className="flex h-full flex-col items-center justify-center gap-y-6 text-lg font-normal capitalize sm:h-auto"
								dir={lang ? "rtl" : "ltr"}
							>
								<li>
									<NavLink
										to="/"
										className={({ isActive }) =>
											` ${
												isActive && "border-b-2 border-white text-white"
											} py-1.5 px-0.5 transition-transform hover:text-white`
										}
									>
										{lang ? "صفحه اصلی" : "home"}
									</NavLink>
								</li>
								<li>
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
						</div>
						{/* for md and bigger screens */}
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
							<div className="flex items-center gap-x-3">
								<NavLink
									to="/auth/sign-in"
									className=" py-1.5 px-0.5 text-white transition-all"
								>
									{lang ? "ورود" : "login"}
								</NavLink>
								<NavLink
									to="/auth/sign-up"
									className="bg-blue-550 hidden rounded-md py-1 px-2 text-white transition-all md:inline"
								>
									{lang ? "ثبت‌نام" : "register"}
								</NavLink>
							</div>
						)}
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
