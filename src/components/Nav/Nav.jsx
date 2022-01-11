import React, { useState } from "react";
import { Link } from "react-router-dom";
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
							<Link to="/">home</Link>
						</li>
						<li className="relative">
							<Link to="/estimation/result/0">simulations</Link>
						</li>
						<li>
							<Link to="/pricing">pricing</Link>
						</li>
						<li>
							<Link to="/about-us">about us</Link>
						</li>
						<li>
							<Link to="/contact-us">contact us</Link>
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
