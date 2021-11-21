import React from "react";
import { Link } from "react-router-dom";
// component
import Profile from "../../../components/profile/Profile";
// assets
import Logo from "../../../assets/images/logo-02.png";

const Header = () => {
	return (
		<nav className="bg-gray-950 text-white">
			<ul className="flex justify-between items-center px-9 py-5">
				<li>
					<Link to="/">
						<img src={Logo} alt="glimpse logo" />
					</Link>
				</li>
				<li>
					<ul className="flex justify-items-center items-center gap-x-40">
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/">home</Link>
						</li>
					</ul>
				</li>
				<li>
					<Profile />
				</li>
			</ul>
		</nav>
	);
};

export default Header;
