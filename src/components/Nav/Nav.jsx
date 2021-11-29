import React from "react";
import { Link } from "react-router-dom";
// component
import Profile from "../profile/Profile";
// assets
import Logo from "../../assets/images/logo-02.png";

const Header = () => {
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
						<li>
							<Link to="/estimation">simulations</Link>
						</li>
						<li>
							<Link to="/about-us">about us</Link>
						</li>
						<li>
							<Link to="/">contact us</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to="/profile">
						<Profile />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
