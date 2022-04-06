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
		<div
			className={`${
				showDropdown ? "max-h-screen" : "max-h-0"
			} shadow-full-sm absolute top-full right-0 z-10  w-max translate-y-9 transform  overflow-hidden  rounded-md bg-white font-normal capitalize text-gray-500 transition-all`}
		>
			<ul className="flex flex-col divide-y-2 px-3 py-2">
				<li className="py-1">
					<Link
						to="/profile"
						className="flex gap-x-4 rounded-md bg-white p-2 pr-3 transition-colors hover:bg-gray-50"
					>
						<img src={ProfileIcon} alt="profile icon" className="h-auto w-6" />
						<span>profile</span>
					</Link>
				</li>
				<li
					className="py-1"
					onClick={(e) => {
						e.preventDefault();
						handleShowProjectHistoryModal();
					}}
				>
					<Link
						to=""
						className="flex gap-x-4 rounded-md bg-white p-2 pr-3 transition-colors hover:bg-gray-50"
					>
						<img
							src={ProjectHistory}
							alt="profile icon"
							className="h-auto w-6"
						/>
						<span>projects history</span>
					</Link>
				</li>
				<li className="py-1">
					<Link
						to="#"
						className="flex gap-x-4 rounded-md bg-white p-2 pr-3 transition-colors hover:bg-gray-50"
					>
						<img src={ChargeIcon} alt="charge icon" className="h-auto w-6" />
						<span>charge account</span>
					</Link>
				</li>
				<li className="py-1">
					<Link
						to="/auth"
						className="flex gap-x-4 rounded-md bg-white p-2 pr-3 transition-colors hover:bg-gray-50"
						onClick={handleLogout}
					>
						<img src={SignOutIcon} alt="sign out icon" className="h-auto w-6" />
						<span className="text-red-350">logout</span>
					</Link>
				</li>
			</ul>
		</div>
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
