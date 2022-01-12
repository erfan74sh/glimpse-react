import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// component
import Profile from "../profile/Profile";
import DropdownProfile from "../dropdowns/dropdownProfile";
// import Auth from "../Auth";
// assets
import Logo from "../../assets/images/logo-02.png";

const Header = ({ handleShowProjectHistoryModal }) => {
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);

	// const [isLogin, setIsLogin] = useState(true);

	return (
		<nav className="bg-gray-650 text-white">
			<ul className="flex justify-between items-center px-9 py-4">
				<li>
					<Link to="/">
						<img src={Logo} alt="glimpse logo" />
					</Link>
				</li>
				<li>
					<ul className="flex justify-items-center items-center gap-x-28 text-lg font-normal capitalize">
						<li>
							<NavLink to="/">home</NavLink>
						</li>
						<li className="relative">
							<NavLink to="/estimation/result/0">simulations</NavLink>
						</li>
						<li>
							<NavLink to="/pricing">pricing</NavLink>
						</li>
						<li>
							<NavLink to="/about-us">about us</NavLink>
						</li>
						<li>
							<NavLink to="/contact-us">contact us</NavLink>
						</li>
					</ul>
				</li>
				<li
					className="relative"
					onClick={() => {
						setShowProfileDropdown(!showProfileDropdown);
					}}
				>
					<Profile />

					<DropdownProfile
						showDropdown={showProfileDropdown}
						handleShowProjectHistoryModal={handleShowProjectHistoryModal}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
