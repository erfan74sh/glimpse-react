import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// component
import Profile from "../profile/Profile";
import DropdownProfile from "../dropdowns/dropdownProfile";
import ProjectHistoryModal from "../ProjectHistoryModal";
import Modal from "../modal/Modal";
// slice
import { selectUser } from "../../features/auth/authSlice";
// assets
import Logo from "../../assets/images/logo-02.png";

const Header = () => {
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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
			<nav className="bg-gray-650 text-gray-300">
				<ul className="flex items-center justify-between px-9 py-4">
					<li>
						<Link to="/">
							<img src={Logo} alt="glimpse logo" />
						</Link>
					</li>
					<li>
						<ul className="flex items-center justify-items-center gap-x-28 text-lg font-normal capitalize">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										` ${
											isActive && "border-b-2 border-white text-white"
										} py-1.5 px-0.5 transition-all hover:text-white`
									}
								>
									home
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
									simulations
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
									pricing
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
									about us
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
									contact us
								</NavLink>
							</li>
						</ul>
					</li>
					<li
						className="relative"
						onClick={() => {
							setShowProfileDropdown(!showProfileDropdown);
						}}
					>
						{isLoggedIn ? (
							<>
								<Profile />
								<DropdownProfile
									showDropdown={showProfileDropdown}
									handleShowProjectHistoryModal={handleShowProjectHistoryModal}
								/>
							</>
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
									login
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
									register
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
