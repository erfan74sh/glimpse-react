import React, { useState } from "react";
import { Link } from "react-router-dom";
// component
import Profile from "../profile/Profile";
import DropdownMenu from "../dropdowns/dropDownMenu";
import DropdownProfile from "../dropdowns/dropdownProfile";
// assets
import Logo from "../../assets/images/logo-02.png";

const Header = () => {
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);

	return (
		<nav className="bg-gray-650 text-white">
			<ul className="flex justify-between items-center px-9 py-5">
				<li>
					<Link to="/">
						<img src={Logo} alt="glimpse logo" />
					</Link>
				</li>
				<li>
					<ul className="flex justify-items-center items-center gap-x-28 text-xl font-normal capitalize">
						<li>
							<Link to="/">home</Link>
						</li>
						<li className="relative">
							<Link to="/estimation">simulations</Link>
							<DropdownMenu />
						</li>
						<li>
							<Link to="/about-us">about us</Link>
						</li>
						<li>
							<Link to="/">contact us</Link>
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
					<DropdownProfile showDropdown={showProfileDropdown} />
				</li>
			</ul>
		</nav>
	);
};

export default Header;
