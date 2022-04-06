import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// slices
import { selectUser } from "../../features/auth/authSlice";
// services
import { logout } from "../../features/auth/authSlice";
// hooks
import useOutsideClick from "../../hooks/useOutsideClick";
// assets
import ProfileIcon from "../../assets/icons/Profile.svg";
import ChargeIcon from "../../assets/icons/charge.svg";
import SignOutIcon from "../../assets/icons/sign-out.svg";
import ProjectHistory from "../../assets/icons/project-history.png";
// icons
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const DropdownProfile = ({ showDropdown, handleShowProjectHistoryModal }) => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<ul
			className={`${
				showDropdown ? "max-h-screen" : "max-h-0"
			} shadow-full-sm absolute top-full right-0 z-10 flex w-max translate-y-9 transform flex-col divide-y-2 overflow-hidden rounded-md bg-white px-3 font-normal capitalize text-gray-500 transition-all`}
		>
			<li>
				<Link to="/profile" className="flex gap-x-4 px-2 py-4">
					<img src={ProfileIcon} alt="profile icon" className="h-auto w-6" />
					<span>profile</span>
				</Link>
			</li>
			<li
				onClick={(e) => {
					e.preventDefault();
					handleShowProjectHistoryModal();
				}}
			>
				<button className="flex gap-x-4 px-2 py-4">
					<img src={ProjectHistory} alt="profile icon" className="h-auto w-6" />
					<span>projects history</span>
				</button>
			</li>
			<li>
				<Link to="#" className="flex gap-x-4 px-2 py-4">
					<img src={ChargeIcon} alt="charge icon" className="h-auto w-6" />
					<span>charge account</span>
				</Link>
			</li>
			<li>
				<Link
					to="/auth"
					className="flex gap-x-4 px-2 py-4"
					onClick={handleLogout}
				>
					<img src={SignOutIcon} alt="sign out icon" className="h-auto w-6" />
					<span className="text-red-350">logout</span>
				</Link>
			</li>
		</ul>
	);
};

const Profile = ({ handleShowProjectHistoryModal }) => {
	const { isLoggedIn, user } = useSelector(selectUser);

	const ref = useRef(null);

	const [showProfileDropdown, setShowProfileDropdown] = useState(false);

	useOutsideClick(ref, () => setShowProfileDropdown(false));

	return (
		<>
			<button
				type="button"
				className="relative flex items-center gap-x-2"
				onClick={() => setShowProfileDropdown(!showProfileDropdown)}
				ref={ref}
			>
				<span className="text-lg">{isLoggedIn && user["full_name"]}</span>
				<span className="flex h-10 w-10 items-center justify-center">
					<FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
				</span>
				<DropdownProfile
					showDropdown={showProfileDropdown}
					handleShowProjectHistoryModal={handleShowProjectHistoryModal}
				/>
			</button>
		</>
	);
};

export default Profile;
